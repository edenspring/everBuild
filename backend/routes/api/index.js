const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const landsRouter = require('./lands.js');
const placesRouter = require('./places.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/lands', landsRouter);

router.use('/places', placesRouter);

module.exports = router;
