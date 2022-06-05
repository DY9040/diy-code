const router = require('express').Router();

const postRoutes = require('./post-routes');
router.use('/posts', postRoutes);


const commentRoute = require('./commentRoute');
router.use('/comments', commentRoute);

const userRoute = require('./userRoute');
router.use('/users', userRoute);


module.exports = router;