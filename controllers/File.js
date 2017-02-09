'use strict';

var url = require('url');

var File = require('./FileService');

module.exports.fileUrlDELETE = function fileUrlDELETE (req, res, next) {
  File.fileUrlDELETE(req.swagger.params, res, next);
};

module.exports.fileUrlGET = function fileUrlGET (req, res, next) {
  File.fileUrlGET(req.swagger.params, res, next);
};

module.exports.fileUrlPUT = function fileUrlPUT (req, res, next) {
  File.fileUrlPUT(req.swagger.params, res, next);
};

module.exports.filesGET = function filesGET (req, res, next) {
  File.filesGET(req.swagger.params, res, next);
};
