'use strict';

exports.fileUrlDELETE = function(args, res, next) {
  /**
   * Remove a file information.
   *
   * url String Url of the file to delete
   * no response value expected for this operation
   **/
  res.end();
}

exports.fileUrlGET = function(args, res, next) {
  /**
   * Gets information on a file given a url.
   *
   * url String Url of the file
   * returns File
   **/
  var examples = {};
  examples['application/json'] = {
  "fileName" : "/volume1/files/myfile.mp4",
  "progress" : "100",
  "timeStartDownload" : "2015-07-07T15:49:51.230+02:00",
  "url" : "http://www.youtube.com/myfile.mp4",
  "status" : "Downloaded"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.fileUrlPUT = function(args, res, next) {
  /**
   * Create or update the file information
   *
   * url String Unique url of the file
   * no response value expected for this operation
   **/
  res.end();
}

exports.filesGET = function(args, res, next) {
  /**
   * Get all files which match the query.
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "fileName" : "/volume1/files/myfile.mp4",
  "progress" : "100",
  "timeStartDownload" : "2015-07-07T15:49:51.230+02:00",
  "url" : "http://www.youtube.com/myfile.mp4",
  "status" : "Downloaded"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

