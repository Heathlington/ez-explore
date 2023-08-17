const router = require('express').Router();
const apiRoutes = require('./api')

router.use('/api', apiRoutes);

router.get('/trips', function(){
    console.log("working")
});

module.exports = router;
