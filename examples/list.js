import Indices from '../index-downloader.js';

const indices = new Indices();

indices.list().then(models => {
    console.log('Available models:');
    console.log(models);
}).catch(error => {
    console.error('Failed to list models:', error.message);
});