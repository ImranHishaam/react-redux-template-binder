#!/usr/bin/env /usr/local/bin/node

const npm = require("npm");
const fs = require('fs');
const packageDetails = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const ncp = require('ncp').ncp;
const path = require('path');
var nodePath = require.resolve('module');

const templatePath = '/React/'
const copyPath = path.dirname(fs.realpathSync('package.json')) + '/src'

npm.load({
    loaded: false,
    'save': true
}, function (err) {
    // catch errors
    npm.commands.install(["redux", "react-redux", "redux-logger", "redux-promise", "redux-thunk"], function (er, data) {
        // log the error or data
        copyFiles(__dirname + templatePath)
    });

    npm.on("log", function (message) {
        // log the progress of the installation
        console.log(message);
    });
    
});

function copyFiles(npmPath) {

    console.log('Copying files...');

    ncp(npmPath, copyPath, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('Copying files complete.');
    });

    // fs.writeFile(copyPath + '/index.android.js', indexFileContent, function () { console.log('done') })

}