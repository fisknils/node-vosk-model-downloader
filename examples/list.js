import Indices from '../index-downloader.js';

/**
 * Lists all available models and logs them.
 */
const listModels = async () => {
    const indices = new Indices();

    try {
        const models = await indices.list();
        console.log('Available models:');
        console.log(models);
    } catch (error) {
        console.error('Failed to list models:', error.message);
    }
};

listModels();