const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const dashboardRoute = require('./dashboard-route.js');
router.use('/dashboard', dashboardRoute);


module.exports = router;