var logger = require('alog4js').getLogger('DB.pool');
logger.trace("logger trace demo");
logger.debug("logger debug demo");
logger.info("logger info demo");
logger.warn("logger warn demo");
logger.error("logger error demo");
logger.fatal("logger fatal demo");

const getOne = () =>{
    logger.trace("logger trace demo");
    logger.debug("logger debug demo");
    logger.info("logger info demo");
    logger.warn("logger warn demo");
    logger.error("logger error demo");
    logger.fatal("logger fatal demo");
    return
}
exports.getOne = getOne;
