import Indices from '../index-downloader.js';

/**
 * Downloads a specific model and logs the result.
 * @param {string} model - The name of the model.
 * @param {string} localPath - The local path to save the downloaded model.
 */
const downloadModel = async (model, localPath) => {
    const indices = new Indices();

    try {
        const result = await indices.download(model, localPath);
        if (result.success) {
            console.log(result.message);
        } else {
            console.error(result.message);
        }
    } catch (error) {
        console.error('Failed to download model:', error.message);
    }
};

downloadModel('vosk-model-small-tg-0.22', 'vosk-model-small-tg-0.22.zip');