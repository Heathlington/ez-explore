import { useState } from 'react';
import { loginUser } from '../utils/API';
import AuthService from '../utils/auth';

function Login({ handleSuccessfulLogin, setCurrentPage }) {


    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

  
    const handleInputChange = (event) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    }

    const handleFormSubmit = async (event) => {
      //event.preventDefault();
      console.log('Is this thing on??')

    
    try {
      const response = await loginUser(userFormData)

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      setC
      const { token, user } = await response.json();
      
      console.log(user);
      AuthService.login(token);
      handleSuccessfulLogin();
    } catch (err) {
      console.log(err)
    }

    // setUserFormData({
    //   username: '',
    //   email: '',
    //   password: '',
    // });
    
    }

    return (
      <div className="contact">
      <div className="container text-center">
          <h1 className="form-header">Login to EZexplore</h1>
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
  
  export default Login;
  