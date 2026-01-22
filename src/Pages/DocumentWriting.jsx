import "../CSS/DocumentWriting.css";
import docBanner from "../assets/Images/aboutbanner.webp";
import DrillBit from "../assets/Images/drillbit.png";
import plagiarism from "../assets/Images/plagiarism.png";
import turnitin from "../assets/Images/turnitin.webp";
import white from "../assets/Images/white-1.png";


const steps = [
    { id: "01", text: "Understand the context" },
    { id: "02", text: "Properly quote the paraphrase" },
    { id: "03", text: "Identify what does and does not need to be cited" },
    { id: "04", text: "Manage your citations" },
    { id: "05", text: "Citing your own material" },
    { id: "06", text: "Keep track of your sources" },
    { id: "07", text: "Referencing" },
    { id: "08", text: "Use plagiarism checkers" },
    { id: "09", text: "Support plagiarism report" },
];


const DocumentWriting = () => {
    return (
        <>


            <section
                className="page-banner"
                style={{ backgroundImage: `url(${docBanner})` }}
            >
                <div className="page-banner-overlay">
                    <h1>DOCUMENT WRITING WITH PLAGIARISM</h1>
                </div>
            </section>

            <section className="plagiarism-section">
                <div className="plagiarism-container">
                    <h2 className="plagiarism-title">
                        PLAGIARISM <span>CHECK</span>
                    </h2>

                    <p className="plagiarism-subtitle">
                        TRUPROJECTS WILL PROVIDE A COMPLETE SOLUTION FOR YOUR DOCUMENT AS PER YOUR
                        UNIVERSITY GUIDELINES WITH NO PLAGIARISM
                    </p>

                    <h3 className="plagiarism-question">
                        PLAGIARISMS CHECKING FOR YOU ARE?
                    </h3>

                    <div className="plagiarism-buttons">
                        <button>Research Papers</button>
                        <button>M-Tech Final Documents</button>
                        <button>B-Tech Final Documents</button>
                    </div>
                </div>
            </section>

            <section className="plagiarism-steps">
                <h2 className="steps-title">
                    HOW TRUPROJECTS AVOID <span>PLAGIARISM</span>
                </h2>

                <div className="steps-grid">
                    {steps.map((item) => (
                        <div className="step-card" key={item.id}>
                            <div className="step-number">{item.id}</div>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="plagiarism-tools">
                <div className="tools-container">
                    <div className="tool-card">
                        <img src={DrillBit} alt="DrillBit" />
                    </div>

                    <div className="tool-card">
                        <img src={plagiarism} alt="Plagiarism Checker X" />
                    </div>

                    <div className="tool-card">
                        <img src={turnitin} alt="Turnitin" />
                    </div>

                    <div className="tool-card">
                        <img src={white} alt="WriteCheck" />
                    </div>
                </div>
            </section>


        </>
    );
};

export default DocumentWriting;