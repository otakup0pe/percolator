var dir = './lib/';
if (process.env.PERCOLATOR_COVERAGE){
  dir = './lib-cov/';
}
var helperDir = dir + 'ContextHelpers/';

exports.JsonResponder = require(dir + 'JsonResponder');
exports.StatusManager = require(dir + 'StatusManager');
exports.HyperJson = require(dir + 'HyperJson');
exports.HyperJsonCollection = require(dir + 'HyperJsonCollection');
exports.CRUDCollection = require(dir + 'CRUDCollection');

exports.AuthenticateHelper = require(helperDir + 'Authenticate');
exports.BasicAuthenticateHelper = require(helperDir + 'BasicAuthenticate');
exports.ObjectHelper = require(helperDir + 'Object');
exports.onBodyHelper = require(helperDir + 'onBody');
exports.onJsonHelper = require(helperDir + 'onJson');
exports.FetchHelper = require(helperDir + 'Fetch');
exports.ContextFaker = require(dir + 'ContextFaker');
exports.Percolator = require(dir + 'Percolator');
