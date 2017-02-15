'use strict';

exports.fileUrlDELETE = function(args, res, next) {
  /**
   * Remove a file information.
   *
   * url String Url of the file to delete
   * no response value expected for this operation
   **/
  var url = require("url");
  var path = require("path");
  var parsed = url.parse(args.url.value);
  var filename = path.basename(parsed.pathname);
  var fs = require("fs");
  fs.unlinkSync(filename + ".dlson");
  res.end();
}

exports.fileUrlGET = function(args, res, next) {
  /**
   * Gets information on a file given a url.
   *
   * url String Url of the file
   * returns File
   **/
  var url = require("url");
  var path = require("path");
  var parsed = url.parse(args.url.value);
  var filename = path.basename(parsed.pathname);
  var examples = [];
  var fs = require("fs");
  
  examples.push(JSON.parse(fs.readFileSync(filename + ".dlson",'utf8')));
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(examples[0],null,2));
}

exports.fileUrlPUT = function(args, res, next) {
  /**
   * Create or update the file information
   *
   * url String Unique url of the file
   * no response value expected for this operation
   **/
  var url = require("url");
  var path = require("path");
  var parsed = url.parse(args.url.value);
  var filename = path.basename(parsed.pathname);

  var newDl = {
        "url": args.url.value,
        "fileName": filename,
        "status": "NotStarted",
        "progress": "0",
        "timeStartDownload": "2015-07-07T15:49:51.230+02:00"
  };
  var fs = require("fs");
  var json = JSON.stringify(newDl); //convert it back to json
  fs.writeFile(filename + ".dlson", json, 'utf8'); 
  res.end();
}

exports.filesGET = function(args, res, next) {
  /**
   * Get all files which match the query.
   *
   * returns List
   **/
  var examples = [];
  var fs = require("fs");
  var list = fs.readdirSync(".");
  list.forEach(function(file) {
      if (file.indexOf(".dlson") > -1) {
          examples.push(JSON.parse(fs.readFileSync(file,'utf8')));
      }
  });
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(examples,null,2));
}

