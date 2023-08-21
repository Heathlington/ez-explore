import { useState } from 'react';
import { createUser, loginUser } from '../utils/API';
import Auth from '../utils/auth';
import '../styles/login.css'
import login_banner from '../assets/login_banner.png'

function Login() {


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
      Auth.login(token);
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
      <div className="container intake-styles">
      <img src={login_banner} alt="banner image" className='intake-img' />
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={userFormData.username}
            name="username"
            onChange={handleInputChange}
            type="text"
            placeholder="Username"
          /><br />
          <input
            value={userFormData.email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          /><br />
          <input
            value={userFormData.password}
            name="password"
            onChange={handleInputChange}
            type="text"
            placeholder="Password"
          /><br />
          
          <button className="btn btn-dark" type="submit">Login</button>
          <button className="btn btn-dark" type="button">Create Account</button>
        </form>
      </div>
      </div>
    );
  }
  
  export default Login;
  