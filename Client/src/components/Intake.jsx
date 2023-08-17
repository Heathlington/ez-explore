import { useState } from 'react';

function Intake() {
    const [inputs, setInputs] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [resultComponent, setResultComponent] = useState(null); 

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
    
        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        setInputs(values => ({...values, [name]: value}))
      };
    
      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        //createItinerary(inputs)

        let resultComponent = null

        // if (inputs.destinationType === 'Beach' && inputs.activityType === 'Relax' && inputs.budget === 'Budget') {
        //   //resultComponent = <ComponentA />
        //   console.log('Beach Budget Test')
        // } else if (inputs.destinationType === 'Beach' && inputs.activityType === 'Relax' && inputs.budget === 'Average') {
        //   console.log('Beach Average Test')
        // } else if (inputs.destinationType === 'Beach' && inputs.activityType === 'Relax' && inputs.budget === 'Bougie') {
        //   console.log('Beach Bougie Test')
        // } else if (inputs.destinationType === 'Mountains' && inputs.activityType === 'Adventure' && inputs.budget === 'Budget') {
        //   console.log('Mountains Budget Test')
        // } else if (inputs.destinationType === 'Mountains' && inputs.activityType === 'Adventure' && inputs.budget === 'Average') {
        //   console.log('Mountains Average Test')
        // } else if (inputs.destinationType === 'Mountains' && inputs.activityType === 'Adventure' && inputs.budget === 'Bougie') {
        //   console.log('Mountains Bougie Test')
        // } else if (inputs.destinationType === 'City' && inputs.activityType === 'Foodie' && inputs.budget === 'Budget') {
        //   console.log('City Budget Test')
        // } else if (inputs.destinationType === 'City' && inputs.activityType === 'Foodie' && inputs.budget === 'Average') {
        //   console.log('City Average Test')
        // } else if (inputs.destinationType === 'City' && inputs.activityType === 'Foodie' && inputs.budget === 'Bougie') {
        //   console.log('City Bougie Test')
        // } else if (inputs.destinationType === 'Countryside' && inputs.activityType === 'History' && inputs.budget === 'Budget') {
        //   console.log('Countryside Budget Test')
        // } else if (inputs.destinationType === 'Countryside' && inputs.activityType === 'History' && inputs.budget === 'Average') {
        //   console.log('Countryside Average Test')
        // } else if (inputs.destinationType === 'Countryside' && inputs.activityType === 'History' && inputs.budget === 'Bougie') {
        //   console.log('Countryside Bougie Test')
        // } else {

        // }

        if (inputs.destinationType === 'Beach' && inputs.activityType === 'Relax' && inputs.budget === 'Budget') {
          //resultComponent = <ComponentA />
          console.log('Beach Budget Test')
        } else if (inputs.destinationType === 'Beach' && inputs.activityType === 'Relax' && inputs.budget === 'Average') {

        } else if (inputs.destinationType === 'Mountains' && inputs.activityType === 'Adventure' && inputs.budget === 'Budget') {
          console.log('Mountains Budget Test')
        } else if (inputs.destinationType === 'Mountains' && inputs.activityType === 'Adventure' && inputs.budget === 'Average') {

        } else if (inputs.destinationType === 'City' && inputs.activityType === 'Foodie' && inputs.budget === 'Budget') {
          console.log('City Budget Test')

        } else if (inputs.destinationType === 'Countryside' && inputs.activityType === 'History' && inputs.budget === 'Budget') {
          console.log('Countryside Budget Test')
        } else {

        }

        setShowResult(true);
        setResultComponent(ResultComponent);
      };
    
      return (
        <div className="container text-center">
          <h1>
            Hello Explorer! 
          </h1>
          <h4>Tell us a bit more about you so we can plan the perfect trip!</h4>
          <form className="form" onSubmit={handleFormSubmit}>
            <label>Which of the following is your ideal destination type?
            <select value={inputs.destinationType} onChange={handleInputChange}>
              <option value="Beach">Beach</option>
              <option value="Mountains">Mountains</option>
              <option value="City">City</option>
              <option value="Countryside">Countryside</option>
            </select>
            </label>
            <label>What types of things do you like to do on vacation?
            <select value={inputs.activityType} onChange={handleInputChange}>
              <option value="Relax">I'm chillin' on vacation; I want to relax.</option>
              <option value="Adventure">If there's no adrenaline rush, I'm not livin'; Give me adventure.</option>
              <option value="Foodie">I like to eat and drink my way through a destination.</option>
              <option value="History">I'm culturally evolved; I want to learn something new.</option>
            </select>
            </label>
            <label>What's your exploration budget?
            <select value={inputs.budget} onChange={handleInputChange}>
              <option value="Budget">I'm ballin' on a budget.</option>
              <option value="Average">I'm not trying to spend my retirement fund but no hostels, please.</option>
              <option value="Bougie">I'm livin' lavish.</option>
            </select>
            </label>
            <label>How long is this adventure?
            <select value={inputs.length} onChange={handleInputChange}>
              <option value="Weekend">I'm a weekend warrior; I only have 3-4 days to spare.</option>
              <option value="Week">I've got a full week for adventuring.</option>
              <option value="Extended">I'm on a permanent vacation...or at least 10+ days of it.</option>
            </select>
            </label>

            <button type="submit">
              Plan My Adventure
            </button>
          </form>
        </div>
      );
    }
    
    export default Intake;