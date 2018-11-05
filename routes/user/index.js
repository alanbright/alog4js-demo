"use strict";
const user_Router = require('./user');
module.exports= function(expressServ) {
    expressServ.use('/user', user_Router);//for express 4.0
}
