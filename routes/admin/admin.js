"use strict";                                                                                         

const Router = require('express').Router;
const router = new Router();

const api = require('./api');

router.get('/log', api.log);
router.get('/logUpdate', api.logUpdate);

module.exports = router;

