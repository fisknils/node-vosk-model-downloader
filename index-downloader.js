import fetch from 'node-fetch';
import { existsSync, unlinkSync, createWriteStream } from 'fs';

class Indices {
    constructor() {
        this.models = {};
    }

    async list() {
        // If this.models is not empty, return it
        if (Object.keys(this.models).length > 0) {
            return this.models;
        }

        const url = 'https://alphacephei.com/vosk/models';
        const response = await fetch(url);
        const html = await response.text();

        const regex = /href="(.+?\/vosk\/models\/)(.+?)\.zip"/g;

        [...html.matchAll(regex)].forEach(match => {
            this.models[match[2]] = match[1] + match[2] + '.zip';
        });

        return this.models;
    }

    async get(model) {
        // Check if this.models is empty
        if (Object.keys(this.models).length === 0) {
            await this.list();
        }

        // Return the URL if the model exists, otherwise return null
        return this.models[model] || null;
    }

    async download(model, localPath) {
        const success = message => {
            return {
                success: true,
                message: message,
                localPath: localPath
            };
        };

        const error = message => {
            return {
                success: false,
                message: message
            };
        };

        if (existsSync(localPath)) {
            return success('Local path exists');
        }

        const url = await this.get(model);

        if (!url) {
            return error(`Model ${model} not found`);
        }

        try {
            // Download the model
            const response = await fetch(url);
            const fileStream = createWriteStream(localPath);
            await new Promise((resolve, reject) => {
                response.body.pipe(fileStream);
                response.body.on('error', reject);
                fileStream.on('finish', resolve);
            });
            return success(`Downloaded model ${model}`);
        } catch (error) {
            // If this happens we need to abort, and clean up after ourselves, because the model didn't download successfully.
            if (existsSync(localPath)) {
                unlinkSync(localPath);
            }
            return new Error(`Failed to download model ${model}: ${error.message}`);
        }
    }
}

export default Indices;