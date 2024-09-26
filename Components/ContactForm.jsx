import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const [buttonText, setButtonText] = useState('SUBMIT');
  const [isAnimating, setIsAnimating] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w1qt6lr',
     'template_p283gpa', 
     form.current,
     'bboq--lbTfau-V8wP')
      .then((result) => {
          console.log(result.text);
          setButtonText("Message submited !");
          setIsAnimating(true);
          setTimeout(() => {
            setIsAnimating(false);
            setButtonText("SUBMIT");
          }, 5000);


      }, (error) => {
          console.log(error.text);

      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='Contact-Item'>
      <h1>Nom*</h1>
      <input type="text" placeholder='Entrer votre nom...' name="user_name" required/>
      <h1>Email*</h1>
      <input type="email" placeholder='Entrer votre email...' name="user_email" required/>
      <h1>Message*</h1>
      <textarea name="message" placeholder='Entrer votre message...' required/>
      <button type="submit" value="Send"
        style={{animation: isAnimating ? "submit 500ms ease-in-out forwards" : "none"}} >{buttonText}</button>
    </form>
  );
};

export default ContactForm;
