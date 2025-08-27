import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <h2>Contact Me</h2>
      {submitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} style={{maxWidth: 400}}>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required style={{width: '100%', marginBottom: '1rem'}} />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{width: '100%', marginBottom: '1rem'}} />
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required style={{width: '100%', marginBottom: '1rem'}} />
          <button type="submit">Send</button>
        </form>
      )}
    </main>
  );
}

export default Contact;
