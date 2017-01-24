var zip = require('cross-zip')
var path = require('path')
var package = require(path.join(__dirname, 'package.json'))

var inPath = path.join(__dirname, 'public') // folder to zip
var outPath = path.join(__dirname, package.name + '_' + package.version + '.zip') // name of output zip file

zip.zipSync(inPath, outPath)