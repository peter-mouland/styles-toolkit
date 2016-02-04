#!/usr/bin/env node
var argv = require('yargs').argv;
var s3 = require('s3');

const file = 'toolkit.css';

var client = s3.createClient({
    s3Options: {
        accessKeyId: process.env.STYLES_TOOLKIT_ACCESS_KEY,
        secretAccessKey: process.env.STYLES_TOOLKIT_SECRET,
        // any other options are passed to new AWS.S3()
        // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
    }
});

var params = {
    localFile: `dist/${file}`,

    s3Params: {
        Bucket: process.env.STYLES_TOOLKIT_BUCKET,
        Key: `styles-toolkit/${argv.v}/${file}`
        // other options supported by putObject, except Body and ContentLength. 
        // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property 
    }
};

var lister = client.listObjects({ s3Params: { Bucket : params.s3Params.Bucket, Prefix: params.s3Params.Key } });
lister.on('error', function(err) {
    console.error("unable to list:", err.stack);
});
lister.on('progress', function() {
    console.log("progress list found : ", lister.progressAmount);
});
lister.on('data', function(data) {
    if (data.Contents.length > 0) {
        throw new Error(`
        Version ${argv.v} already exists. Please bump the version number first!!
        
         * npm version major|minor|patch
        `)
    }

    var uploader = client.uploadFile(params);
    uploader.on('error', function(err) {
        console.error("unable to upload:", err.stack);
    });
    uploader.on('progress', function() {
        console.log("progress", uploader.progressMd5Amount,
            uploader.progressAmount, uploader.progressTotal);
    });
    uploader.on('end', function() {
        console.log("done uploading");
    });
});

lister.on('end', function() {
    console.log("done listing");
});