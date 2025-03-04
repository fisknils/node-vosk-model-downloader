# Vosk Model Downloader

This project provides a utility to list and download Vosk models from the official Vosk website. It is intended to be used as a library and can be installed via npm.

## Installation

1. Install the package via npm:
    ```sh
    npm install vosk-model-downloader
    ```

## Usage

### List Available Models

To list all available models, you can use the `list` method:

```javascript
import { list } from 'vosk-model-downloader';

list().then(models => {
    console.log('Available models:');
    console.log(models);
}).catch(error => {
    console.error('Failed to list models:', error.message);
});
```

### Download a Model

To download a specific model, you can use the `download` method:

```javascript
import { download } from 'vosk-model-downloader';

download('vosk-model-small-tg-0.22', 'vosk-model-small-tg-0.22.zip').then(result => {
    if (result.success) {
        console.log(result.message);
    } else {
        console.error(result.message);
    }
});
```

**Note:** When using `download(model, localPath)`, if the `localPath` already exists, it will not be overwritten.

# License
MIT

## Repository
For more information, visit the [GitHub repository](https://github.com/fisknils/vosk-model-downloader).
