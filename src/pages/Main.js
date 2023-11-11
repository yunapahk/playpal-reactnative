import React, { useState } from 'react';
import { Link, Form } from 'react-router-dom';
import '../AuthForm.css'

const AuthForm = () => {
  const [activeForm, setActiveForm] = useState('login');
  const handleFormToggle = (formType) => {
    setActiveForm(formType);
  };
  const handleSignupSubmit = async (e) => {
    // Allow the form to submit normally.
    // After a 1-second delay, switch the form to login.
    setTimeout(() => {
        setActiveForm('login');
    }, 1000);
};


  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title login ${activeForm === 'login' ? 'active' : ''}`}>Welcome Back</div>
        <div className={`title signup ${activeForm === 'signup' ? 'active' : ''}`}>Hey New Pal</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={activeForm === 'login'} />
          <input type="radio" name="slide" id="signup" checked={activeForm === 'signup'} />
          <label htmlFor="login" className={`slide login ${activeForm === 'login' ? 'active' : ''}`} onClick={() => handleFormToggle('login')}>Login</label>
          <label htmlFor="signup" className={`slide signup ${activeForm === 'signup' ? 'active' : ''}`} onClick={() => handleFormToggle('signup')}>Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          {/* Login Form */}
          {activeForm === 'login' && (
            <Form className="login" action='/login' method='post'>
              <div className="field">
                <input type="text" name="username" placeholder="username" required />
              </div>
              <div className="field">
                <input type="password" name="password" placeholder="password" required />
              </div>
              {/* <div className="pass-link"><a href="#">Forgot password?</a></div> */}
              <div className="field btn">
                <div className="btn-layer">
                    <input type="submit" value="Login" />
                </div>
              </div>
              <div className="signup-link">Create an account <Link to="/login">Signup now</Link></div>

            </Form>
          )}
          {/* Signup Form */}
          {activeForm === 'signup' && (
            <Form className="signup" action='/signup' method='post' onSubmit={handleSignupSubmit}>
              <div className="field">
                <input type="text" name="username" id="username" placeholder="username" required />
              </div>
              {/* <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div> */}
              <div className="field">
                <input type="password" name='password' id="password" placeholder="password" required />
              </div>
              {/* <div className="field">
                <input type="password" placeholder="Confirm password" required />
              </div> */}
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
              <div className="signup-link">Already have an account? <Link to="/login">Login now</Link></div>
              {/* <div className="signup-link">Already have an account? <a href="#">Login</a></div> */}
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthForm;