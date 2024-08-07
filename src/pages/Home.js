import React, { useState } from "react";
import "../styles/Home.css";
import nurseKelly from "../assets/images/home-image.jpg";

const faqs = [
  {
    question: "What is Botox?",
    answer:
      "Botox is a cosmetic treatment made from a toxin produced by the bacterium Clostridium botulinum. It temporarily paralyzes muscles to reduce the appearance of wrinkles.",
  },
  {
    question: "How does Botox work?",
    answer:
      "Botox works by blocking signals from the nerves to the muscles. This prevents the muscles from contracting, which makes wrinkles relax and soften.",
  },
  {
    question: "Is Botox safe?",
    answer:
      "Yes, Botox is safe when administered by a trained and licensed healthcare professional. It has been used for many years in both medical and cosmetic treatments.",
  },
  {
    question: "What can I expect during a Botox treatment?",
    answer:
      "During the treatment, small amounts of Botox will be injected into the muscles of your face using a very fine needle. The procedure usually takes about 10-15 minutes.",
  },
  {
    question: "Does Botox hurt?",
    answer:
      "Most people feel only a slight pinch or discomfort during the injections. The needles used are very fine, and the procedure is generally quick.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "You may start to see results within 3-5 days after the treatment, with full results appearing in about 1-2 weeks.",
  },
  {
    question: "How long do the effects of Botox last?",
    answer:
      "The effects of Botox typically last 3-4 months. Over time, the muscles will gradually regain movement, and wrinkles will start to reappear.",
  },
  {
    question: "Are there any side effects of Botox?",
    answer:
      "Some people may experience minor side effects such as redness, bruising, or swelling at the injection site. These usually resolve within a few days.",
  },
  {
    question: "Can anyone get Botox?",
    answer:
      "Most people who are in good health and have realistic expectations about the treatment can get Botox. However, it is not recommended for pregnant or breastfeeding women.",
  },
  {
    question: "Can Botox prevent wrinkles?",
    answer:
      "Yes, regular Botox treatments can help prevent new wrinkles from forming by keeping the muscles relaxed.",
  },
  {
    question: "What areas can be treated with Botox?",
    answer:
      "Botox is commonly used to treat forehead lines, crow’s feet (lines around the eyes), and frown lines between the eyebrows.",
  },
  {
    question: "How much does Botox cost?",
    answer:
      "The cost of Botox can vary depending on the provider and the area being treated. On average, it ranges from $10 to $20 per unit, and most treatments require 20-40 units.",
  },
  {
    question: "Can I go back to work after a Botox treatment?",
    answer:
      "Yes, you can return to work and resume most normal activities immediately after your Botox treatment. Just avoid strenuous exercise for 24 hours.",
  },
  {
    question: "Are the results of Botox permanent?",
    answer:
      "No, the results of Botox are temporary. To maintain the effects, you will need regular treatments every 3-4 months.",
  },
  {
    question: "What should I avoid after getting Botox?",
    answer:
      "After getting Botox, you should avoid rubbing or massaging the treated area, strenuous exercise, and lying down for at least 4 hours. This helps prevent the Botox from spreading to other areas.",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleAppointmentClick = () => {
    window.open("http://calendly.com/kgbebeauty-appointment");
  };

  return (
    <div className="home">
      <div className="intro-section">
        <img src={nurseKelly} alt="Nurse Kelly" className="nurse-image" />
        <div className="intro-text">
          <h1>KG Botox and Beauty</h1>
          <p>
            Enhancing your natural beauty with expert Botox treatments
            (botulinum toxin) in Boca Raton, FL, USA. Dare to change, make your
            appointment.
          </p>
          <button
            onClick={handleAppointmentClick}
            className="appointment-button"
          >
            Make Your Appointment
          </button>
        </div>
      </div>
      <div className="about-section">
        <h2>What is Botox?</h2>
        <p>
          Botulinum toxin treatments (also known as Botox® by one of its brands)
          are very fashionable these days. You can really get excellent results
          but...
        </p>
        <p>
          <strong>Be careful!</strong> Botulinum toxin must be applied by an
          expert. Usually a certified professional, dermatologist, or cosmetic
          doctor. Don't compromise your health, check first who will perform the
          treatment.
        </p>
      </div>
      <div className="faq-section">
        <h2>FAQs</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h3 onClick={() => toggleFAQ(index)}>{faq.question}</h3>
            <p style={{ display: activeIndex === index ? "block" : "none" }}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
