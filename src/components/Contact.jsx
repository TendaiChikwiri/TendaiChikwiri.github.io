import React from 'react';
import emailjs from 'emailjs-com';
import GitHub from "../images/github.svg";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_icgqxbi', 'template_292u4qf', e.target, "user_lI28qhPEI0btO6DeryoO2")
      .then((result) => {
        console.log(result.text);
        alert("Message sent, I will get back to you shortly")
        document.getElementById("contact-form").reset();
      }, (error) => {
        console.log(error.text);
        console.log('FAILED...', error);
        alert("Unfortunely message not sent. Alternatively please send an email");
        document.getElementById("contact-form").reset();
      });
  }

  return (
    <section id="contact">
      <div className="contact-details">
        <h1>Contact Me</h1>
        <p>I'd like to hear your thoughts</p>
        <h1>Tendai Chikwiri</h1>
        <p>Email: tfchikwiri@gmail.com</p>
        <a
          href="https://github.com/TendaiChikwiri"
          target="_blank"
          rel="noreferrer"
        ><img src={GitHub} alt="GitHub"
          /></a>
      </div>
      <form id="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label htmlFor="user_name">Name</label>
        <input id="user_name" type="text" name="user_name" required />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="user_email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
        <input id="submit-btn" type="submit" value="Send" />
      </form>
    </section>
  )
}

export default Contact
