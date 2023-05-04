import React from "react";
import { FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cfh7eub",
        "template_t9jcazh",
        form.current,
        "yTtu_ohkXH-MX3nOi"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("There was an error sending your message");
          form.current.reset();
        }
      );
  };
  return (
    <div className="wrap contact-wrap">
      <h1>CONTACT ME</h1>
      <div className="contact-me">
        <div className="contact-links">
          <a className="c-icon" href="tel:+447397803602">
            <FaPhone />
          </a>
          <a
            className="c-icon"
            href="https://github.com/1Eva1987"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="c-icon"
            href="https://www.linkedin.com/in/ieva-baranauskaite-096773252"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <p>Send me a message! </p>
          <p>I'd love to hear from you.</p>
          <input type="text" name="user_name" placeholder="Name?" />
          <input type="email" name="user_email" placeholder="E-mail" />
          <textarea name="message" placeholder="Your message..." />
          <input className="submit" type="submit" value="Send" />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Contact;
