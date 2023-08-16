import BeachItinerary from "./BeachItinerary";
import MountainItinerary from "./MountainItinerary";
import CityItinerary from "./CityItinerary";
import CountrysideItinerary from "./CountrysideItinerary";

//if destination value = beach, then return BeachItinerary
//if destination value = beach, then return BeachItinerary
//if destination value = beach, then return BeachItinerary
//if destination value = beach, then return BeachItinerary


// // //pull info from db

// // //move entry to own component
// // //explore map over entry once it gets the data 
// // //state and use effect
// // //use ternerary to say once data, render the page 

// // import { useState, useEffect } from "react";

// // export default function Itinerary() {
// //   const [itineraryData, setItineraryData] = useState({});

// //   useEffect(() => {
// //     setItineraryData(() => itineraryData * 2);
// //   }, [itineraryData]); // <- add the count variable here

// //   return (
// //     <>
// //          {
// //             /*  This maps each array item to a div adds
// //             the style declared above and return it */
// //             fruits.map(fruit => <div key={fruit}
// //                 style={styles}>{fruit}</div>)
// //         }
// //     </>
// //   );
// // }

// return (
//   <div>
//     <div className="card" style="width: 18rem;">
//       <img className="card-img-top" src="..." alt="Card image cap" />
//       <div className="card-body">
//         <h5 className="card-title">{itineraryData.destination}</h5>
//         <p className="card-text">{itineraryData.destinationDetails}</p>
//     </div>
//     <ul className="list-group list-group-flush">
//       <li className="list-group-item">{itineraryData.length}</li>
//       <li className="list-group-item">{itineraryData.stay}</li>
//       <li className="list-group-item">{itineraryData.eat}</li>
//       <li className="list-group-item">{itineraryData.activities}</li>
//     </ul>
//     <div className="card-body">
//       <a href="#" class="card-link">Card link</a>
//       <a href="#" class="card-link">Another link</a>
//     </div>
//   </div>
//   </div>
//   )


// import React from 'react';

// const Itinerary = ({ itineraryData }) => {
//   return (
//     <div>
//     <div className="card" style="width: 18rem;">
//       <img className="card-img-top" src="..." alt="Card image cap" />
//       <div className="card-body">
//         <h5 className="card-title" key={destination}>{itineraryData.destination}</h5>
//         <p className="card-text" key={destinationDetails}>{itineraryData.destinationDetails}</p>
//     </div>
//     <ul className="list-group list-group-flush">
//       {data.map((length, length) => {
//         <li className="list-group-item" key={length}>{itineraryData.length}</li>
//       })}
      
//       <li className="list-group-item" key={stay}>{itineraryData.stay}</li>
//       <li className="list-group-item" key={eat}>{itineraryData.eat}</li>
//       <li className="list-group-item" key={activities}>{itineraryData.activities}</li>
//     </ul>
//   </div>
//   </div>
//   );
// };

// const ExploreContainer = () => {
//   const items = ['Item 1', 'Item 2', 'Item 3'];

//   return (
//     <div>
//       <h1>React Component Mapping</h1>
//       <Intinerary data={items} />
//     </div>
//   );
// };

// export default App;