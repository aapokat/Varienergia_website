// FormComponent.js
import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://varienergia.fi/submit_form.php', { // Update the URL with your hosting URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData),
    })
      .then(response => response.text())
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input id='name' type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email:
        <input id='email' type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Message:
        <textarea id='message' name="message" value={formData.message} onChange={handleChange} required></textarea>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
