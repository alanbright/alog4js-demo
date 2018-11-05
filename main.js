"use strict";
const log4js = require('alog4js')
log4js.init(['default','DB','modules'])
const logger = log4js.getLogger();


logger.trace("logger trace demo");
logger.debug("logger debug demo");
logger.info("logger info demo");
logger.warn("logger warn demo");
logger.error("logger error demo");
logger.fatal("logger fatal demo");


const db = require('./database/index.js');
const dbpool = require('./database/pool.js');
const insert = require('./modules/insert');
const update = require('./modules/update');

const express = require('express');
const path = require('path');
const app = express();

// initial API Route.
var RESTAPI = require('./routes');
RESTAPI(app);//initial the API

// For API doc
app.use('/alldoc',express.static(path.join(__dirname,'apidoc/AllBuild')));
app.use('/doc',express.static(path.join( __dirname, 'apidoc/Build' )));


const server = require('http').createServer(app);
const port = 8000
server.listen(port, function() {
    logger.info("Express server listening on port", port);
});
