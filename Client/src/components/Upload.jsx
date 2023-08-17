import { useState } from 'react';
import Explore from './donotuse - Explore'

function Upload() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [destination, setDestination] = useState('');
  const [destinationDetails, setDestinationDetails] = useState('');
  const [length, setLength] = useState('');
  const [stay, setStay] = useState('');
  const [eat, setEat] = useState('');
  const [activities, setActivities] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.firstName;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'firstName') {
      setFirstName(inputValue);
    } else if (inputType === 'lastName') {
      setLastName(inputValue);
    } else if (inputType === 'destination') {
        setDestination(inputValue);
    } else if (inputType === 'destinationDetails') {
        setDestinationDetails(inputValue);
    } else if (inputType === 'length') {
        setLength(inputValue);
    } else if (inputType === 'stay') {
        setStay(inputValue);
    } else if (inputType === 'eat') {
        setEat(inputValue);
    } else {
        setActivities(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setDestination('');
    setDestinationDetails('');
    setLength('');
    setStay('');
    setEat('');
    setActivities('');
  };

  return (
    <div className="contact">
    <div className="container text-center">
        <h1 className="form-header">Share Your Adventures!</h1>
        <p>Share your own great adventures with your fellow explorers.</p>
      <form className="form" onSubmit={handleFormSubmit}>
      <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="first name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="last name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={destination}
          name="destination"
          onChange={handleInputChange}
          type="text"
          placeholder="city, state, country"
        />
         <input
          value={destinationDetails}
          name="destinationDetails"
          onChange={handleInputChange}
          type="textarea"
          placeholder="tell us about your destination"
        />
          <input
          value={length}
          name="length"
          onChange={handleInputChange}
          type="int"
          placeholder="how long was your trip?"
        />
          <input
          value={stay}
          name="stay"
          onChange={handleInputChange}
          type="text"
          placeholder="where did you stay?"
        />
          <input
          value={eat}
          name="eat"
          onChange={handleInputChange}
          type="text"
          placeholder="where do you recommend eating?"
        />
          <input
          value={activities}
          name="activities"
          onChange={handleInputChange}
          type="text"
          placeholder="what were some highlights from your trip?"
        />
        
        <button className="btn btn-dark" type="submit">Submit</button>
        {/*when click submit, create object that has info and send as fetch to db from backend route*/}
      </form>
    </div>
    </div>
  );
}

export default Upload;
