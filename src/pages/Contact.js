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
      <div style={{
        textAlign: 'center',
        fontWeight: '900',
        fontSize: '2.4rem',
        letterSpacing: '2px',
        color: '#fff',
  background: 'linear-gradient(120deg, #54b4cc 0%, #4a97a0 100%)',
        borderRadius: '32px',
        padding: '2.5rem 0',
        margin: '2.5rem auto 2rem auto',
        boxShadow: '0 8px 32px rgba(20,58,92,0.18)',
        border: '2.5px solid #fff',
        textShadow: '2px 4px 16px #1a73e8',
        maxWidth: '90vw',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        fontFamily: 'Montserrat, Arial, sans-serif',
        letterSpacing: '2.5px'
      }}>GeRosMedia Projects, CornBrooks Studios</div>
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
