import { useState } from 'react';
import BeachItinerary from "./BeachItinerary";
import MountainItinerary from "./MountainItinerary";
import CityItinerary from "./CityItinerary";
import CountrysideItinerary from "./CountrysideItinerary";


export default function ExploreContainer() {

  
    return (
      <div>
      <CityItinerary />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MountainItinerary />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <BeachItinerary />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CountrysideItinerary />
      </div>
    );
  }