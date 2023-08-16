// const router = require('express').Router();

// //const withAuth = require('../utils/auth')

// const fetch = require('node-fetch')
// require('dotenv').config();

// router.get('/', (req, res) => {
//     try {
//     res.render('homepage', {logged_in: req.session.logged_in});
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

// router.get('(Fill in with page)', withAuth, async (req, res) => {
//     let url = `https://www.mapquestapi.com/search/v2/radius?key=${process.env.API_KEY}&maxMatches=4&https://www.mapquestapi.com/search/v2/radius/key=zWoPm0SN3i3TWf3vj4kBcc2ft43G54Sm&maxMatches=4&origin=39.750307,-104.999472`
//     try {
//       const userData = await User.findAll({
//       attributes: { exclude: ['password'] }
//           });
//       const users = userData.map((project) => project.get({ plain: true }));
//       const response = await fetch(url)
//       const data = await response.json()
//       console.log(data)
  
//       res.render("one-recipe", {
//         data,
//         users,
//         logged_in: true
//       });
//     } catch (err) {
//         res.status(500).json(err);
//     }
//   });

// router.get('login', (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/')
//         return;
//     }

//     res.render('login');
// })

// module.exports = router