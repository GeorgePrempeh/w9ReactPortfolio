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
      <h2 style={{textAlign: 'center'}}>Contact Me</h2>
      <div className="contact-info">
  <div><strong>Email:</strong> <a href="mailto:info@gerosmediapro.com">info@gerosmediapro.com</a></div>
        <div><strong>Phone:</strong> <a href="tel:+447123456789">+44 7123 456789</a></div>
        <div><strong>Location:</strong> London, UK</div>
      </div>
      <div className="contact-card">
        {submitted ? (
          <p style={{textAlign: 'center'}}>Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
            <button type="submit">Send</button>
          </form>
        )}
      </div>
    </main>
  );
}

export default Contact;
