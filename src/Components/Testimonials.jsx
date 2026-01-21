import React from 'react'
import test1 from '../assets/Images/11.jpg';
import '../CSS/Testmonial.css'
import { useState } from 'react';
import youtubeImg from "../assets/Images/YouTube-Logo.jpg";
import { FaRegCirclePlay } from "react-icons/fa6";

function Testimonials() {
    const [index, setIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Ramya",
            text: "I am grateful to do my projects at Tru Projects. Tru projects provide good knowledge and understanding about the project.",
            image: test1,
        },
        {
            id: 2,
            name: "Anil",
            text: "Great support and guidance throughout the project. Very helpful mentors.",
            image: test1,
        },
        {
            id: 3,
            name: "Sowmya",
            text: "Best place to gain real-time project experience with clear explanations.",
            image: test1,
        },
    ];
    const { text, name, image } = testimonials[index];

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <>

            <section className="youtube-cta">
                <div className="youtube-cta-container">

                    <div className="youtube-cta-box">
                        <p>
                            Our Youtube channel is a leading source of expert-driven and
                            actionable educational content. Explore hundreds of videos
                            featuring experts explaining topics aimed at getting us big ideas
                            and core skills.
                        </p>

                        <button className="youtube-btn">
                            <span className="btn-text">Visit Our Channel</span>
                            <span ><FaRegCirclePlay className="btn-icon"/></span>

                        </button>
                    </div>

                </div>
            </section>



            <section className="testimonial">
                <h2 className="testimonial-title">TESTIMONIALS</h2>

                <div className="testimonial-slider">
                    <span className="test-arrow left" onClick={prevSlide}>
                        ❮
                    </span>

                    <div className="testimonial-content">
                        <img src={image} alt={name} />
                        <p>{text} <b>{name}</b></p>
                    </div>

                    <span className="test-arrow right" onClick={nextSlide}>
                        ❯
                    </span>
                </div>

                <div className="testimonial-dots">
                    {testimonials.map((_, i) => (
                        <span
                            key={i}
                            className={i === index ? "dot active" : "dot"}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </section>


        </>
    )
}

export default Testimonials