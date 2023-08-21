// const { ObjectId } = require('mongoose').Types;
// const { SavedFile } = require('../models');
// const { signToken } = require('../utils/auth');

// module.exports = {

//     async createItinerary({ body }, res) {
//         const user = await SavedFile.create(body);

       
//     },
//     async getItineraries(params, res) {
//         try {
//             const allItineraries = await SavedFile.find();
//             res.json(allItineraries);
//         } catch (error) {
//             console.error('Error fetching itineraries:', error);
//             res.status(500).json({ message: 'An error occurred while fetching itineraries' });
//         }
//     }
// };