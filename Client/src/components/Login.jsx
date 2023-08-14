import { useState } from 'react';

function Login() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.firstName;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else {
        setPassword(inputValue);
      } 
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
      setEmail('');
      setPassword('');
    };
  
    return (
      <div className="contact">
      <div className="container text-center">
          <h1 className="form-header">Login to EZexplore</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={password}
            name="password"
            onChange={handleInputChange}
            type="text"
            placeholder="password"
          />
          
          <button className="btn btn-dark" type="submit">Submit</button>
          <button className="btn btn-dark" type="submit">Create Account</button>
        </form>
      </div>
      </div>
    );
  }
  
  export default Login;
  