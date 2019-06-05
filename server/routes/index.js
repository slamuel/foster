const catchallRouter = require('./catch-all.route');
const apiRouter = require('express').Router();
const petRouter = require('./pet.routes');
const router = require('express').Router();

router.use('/pets', petRouter);

module.exports = apiRouter.use('/api', router).use(catchallRouter);