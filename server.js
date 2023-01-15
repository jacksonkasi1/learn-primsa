require('./src/config');
require('module-alias/register');
const sls = require('serverless-http');
const { server } = require('./src/app');

module.exports.handler = sls(server);
