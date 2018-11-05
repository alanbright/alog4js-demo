/**
 * @apiName userAPI
 * @apiVersion 0.0.1
 * @apiGroup user
 * @api {get} /user/magic magic
 * @apiParam {String} spell spell of magic
 *
 * @apiDescription input spell and output magic
 *
 * @apiSuccess {string} output waza!
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "output": "WAZA!"
 *      }
 *
 * @apiUse basicError
 *
 */

