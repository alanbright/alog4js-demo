"use strict";
const admin_Router = require('./admin');
module.exports= function(expressServ) {
    expressServ.use('/admin', admin_Router);//for express 4.0
}
