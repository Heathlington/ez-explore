import { useState } from 'react';
import { createUser } from '../utils/API';
import AuthService from '../utils/auth';

function SignUp() {

    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    
 
  
    const handleInputChange = (event) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    }

    const handleFormSubmit = async (event) => {
      event.preventDefault();

    
    try {
      const response = await createUser(userFormData)

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const { token, user } = await response.json();
      console.log(user);
      AuthService.login(token);
    } catch (err) {
      console.log(err)
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
    
    }
    return (
      <div className="contact">
      <div className="container text-center">
          <h1 className="form-header">Sign up for EZexplore</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={userFormData.username}
            name="username"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
          />
          <input
            value={userFormData.email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={userFormData.password}
            name="password"
            onChange={handleInputChange}
            type="text"
            placeholder="password"
          />
          
          <button className="btn btn-dark" type="submit">Submit</button>
          
        </form>
      </div>
      </div>
    );
  }
  
  export default SignUp;
  