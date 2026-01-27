import { useState } from "react";
import ban1 from "../assets/Images/ban1.webp";
import "../CSS/AboutSection.css";

const AboutSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const aboutdata = [
    {
      title: "About Us",
      type: "paragraph",
      content: [
        "Welcome to Tru Projects. Tru Projects is being introduced to make a long way from its beginnings. We are the one source and efficient student oriented service provider for IT projects.",
        "We expertise and are the best mutually proclaimed platform for Academic Live Projects, for students of B.Tech, M.Tech, MBA, MCA. We are dedicated to giving you the best of IT projects, with a focus on Quality, Dependability, Structure and much more."
      ]
    },
    {
      title: "Vision",
      type: "paragraph",
      content: [
        "To create a world of opportunities in which the students could explore and identify their domain of passion and transform it into a dream and booming career."
      ]
    },
    {
      title: "Mission",
      type: "paragraph",
      content: [
        "We strive to create and nurture personal effectiveness by developing and offering an array of novel and diverse project ideas in support of our commitment to help students make a difference, while contributing to organizational enrichment."
      ]
    },
    {
      title: "Objectives",
      type: "list",
      content: [
        "Help students connect academic theory with real-world implementation.",
        "Offer projects on advanced and trending technologies.",
        "Improve communication, management, and networking skills.",
        "Enable students to get placed in top companies."
      ]
    }
  ];

  return (
    <section className="tp-about-section">
      <div className="tp-about-container">

        {/* LEFT IMAGE */}
        <div className="tp-about-left">
          <img src={ban1} alt="About Tru Projects" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="tp-about-right">
          <h2 className="tp-about-title">
            ABOUT <span>US</span>
          </h2>

          {aboutdata.map((item, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div className="tp-about-accordion" key={index}>
                <button
                  className="tp-about-accordion-header"
                  onClick={() => handleToggle(index)}
                >
                  {item.title}
                  <span>{isOpen ? "−" : "+"}</span>
                </button>

                <div
                  className={`tp-about-accordion-body ${
                    isOpen ? "tp-open" : ""
                  }`}
                >
                  {item.type === "paragraph" &&
                    item.content.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}

                  {item.type === "list" && (
                    <ul className="tp-about-list">
                      {item.content.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
