import React, { useState } from 'react';
import axios from 'axios'
import './CSS/LoginSignUp.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isLogin ? 'https://e-commerce-backend-dw6l.onrender.com/login' : 'https://e-commerce-backend-dw6l.onrender.com/signup';
      if ((formData.email === '' || formData.password === '') || (!isLogin && formData.name === '') ){
        alert('Please fill all the fields');
      }else{
      const response = await axios.post(endpoint, formData);

      const data = await response.data;

      if (data.success) {
        // Handle successful login/signup, e.g., redirect to dashboard
        localStorage.setItem('auth-token', data.token);
        localStorage.setItem("test", 'soham')
        window.location.replace("/")
        console.log(isLogin ? 'Login successful' : 'Signup successful');
      } else {
        // Handle login/signup failure, show error message to the user
        alert(data.error)
        console.error('Authentication failed:', data.error);
      }}
    } catch (error) {
      alert("Account already exists")
      console.error('Error during authentication:', error);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit} className="loginsignup-form">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type='submit' className='login-btn'>{isLogin ? 'Login' : 'Continue'}</button>
        </form>
        <b>
          {isLogin
            ? 'Don\'t have an account?'
            : 'Already have an Account?'}
          <span className='loginsignup-login-text' onClick={toggleAuthMode}>
            {isLogin ? 'Sign Up Here' : 'Login Here'}
          </span>
        </b>
      </div>
    </div>
  );
};

export default LoginSignup;
