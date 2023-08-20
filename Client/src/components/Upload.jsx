import { useState } from 'react';
import '../styles/upload.css'
import upload_banner from '../assets/upload_banner.png'

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
    const { name, value } = e.target;
    // const inputType = target.firstName;
    // const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'destination') {
        setDestination(value);
    } else if (name === 'destinationDetails') {
        setDestinationDetails(value);
    } else if (name === 'length') {
        setLength(value);
    } else if (name === 'stay') {
        setStay(value);
    } else if (name === 'eat') {
        setEat(value);
    } else {
        setActivities(value)
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
      <img src={upload_banner} alt="explore banner" className='upload-img' />
    <div className="container text-center upload-styles">
      <form className="form" onSubmit={handleFormSubmit}>
        <label>Enter the name of your destination</label><br />
        <input
          value={destination}
          name="destination"
          onChange={handleInputChange}
          type="text"
        /><br />
        <label>Tell us more about your destination</label><br />
         <input
          value={destinationDetails}
          name="destinationDetails"
          onChange={handleInputChange}
          type="textarea"
        /><br />
        <label>How long was your trip? (in days)</label><br />
          <input
          value={length}
          name="length"
          onChange={handleInputChange}
          type="int"
        /><br />
        <label>Where did you stay?</label><br />
          <input
          value={stay}
          name="stay"
          onChange={handleInputChange}
          type="text"
        /><br />
        <label>Where do you recommend eating at this destination?</label><br />
          <input
          value={eat}
          name="eat"
          onChange={handleInputChange}
          type="text"
        /><br />
        <label>What were some highlights from your trip? (e.g. activities, must-see things, etc.)</label><br />
          <input
          value={activities}
          name="activities"
          onChange={handleInputChange}
          type="text"
        /><br /> <br /> <br />

<label>Enter your contact information below</label><br />
      <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="first name"
        /> <br />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="last name"
        /> <br />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        /><br />
        
        <button className="btn btn-dark" type="submit">Submit</button>
        {/*when click submit, create object that has info and send as fetch to db from backend route*/}
      </form>
    </div>
    </div>
  );
}

export default Upload;
