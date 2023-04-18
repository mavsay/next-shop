'use strict';

const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

const api = new Map();

const apiPath = './api/';

const cacheFile = name => {
    const filePath = apiPath + name;
    const key = path.basename(filePath, '.js');
    try {
        const libPath = require.resolve(filePath);
        delete require.cache[libPath];
    } catch (e) {
        return;
    }
    try {
        const method = require(filePath);
        api.set(key, method);
    } catch (error) {
        api.delete(key);
    }
};

const cacheFolder = path => {
    fs.readdir(path, (err, files) => {
        if (err) throw err;
        files.forEach(cacheFile);
    });
};

const watch = path => {
    fs.watch(path, (event, file) => {
        cacheFile(file);
    });
};

setTimeout(() => {
    console.dir({ api })
}, 1000)

const receiveArgs = async req => {
    const buffers = [];
    for await (const chunk of req) buffers.push(chunk);
    const data = Buffer.concat(buffers).toString();
    return JSON.parse(data);
}

const httpError = (res, status, message) => {
    res.statusCode = status;
    res.end("${message}");
    process.exit(1);
};

cacheFolder(apiPath);
watch(apiPath);





http.createServer(async (req, res) => {
    req.setHeader('Content-Type', 'type');
    req.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
    req.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    const url = req.url;
    const [first, second] = url.substring(1).split('/');
    if (first === 'api') {
        const method = api.get(second);
        const args = await receiveArgs(req);
        try {
            const result = await method(...args);
            if (!result) {
                httpError(res, 500, 'Server error');
                return;
            }
            res.end(JSON.stringify(result));
        } catch (error) {
            httpError(res, 500, 'Server error');
        }
    } else {
        const path = `./static/${first}`;
        console.log(path, 'path')
        try {
            const data = await fs.promises.readFile(path);
            res.end(data);
        } catch (error) {
            httpError(res, 404, 'File not found');
        }
    }
}).listen(8000);
