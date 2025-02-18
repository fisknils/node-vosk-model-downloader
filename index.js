import Indices from "./index-downloader";

/**
 * Downloads a specific model to the local path.
 * @param {string} model - The name of the model.
 * @param {string} localPath - The local path to save the downloaded model.
 * @returns {Promise<Object>} A promise that resolves to an object containing the success status and message.
 */
const download = async (model, localPath) => {
    const indices = new Indices();
    return await indices.download(model, localPath);
};

/**
 * Lists all available models from the Vosk website.
 * @returns {Promise<Object>} A promise that resolves to an object containing model names and their URLs.
 */
const list = async () => {
    const indices = new Indices();
    return await indices.list();
};

export default {
    Indices,
    download,
    list
};