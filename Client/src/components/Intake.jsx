import { useState } from 'react';
import BeachItinerary from "./BeachItinerary";
import MountainItinerary from "./MountainItinerary";
import CityItinerary from "./CityItinerary";
import CountrysideItinerary from "./CountrysideItinerary";
import '../styles/intake.css'
import intake_banner from "../assets/intake_banner.png"

function Intake() {
    const [inputs, setInputs] = useState({destinationType: "Beach"});
    const [showResult, setShowResult] = useState(false);
    const [itineraryRendered, setItineraryRendered] = useState(false)

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
    
        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        setInputs(values => ({...values, [name]: value}))
      };
    
      const Render = () => {
        if (inputs.destinationType === 'Beach') {
          //resultComponent = <ComponentA />
          console.log('Beach')
          return <BeachItinerary />

        } else if (inputs.destinationType === 'Mountains') {
          return <MountainItinerary />

        } else if (inputs.destinationType === 'City') {
          console.log('City Budget Test')
          return <CityItinerary />

        } else if (inputs.destinationType === 'Countryside') {
          console.log('Countryside Budget Test')
          return <CountrysideItinerary />
        }
      }

      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();


        setShowResult(true);
      };
      
      return (
        <div className="container text-center">
          {!showResult && (
          <div className="intake-styles">
            <img src={intake_banner} alt="banner image" className='intake-img' />
            <form className="form" onSubmit={handleFormSubmit}>
              <label>Which of the following is your ideal destination type? <br />
              <select value={inputs.destinationType} name="destinationType" onChange={handleInputChange}>
                <option value="Beach">Beach</option>
                <option value="Mountains">Mountains</option>
                <option value="City">City</option>
                <option value="Countryside">Countryside</option>
              </select>
              </label><br />
              <label>What types of things do you like to do on vacation?<br />
              <select value={inputs.activityType} onChange={handleInputChange}>
                <option value="Relax">I'm chillin' on vacation; I want to relax.</option>
                <option value="Adventure">If there's no adrenaline rush, I'm not livin'; Give me adventure.</option>
                <option value="Foodie">I like to eat and drink my way through a destination.</option>
                <option value="History">I'm culturally evolved; I want to learn something new.</option>
              </select>
              </label><br />
              <label>What's your exploration budget?<br />
              <select value={inputs.budget} onChange={handleInputChange}>
                <option value="Budget">I'm ballin' on a budget.</option>
                <option value="Average">I'm not trying to spend my retirement fund but no hostels, please.</option>
                <option value="Bougie">I'm livin' lavish.</option>
              </select>
              </label><br />
              <label>How long is this adventure?<br />
              <select value={inputs.length} onChange={handleInputChange}>
                <option value="Weekend">I'm a weekend warrior; I only have 3-4 days to spare.</option>
                <option value="Week">I've got a full week for adventuring.</option>
                <option value="Extended">I'm on a permanent vacation...or at least 10+ days of it.</option>
              </select>
              </label><br />

              <button type="submit">
                Plan My Adventure
              </button>
            </form>
          </div>
          )}
          {showResult && <Render />}
        </div>
      );
    }
    
    export default Intake;