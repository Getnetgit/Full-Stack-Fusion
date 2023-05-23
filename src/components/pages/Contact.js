
// export default Contact;
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      // Handle form submission here
      setErrorMessage('');
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsNameValid(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === '') {
      setIsNameValid(false);
      setErrorMessage('Name is required');
      isValid = false;
    } else if (email.trim() === '') {
      setIsEmailValid(false);
      setErrorMessage('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setIsEmailValid(false);
      setErrorMessage('Invalid email address');
      isValid = false;
    } else if (message.trim() === '') {
      setIsNameValid(false);
      setErrorMessage('Message is required');
      isValid = false;
    } else {
      setErrorMessage('');
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const sectionStyle = {
    width: '600px',
    // float: 'left',
    
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    textAlign: 'left'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const errorMessageStyle = {
    color: 'red',
    marginBottom: '16px',
  };

  const submitButtonStyle = {
    color: '#00b4d8',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
   backgroundColor: '#3a2618'
  };

  return (
    <div >
      <section id="Contact"style={sectionStyle}>
        <h2 style={labelStyle}>Contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={labelStyle}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            style={inputStyle}
            className={`form-control ${!isNameValid ? 'is-invalid' : ''}`}
            value={name}
            onChange={handleNameChange}
          />
          {!isNameValid && <div className="invalid-feedback">Name is required</div>}

          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            style={inputStyle}
            className={`form-control ${!isEmailValid ? 'is-invalid' : ''}`}
            value={email}
            onChange={handleEmailChange}
          />
          {!isEmailValid && <div className="invalid-feedback">Invalid email address</div>}

          <label htmlFor="message" style={labelStyle}>
            Message:
          </label>
          <textarea
            id="message"
            style={inputStyle}
            className="form-control"
            rows="4"
            value={message}
            onChange={handleMessageChange}
          ></textarea>

          {errorMessage && <div style={errorMessageStyle}>{errorMessage}</div>}

          <div className="form-group mt-3" style={labelStyle}>
            <button type="submit" style={submitButtonStyle}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
