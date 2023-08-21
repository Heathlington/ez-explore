import { useState } from 'react';
import BeachItinerary from "./BeachItinerary";
import MountainItinerary from "./MountainItinerary";
import CityItinerary from "./CityItinerary";
import CountrysideItinerary from "./CountrysideItinerary";
import city_banner from '../assets/city_banner.png'
import mountain_banner from '../assets/mountain_banner.png'
import beach_banner from '../assets/beach_banner.png'
import countryside_banner from '../assets/countryside_banner.png'
import '../styles/explore.css'


export default function ExploreContainer() {

  
    return (
      <div className="explore-container">
        <a href={<CityItinerary />}><img src={city_banner} className="explore-img" /></a>
 
      <a href={<MountainItinerary />}><img src={mountain_banner} className="explore-img" /></a>
   
      <a href={<BeachItinerary />}><img src={beach_banner} className="explore-img" /></a>
   
      <a href={<CountrysideItinerary />}><img src={countryside_banner} className="explore-img" /></a>
      </div>
    );
  }