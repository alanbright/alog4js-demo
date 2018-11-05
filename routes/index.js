const user_Routes= require('./user');
const admin_Routes= require('./admin');
module.exports= function(expressServ) {
    user_Routes(expressServ);
    admin_Routes(expressServ);
};
