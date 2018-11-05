var logger = require('alog4js').getLogger('modules.insert');
logger.trace("logger trace demo");
logger.debug("logger debug demo");
logger.info("logger info demo");
logger.warn("logger warn demo");
logger.error("logger error demo");
logger.fatal("logger fatal demo");

const db = require('../database/index.js');

const insertDB = () =>{
    db.getPool();
    logger.trace("logger trace demo");
    logger.debug("logger debug demo");
    logger.info("logger info demo");
    logger.warn("logger warn demo");
    logger.error("logger error demo");
    logger.fatal("logger fatal demo");
    return
}
exports.insertDB = insertDB;
