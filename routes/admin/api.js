"use strict";

exports.log = function(req, res){
    const logger = require('alog4js').getLogger('routes.admin.log');
    new Promise(function(resolve, reject){
        const logger = require('alog4js').getLogger();
        logger.info("req.query", req.query)
        const logLevel = ['trace','debug','info','warn','error','fatal'];
        let level = (req.query.level) ? String(req.query.level) : undefined;
        if(logLevel.includes(level)){
            logger.level = level;
            return resolve("log level set "+level)
        }else{
            return reject({errorCode:400, msg:"Bad Parameter"})
        }
    }).then(result => {
        return res.status(200).send(result);
    }).catch(err => {
        return res.status(err.errorCode).send(err.msg);
    });
};

exports.logUpdate = function(req, res){
    const logger = require('alog4js').getLogger('routes.admin.logUpdate');
    new Promise(function(resolve, reject){
        const log4js = require('alog4js');
        const logger = log4js.getLogger();
        logger.info("req.query", req.query)
        const logLevel = ['trace','debug','info','warn','error','fatal'];
        let level = (req.query.level) ? String(req.query.level) : undefined;
        let show = (req.query.show) ? String(req.query.show) : undefined;
        if(logLevel.includes(level) && show){
            logger.debug("show", show, "level",level)
            log4js.update(show, level);
            logger.debug("log4js.categories",log4js.categories);
            return resolve("update "+show+" level:"+level)
        }else{
            logger.error("logUpdate miss parameter")
            return reject({errorCode:400, msg:"Bad Parameter"})
        }
    }).then(result => {
        return res.status(200).send(result);
    }).catch(err => {
        return res.status(err.errorCode).send(err.msg);
    });
};

