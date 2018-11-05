// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------

/**
 * @apiDefine 200_success_NotFound
 * @apiSuccessExample Success-Response (NotFound):
 *     HTTP/1.1 200 OK
 *     {
 *       res: "NotFound"
 *     }
 */

// ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------

/**
 * @apiDefine basicError
 *
 * @apiError (400) MissParameter header or parameter miss
 * @apiErrorExample Error-Response (400):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       res: "MissParameter"
 *     }
 *
 * @apiError (400) BadRequest header or paremeter format error, confirm the format or length is suitable
 * @apiErrorExample Error-Response (400):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       res: "BadRequest"
 *     }
 *
 * @apiError (401) Unauthorized
 * @apiErrorExample Error-Response (401):
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       res: "Unauthorized"
 *     }
 *
 * @apiError (500) ServerError The server happened unexpected error.
 * @apiErrorExample Error-Response (500):
 *     HTTP/1.1 500 Server Error
 *     {
 *       res: "ServerError"
 *     }
 *
 */

/**
 * @apiDefine ForbiddenError
 *
 * @apiError (403) Forbidden The Request is forbidden
 * @apiErrorExample Error-Response (403):
 *     HTTP/1.1 403 Forbidden
 *     {
 *       res "Forbidden"
 *     }
 *
 */

// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------


