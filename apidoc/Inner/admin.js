/**
 * @apiName updateLogLevel
 * @apiVersion 0.0.1
 * @apiGroup admin
 * @api {get} /admin/log log
 * @apiParam {String} level the level of log: ['trace','debug','info','warn','error','fatal']
 *
 * @apiDescription update the load level globally
 *
 * @apiSuccess {string} log level set ${level}
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          log level set ${level}
 *      }
 *
 * @apiUse basicError
 *
 */


/**
 * @apiName updateLogLevelDomain
 * @apiVersion 0.0.1
 * @apiGroup admin
 * @api {get} /admin/logUpdate logUpdate
 * @apiParam {String} show the domain of log which you want to set
 * @apiParam {String} level the level of log ['trace','debug','info','warn','error','fatal']
 *
 * @apiDescription get news collect info
 *
 * @apiSuccess {string} update ${show} level:${level}
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *           update ${show} level:${level}
 *      }
 *
 * @apiUse basicError
 *
 */

