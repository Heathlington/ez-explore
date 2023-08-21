import { useState } from 'react';
import '../styles/upload.css'
import upload_banner from '../assets/upload_banner.png'

  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  
function Upload() {
  const [inputs, setInputs] = useState({
    email: '',
    firstName: '',
    lastName: '',
    destination: '',
    destinationDetails: '',
    length: '',
    stay: '',
    eat: '',
    activities: '',
  });

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  }
    
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can access the input values from the 'inputs' object
    console.log(inputs);
    // Clear the input values after submission
    setInputs({
      email: '',
      firstName: '',
      lastName: '',
      destination: '',
      destinationDetails: '',
      length: '',
      stay: '',
      eat: '',
      activities: '',
    });
  };

  return (
    <div className="contact">
      <img src={upload_banner} alt="explore banner" className='upload-img' />
    <div className="container text-center upload-styles">
      <form className="form" onSubmit={handleFormSubmit}>
        <label>Enter the name of your destination</label><br />
        <input
          value={inputs.destination}
          name="destination"
          onChange={handleInputChange}
          type="text"
        /><br />
        <label>Tell us more about your destination</label><br />
         <input
          value={inputs.destinationDetails}
          name="destinationDetails"
          onChange={handleInputChange}
          type="textarea"
        /><br />
        <label>How long was your trip? (in days)</label><br />
          <input
          value={inputs.length}
          name="length"
          onChange={handleInputChange}
          type="int"
        /><br />
        <label>Where did you stay?</label><br />
          <input
          value={inputs.stay}
          name="stay"
          onChange={handleInputChange}
          type="text"
        /><br />
        <label>Where do you recommend eating at this destination?</label><br />
          <input
          value={inputs.eat}
          name="eat"
          onChange={handleInputChange}
          type="text"
        /><br />
        <label>What were some highlights from your trip? (e.g. activities, must-see things, etc.)</label><br />
          <input
          value={inputs.activities}
          name="activities"
          onChange={handleInputChange}
          type="text"
        /><br /> <br /> <br />

<label>Enter your contact information below</label><br />
      <input
          value={inputs.firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="first name"
        /> <br />
        <input
          value={inputs.lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="last name"
        /> <br />
        <input
          value={inputs.email}
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
