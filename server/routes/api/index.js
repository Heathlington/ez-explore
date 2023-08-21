const router = require('express').Router();
const userRoutes = require('./userRoutes')
const itineraryRoutes = require('./itineraryRoutes')
// const itineraryRoutes = require('./itineraryRoutes')
router.use('/user', userRoutes);
// router.use('/itinerary', itineraryRoutes);
// router.use('/itin', itineraryRoutes);

module.exports = router;