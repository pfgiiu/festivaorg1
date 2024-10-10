import React, { useState } from 'react';
import '../styles/Contact.css';
import 'font-awesome/css/font-awesome.min.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h1>Contato</h1>
      <p>Para mais informações, entre em contato conosco!</p>
      <div className="contact-info">
        <p>Email: seuemail@exemplo.com</p>
        <p>Telefone: (00) 12345-6789</p>
      </div>

      <div className="contact-icons">
        <a href="https://api.whatsapp.com/send?phone=seunumerodetelefone" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/seu_instagram" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="/open-ticket">
          <i className="fa fa-ticket"></i>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          placeholder="Seu Nome" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Seu Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Sua Mensagem" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        ></textarea>
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  );
};

export default Contact;

