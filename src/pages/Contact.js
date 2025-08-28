import React, { useState } from 'react';


function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simple validation
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    // Email format validation
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
  }

  return (
    <main>
  <h2 style={{textAlign: 'center'}}>Contact Me</h2>
  <div className="hero-banner">GeRosMedia Projects, CornBrooks Studios</div>
      <div className="contact-info" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '1.1rem',
        color: '#222',
        marginBottom: '1.5rem'
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <span style={{fontWeight: 'bold', color: '#2a3d66'}}>Email:</span>
          <a href="mailto:info@gerosmediapro.com" style={{color: '#1a73e8', textDecoration: 'none', fontWeight: '500'}}>info@gerosmediapro.com</a>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <span style={{fontWeight: 'bold', color: '#2a3d66'}}>Phone:</span>
          <a href="tel:+447123456789" style={{color: '#1a73e8', textDecoration: 'none', fontWeight: '500'}}>+44 7123 456789</a>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <span style={{fontWeight: 'bold', color: '#2a3d66'}}>Location:</span>
          <span style={{fontWeight: '500'}}>London, UK</span>
        </div>
      </div>
      <div className="contact-card">
        {submitted ? (
          <p style={{textAlign: 'center'}}>Thank you for your message! Someone will be in touch within the next 2 - 3 working days.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
            <button type="submit" aria-label="Send contact form">Send</button>
            {error && <p style={{color: 'red', textAlign: 'center', marginTop: '0.5rem'}}>{error}</p>}
          </form>
        )}
      </div>
    </main>
  );
}

export default Contact;
