"use strict";

const logger = require('alog4js').getLogger('routes.user');
const insert = require('../../modules/insert');
const update = require('../../modules/update');

exports.magic = function(req, res){
    new Promise(function(resolve, reject){
        logger.info("req.query", req.query)
        let spell = (req.query.spell) ? req.query.spell : undefined;
        if(spell){
            logger.trace("logger trace demo");
            logger.debug("logger debug demo");
            logger.info("logger info demo");
            logger.warn("logger warn demo");
            logger.error("logger error demo");
            logger.fatal("logger fatal demo 1");
            logger.fatal("logger fatal demo 2");

            logger.debug("logger debug get in insert.insertDB");
            insert.insertDB();
            logger.debug("logger debug get in update.updateDB");
            update.updateDB();

            return resolve({output:"WAZA!"})
        }else{
            logger.error("logger error demo");
            logger.fatal("logger fatal demo");
            return reject({errorCode:400, msg:"Bad Request"})
        }
    }).then(result => {
        return res.status(200).send(result);
    }).catch(err => {
        return res.status(err.errorCode).send(err.msg);
    });

};
