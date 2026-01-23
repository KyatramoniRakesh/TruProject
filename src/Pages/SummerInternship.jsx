import React from 'react';
import InternshipSection from '../Components/InternshipSection';
import "../CSS/Summerinternship.css"
import InternshipTracks from '../Components/InternshipTracks';


import { useState } from 'react'
import registerimg from '../assets/Images/Projects/Grab-an-offer-letter.webp'
import seatimg from '../assets/Images/Projects/block.webp'
import offerimg from '../assets/Images/Projects/register.webp'

import ben1 from "../assets/Images/Projects/Hands-on-Training.png"
import ben2 from "../assets/Images/Projects/build.png"
import ben3 from "../assets/Images/Projects/build.png"
import ben4 from "../assets/Images/Projects/build.png"
import ben5 from "../assets/Images/Projects/build.png"
import ben6 from "../assets/Images/Projects/build.png"

const SummerInternship = () => {

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <InternshipSection />
      <section className="registration-section">
        <h2 className="section-title">
          Registration <span>Process</span>
        </h2>

        <div className="process-grid">
          <div className="process-card">
            <img src={registerimg} alt="Register" />
            <p>Fill with Register Form</p>
            <button>Register Now</button>
          </div>

          <div className="process-card">
            <img src={seatimg} alt="Seat Booking" />
            <p>Block your seat with an basic amount</p>
          </div>

          <div className="process-card">
            <img src={offerimg} alt="Offer Letter" />
            <p>Grab an offer letter</p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h2 className="section-title">
          About Summer <span>Internship</span>
        </h2>

        <p>
          We have all reached a point where we need to do a Summer Internship
          to obtain experience in the field we want to work in and thrive in
          the future, right? Tru Projects is primarily concerned with
          providing our students with the best skills for their professional
          lives  Every one of us searches for Student Internship Opportunities in any industry,
          such as Engineering, Finance, Marketing, Aeronautics, and so on, to help us develop our skills
          and gain a better grasp of the domain we want to thrive in. With the rise of virtual technology,
          we now have access to some of the Best Online Summer Internship Trainings, making our lives easier
          and more convenient. TruProjects is the ideal pick for you to choose from the various Summer Internship Programs
          now available. Our organisation can supply you with not just face-to-face internships, but also function as an Online Summer Internship Institute, providing you more flexibility.
        </p>

        {showMore && (
          <>
            <p className="extra-text">
              With the rise of virtual technology, we now have access to some of
              the best Online Summer Internship Trainings, making our lives
              easier and more convenient. TruProjects offers flexible learning
              options, real-world projects, expert mentors, and certification
              that boosts your career profile.
            </p>
            <p className="extra-text">
              We’d like to welcome you aboard to begin your professional path with us, given the Summer Internship Openings this year. The Online Summer Internship will certainly provide you with the most up-to-date materials and well-trained mentors.
              Our online Summer Internship with Certificate will undoubtedly assist you in your career search for full-time positions at reputable companies. This gives you an advantage because the certificate and training will have already assisted
              you in learning more effectively. If you would like to choose the Software Engineering Summer Internship, it will definitely make you understand the fundamentals of data structures, core programming and so on. This will help you perform well during interviews. The main benefit of the Virtual Summer Internship at Tru Projects is that you can plan your schedule and work accordingly. You need not travel long distances in order to do your internship. Summer Training for Students Is very extremely significant according to us, as it allows students to adequately prepare well for their bigger ventures into service and product based companies. By doing so, one can take advantage of TruProjects Summer Internship online for students and analyse their own interests and strengths, allowing them to strategise their professional aspirations. If you are in your third year of college and are concerned about placements in your final year, doing our Summer Internship for 3rd year students will ensure that you study and physically execute the relevant industry related concepts in the shortest amount of time. You will have a better chance of performing well than many other students if you do the Internship for 3rd year students at Tru Projects. Summer Internships for final year students are available around the time you finish your third year. In either case,
              you will get valuable experience in a variety of ways. The Internship for final year students at Tru Projects has assisted numerous engineering students meet their technical requirements and land top jobs at well known companies.

            </p>
          </>
        )}

        <button
          className="read-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read Less ↑" : "Read More ↓"}
        </button>
      </section>

      <InternshipTracks />


      <section className="benefits-section">
        <h2 className="section-title">
          Benifits of <span>Students</span>
        </h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <img src={ben1} alt="" />
            <h4>Complete Training on Technology</h4>
          </div>

          <div className="benefit-card">
            <img src={ben2} alt="" />
            <h4>Project Building</h4>
          </div>

          <div className="benefit-card">
            <img src={ben3} alt="" />
            <h4>Internship Offer Letter</h4>
          </div>

          <div className="benefit-card">
            <img src={ben4} alt="" />
            <h4>Internship Certificate</h4>
          </div>

          <div className="benefit-card">
            <img src={ben5} alt="" />
            <h4>Training Completion Certificate</h4>
          </div>

          <div className="benefit-card">
            <img src={ben6} alt="" />
            <h4>Project Completion Certificate</h4>
          </div>
        </div>
      </section>

    </>
  )
}

export default SummerInternship;