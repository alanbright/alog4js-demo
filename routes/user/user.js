"use strict";                                                                                         

const Router = require('express').Router;
const router = new Router();

const api = require('./api');

router.get('/magic', api.magic);

module.exports = router;

