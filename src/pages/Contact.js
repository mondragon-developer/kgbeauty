import React from "react";
import "../styles/Contact.css";
import contactImage from "../assets/images/locationmap.png";
import ContactForm from "../components/ContactForm";
import BotoxFormButton from "../components/BotoxFormButton";

const handleAppointmentClick = () => {
  window.open("http://calendly.com/kgbebeauty-appointment");
};

const handleWhatsAppClick = () => {
  window.open(
    "https://wa.me/+17542136490?text=Hello%20KG%20Beauty%2C%20I%20would%20like%20to%20make%20an%20appointment"
  );
};

const Contact = () => (
  <div className="contact">
    <div className="contact-header">
      <div className="image-container">
        <img src={contactImage} alt="Contact Us" className="contact-image" />
      </div>
      <div className="intro-text">
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out to us for any inquiries or to book an
          appointment.
        </p>
        <p>Phone: +1 954-516-8988</p>
        <button onClick={handleWhatsAppClick} className="whatsapp-button">
          Chat on WhatsApp
        </button>
        <button onClick={handleAppointmentClick} className="appointment-button">
          Make Your Appointment
        </button>
      </div>
    </div>
    <ContactForm />
    <h2>Forms</h2>
    <BotoxFormButton />
  </div>
);

export default Contact;
