import React from "react";
import "../styles/Services.css";
import botoxMap from "../assets/images/botoxmap.png";

const Services = () => {
  const handleAppointmentClick = () => {
    window.open("http://calendly.com/kgbebeauty-appointment");
  };

  return (
    <div className="services">
      <div className="services-header">
        <div className="image-container">
          <img src={botoxMap} alt="Botox Map" className="botox-map" />
        </div>
        <div className="intro-text">
          <h1>Botox Map</h1>
          <p>
            Botox is injected using small needles to minimize pain. Your doctor
            may numb the injection site ahead of time with ice packs or topical
            numbing cream. You may be asked to make facial expressions like
            squinting, smiling, or frowning to help your doctor locate the best
            site for injection.
          </p>
          <p>
            Everyone is different, and this is just an estimate for
            informational purposes.
          </p>
          <button
            onClick={handleAppointmentClick}
            className="appointment-button"
          >
            Make Your Appointment
          </button>
        </div>
      </div>
      <div className="services-content">
        <h3>What to Do Before, During, and After Botox</h3>
        <p>
          Before your Botox treatment, your doctor may numb the injection site
          ahead of time with ice packs or topical numbing cream. During the
          procedure, small amounts of Botox will be injected into the muscles of
          your face using a very fine needle. After the procedure, avoid rubbing
          or massaging the treated areas for 24 hours and avoid lying down for 2
          to 4 hours to prevent the toxin from spreading to other areas.
        </p>
        <h3>What to Consider and Expect</h3>
        <p>
          Botox is typically priced per unit. Some areas require more units than
          others, and some also respond better to treatment than others.
          Depending on the area treated, Botox will last for 3-4 months. The
          number of units needed can vary.
        </p>

        <p>
          It’s important to consult with your healthcare provider to determine
          the appropriate treatment and number of units for your specific needs.
        </p>
      </div>
    </div>
  );
};

export default Services;
