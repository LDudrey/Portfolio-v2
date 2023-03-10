import React, { useState } from 'react';

// Imported helper to check if email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    // e.target.name without the const variable.. makes it easy for preference
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Preventing the default behavior of the form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if email is not valid or the userName is empty.
    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('Email is invalid. Or Name and message field must not be empty');
      // Exit so user can correct error
      return;
    }

    // If successful, clear out fields for next entry.
    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div id="contact" className='col vw-100 bg-dark'>
      <h1>Contact Me</h1>
      <form className="form">
        <div className="mb-3">
        <label class="form-label mx-2">Email address: </label>
        <input
          className='form-control'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder=""
        />
        </div>
        <div className="mb-3">
        <label class="form-label mx-2">Name: </label>
        <input
          className='form-control'
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder=""
        />
        </div>
        <div className="mb-3">
        <label class="form-label mx-2">Message: </label>
        <input
          className='form-control'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder=""
        />
        </div>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
