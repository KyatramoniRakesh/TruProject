import React from 'react'
import '../CSS/Research.css'
import { useState } from 'react';
import research from '../assets/Images/p6.png'
import Logo1 from '../assets/Images/advanced.png'
import Logo2 from '../assets/Images/advanced.png'
import Logo3 from '../assets/Images/advanced.png'
import { CiCirclePlus } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
function Researchpaper() {
    const [showMore, setShowMore] = useState(false);
    const journalList = [
        "IEEE",
        "SCI Indexed",
        "SCOPUS",
        "Web Of Science",
        "UGC Approved",
        "International Journal",
    ];
    const processSteps = [
        { no: "01", text: "Topic identification" },
        { no: "02", text: "Design for a journal paper" },
        { no: "03", text: "Writing the manuscript" },
        { no: "04", text: "Selecting an appropriate journal" },
        { no: "05", text: "Drafting, translation, editing, formatting of manuscript" },
        { no: "06", text: "Peer review of manuscript" },
        { no: "07", text: "Submission to publisher" },
        { no: "08", text: "Review and revision as per feedback from the editors" },
        { no: "09", text: "Getting paper published" },
    ];
    const logos = [Logo1, Logo2, Logo3, Logo1, Logo2, Logo3, Logo1, Logo2, Logo3];
    const locations = [
        "Vizag", "Vijayawada", "Delhi", "Anantapur", "Bangalore", "Chennai", "Tirupati", "Kakinada", "Guntur", "Itanagar", "Dispur", "Patna", "Raipur", "Panaji", "Gandhinagar",
        "Chandigarh", "Shimla", "Ranchi", "Thiruvananthapuram", "Bhopal", "Mumbai","Shimla", "Ranchi", "Thiruvananthapuram", "Bhopal", "Mumbai",
    ];
    return (
        <>
            <section
                className="top"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')", }}>
                <div className="overlay">
                    <h1>RESEARCH PAPER WRITING & PUBLISHING SERVICES</h1>
                </div>
            </section>

            <section className="paper-section">
                <h2>
                    PAPER <span>PUBLICATION</span>
                </h2>

                <h4>TRUPROJECTS PUBLISHED 100'S OF AUTHOR'S PAPERS</h4>

                <p>
                    In last 10 years Truprojects supported 1000’s of scholars and students
                    to publish their papers in specified journals. We include a team of
                    proficient writers with high expertise in relevant fields to deliver
                    the best written research papers tailored to meet the standards and
                    specifications of the research scholars through a detailed plagiarism
                    and grammar checking stages.
                </p>

                <h3>JOURNALS WHERE OUR CLIENTS GOT PUBLISHED</h3>

                <div className="journal-list">
                    {journalList.map((journal, index) => (
                        <span key={index} className="journal-badge">
                            {journal}
                        </span>
                    ))}
                </div>
            </section>

            <section className="publish" style={{ backgroundImage: `url(${research})` }}>
                <h2>
                    OUR PUBLISHING <span>PROCESS</span>
                </h2>

                <div className="process-grid">
                    {processSteps.map((item, index) => (
                        <div className="process-card" key={index}>
                            <span className="step-no">{item.no}</span>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="pub-process">
                <h2>
                    JOURNAL PAPER PUBLICATION <span>PROCESS</span>
                </h2>

                <ol className="process-text">
                    <li>
                        <strong>Submission of paper :</strong> There are 2 points to keep in
                        mind. First, proofread, format and edit your paper before submission.
                        Second, submit your paper along with a well drafted cover letter.
                        Remember to guideline issued by the target journal.
                    </li>

                    <li>
                        <strong>Review by editors :</strong> The editorial board of the
                        publication will go through your paper. However, this review will be
                        brief and most probably just the abstract and bibliography will be
                        read. If found interesting, your paper will be forwarded to the next
                        level.
                    </li>

                    <li>
                        <strong>Peer review :</strong> The initial screening by the editors
                        will be followed by a thorough scan by peer reviewers. They ascertain
                        the value of the paper in terms of authenticity of content, language,
                        presentation and originality of thought.
                    </li>

                    <li>
                        <strong>Review comments :</strong> Once the peer review has been done,
                        the editors send back the paper with final comments, which may be
                        positive or negative.
                    </li>

                    <li>
                        <strong>Revision and resubmission :</strong> The review comments
                        provided by the editors and reviewers need to be adequately addressed
                        before the paper is sent for resubmission.
                    </li>
                </ol>

                <p>Tru Projects research paper writing service is one of its most popular offerings. The programme is designed to assist students and researchers who desire to publish papers in international or peer-reviewed journals in order to gain widespread recognition in the academic community. Research paper writing service entails assistance from our end in a variety of ways. Furthermore, our research paper writing service includes a number of checks and rechecks to ensure that the deliverables are error-free. The cost of these services varies depending on the services requested by the customers</p>


                {showMore && (
                    <div className="extra-text">
                        <p>
                            Scholars must use Research Paper Writing Services to maintain their academic standards. Do you have an urgent need forBest Research Paper Assistance? It’s time to board the next aircraft,
                            which will transport you to your destination until you disembark. In order to do so, our writers service is outstanding, as you will discover when you book your flight with us. Writing a professional research paper or aJournal Publishing is analogous to cooking. Delicious food comes from careful and diligent preparation, and a study paper with innovative labour yields a pleasing result. Our skilled writers are eager to share their creative ideas with customers in order to suit their needs. We have a committed staff of writers who never seek suggestions from our customers on how to write or cover a topic.So, forMost Trusted Research Paper Writing Services contact Tru Projects for the best service.
                        </p>

                        <p>
                            Our Professional Research Paper Writers, in particular, vow to exploring their premier services in response to client demand.
                            At the same time, our writer’s pen is aware of all the unknown risks associated with creating a review research paper, allowing for a superior solution. Experts, like our research consultation writers, can achieve incredible things with ease. Our company’s skilled writers can manage any form of paper, regardless of subject, and their quality is always excellent. Regardless of the difficulties in your Research Paper Publish, we are ready
                            to assist you with our writer’s solutions, who are experts in the field of Journal Writing and Publication Service.
                        </p>
                        <p>
                            What advanced strategy did we use to assist with Research Paper Writing Service? There are numerous parts to research papers that must be followed
                            when writing a research Paper Write Up. In fact, the algorithm we use analyses the client’s requests and searches for authors in our team who
                            are qualified and experienced in that area. Our Best Research Paper Writing Services do the following things at the same time.
                        </p>
                        <p>
                            In reality, our commitment to writing is more important than anything else. Meanwhile, one individual believed he could make the world a better place. Through our revolutionary good Project Publication Journals themes, we hope to bring about positive changes in society. As a result, in Dissertation Consultation, we only touched on advanced projects
                            in several research fields. The majority of our Research Paper Write Up are published in peer-reviewed journals around the world.
                        </p>
                        <p>
                            Customers are drawn to us because of our upbeat attitude and good Research Paper Help. The majority of our customers are pleased with our caring approach, which sets us apart from other Custom Research Paper Writing Service. Our
                            customers have also completed their doctorates by travelling with us from the beginning of their Journal Publishers to the end.
                        </p>
                        <p>
                            The first thing to keep in mind is that our Tru project prompt delivery, unequalled excellence, commitment, 24/7 customer assistance by phone call, friendliness toward customers, and Low-Cost Journal Publication are all important considerations. Paid Journal Publication, High quality content, zero plagiarism,
                            and unlimited revisions. Custom Research Paper for Cheap, Consumption of hustle tasks, and a helpful team, for the most part.
                        </p>
                        <p>
                            Looking for the Research Paper Writers Near Me then Tru Projects is the Ultimate choice for the btech research paper writing services providers as well as for the mtech research paper writing services providersfor any queries Research Paper Help Online is also provided. If you want to publish high-quality
                            content with best Research Paper Assistance Services, contact Tru Projects as soon as possible to achieve your publishing goal.
                        </p>
                    </div>
                )}

                <button
                    className="read-more-btn"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? "Less ▲" : "Read more ▼"}
                </button>
            </section>

            <section className="journal-section">
                <div className="journal-grid">
                    {logos.map((logo, index) => (
                        <div className="journal-card" key={index}>
                            <img src={logo} alt="journal-logo" />
                            <div className="hover-overlay">
                                <span><FaPlusCircle /></span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="locations-flex">
                <div className="locations-inner">
                    {locations.map((city, index) => (
                        <span className="location-item" key={index}>
                            Research Paper Writing &amp; Publishing {city}
                            <span className="pipe"> |</span>
                        </span>
                    ))}
                </div>
            </section>





        </>
    )
}

export default Researchpaper