import React, { useState } from 'react';
import '../CSS/Research.css';

import research from '../assets/Images/p6.png';
import Logo1 from '../assets/Images/advanced.png';
import Logo2 from '../assets/Images/advanced.png';
import Logo3 from '../assets/Images/advanced.png';

import { FaPlusCircle } from "react-icons/fa";

import LocationStrip from '../Components/LocationStrip';
import { LOCATIONS } from '../Data/locations';


function Researchpaper() {

    const [showMore, setShowMore] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("");

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

    // const locations = [
    //     "Vizag", "Vijayawada", "Delhi", "Anantapur", "Bangalore", "Chennai",
    //     "Tirupati", "Kakinada", "Guntur", "Itanagar", "Dispur", "Patna",
    //     "Raipur", "Panaji", "Gandhinagar", "Chandigarh", "Shimla",
    //     "Ranchi", "Thiruvananthapuram", "Bhopal", "Mumbai"
    // ];

    const locations = LOCATIONS.research;


    return (
        <>

            <section
                className="top"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')"
                }}
            >
                <div className="overlay">
                    <h1>
                        RESEARCH PAPER WRITING &amp; PUBLISHING
                        {selectedLocation && ` ${selectedLocation.toUpperCase()}`}
                    </h1>
                </div>
            </section>

            {/* ===== Paper Section ===== */}
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

            {/* ===== Publishing Process ===== */}
            <section
                className="publish"
                style={{ backgroundImage: `url(${research})` }}
            >
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

            {/* ===== Journal Paper Process ===== */}
            <section className="pub-process">
                <h2>
                    JOURNAL PAPER PUBLICATION <span>PROCESS</span>
                </h2>

                <ol className="process-text">
                    <li>
                        <strong>Submission of paper :</strong> Proofread, format and edit your paper before submission.
                    </li>
                    <li>
                        <strong>Review by editors :</strong> Editorial board reviews abstract and bibliography.
                    </li>
                    <li>
                        <strong>Peer review :</strong> Reviewers verify authenticity, originality and quality.
                    </li>
                    <li>
                        <strong>Review comments :</strong> Final feedback shared by editors.
                    </li>
                    <li>
                        <strong>Revision and resubmission :</strong> Comments addressed and resubmitted.
                    </li>
                </ol>

                <p>
                    Tru Projects research paper writing service is one of its most popular offerings.
                </p>

                {showMore && (
                    <div className="extra-text">
                        <p>
                            Scholars must use Research Paper Writing Services to maintain academic standards.
                        </p>
                        <p>
                            Our Professional Research Paper Writers deliver high quality and originality.
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

            {/* ===== Journal Logos ===== */}
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



            {!selectedLocation && (
                <LocationStrip
                    locations={locations}
                    label="Research Paper Writing & Publishing"
                    onSelect={setSelectedLocation}
                />
            )}

        </>
    );
}

export default Researchpaper;
