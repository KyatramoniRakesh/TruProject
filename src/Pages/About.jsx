import "../CSS/About.css";
import aboutBanner from "../assets/Images/aboutbanner.webp";
import about_img from "../assets/Images/ban1.webp";
import { useState, useRef, useEffect } from "react";
import "../CSS/VideoCards.css"
import FeaturedSlider from "../Components/FeaturedSlides";


const About = () => {

    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
    
    

    const projects = [
        {
            id: 1,
            title:
                "Universal Approximation Capability of Broad Learning System and Its Structural Variations",
            date: "July 3, 2020 10:38 pm",
            thumbnail: "https://www.youtube.com/watch?v=LZY0-ccz2-w/hqdefault.jpg",
            videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1",
        },
        {
            id: 2,
            title:
                "Deep-anomaly: Fully convolutional neural network for fast anomaly detection in crowded scenes",
            date: "July 3, 2020 10:44 pm",
            thumbnail: "https://www.youtube.com/watch?v=LZY0-ccz2-w/hqdefault.jpg",
            videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2",
        },
        {
            id: 3,
            title:
                "Progressive Learning for Person Re-Identification with One Example",
            date: "July 3, 2020 10:54 pm",
            thumbnail: "https://www.youtube.com/watch?v=LZY0-ccz2-w/hqdefault.jpg",
            videoUrl: "https://www.youtube.com/watch?v=LZY0-ccz2-w",
        },
         {
            id: 4,
            title:
                "Universal Approximation Capability of Broad Learning System and Its Structural Variations",
            date: "July 3, 2020 10:38 pm",
            thumbnail: "https://www.youtube.com/watch?v=LZY0-ccz2-w/hqdefault.jpg",
            videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1",
        },
        {
            id: 5,
            title:
                "Deep-anomaly: Fully convolutional neural network for fast anomaly detection in crowded scenes",
            date: "July 3, 2020 10:44 pm",
            thumbnail: "https://www.youtube.com/watch?v=LZY0-ccz2-w/hqdefault.jpg",
            videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2",
        },
        {
            id: 6,
            title:
                "Progressive Learning for Person Re-Identification with One Example",
            date: "July 3, 2020 10:54 pm",
            thumbnail: "https://www.youtube.com/watch?v=LZY0-ccz2-w/hqdefault.jpg",
            videoUrl: "https://www.youtube.com/watch?v=LZY0-ccz2-w",
        },
    ];



    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = open
                ? contentRef.current.scrollHeight + "px"
                : "0px";
        }
    }, [open]);

    return (<>
        <section
            className="about-banner"
            style={{ backgroundImage: `url(${aboutBanner})` }}
        >
            <div className="about-banner-overlay">
                <h1>ABOUT US</h1>
            </div>
        </section>

        <section className="about-content">
            <div className="about-content-container">

               
                <div className="about-content-left">
                    <img
                        src={about_img}
                        alt="About Tru Projects"
                    />
                </div>

                
                <div className="about-content-right">
                    <h2 className="about-heading">
                        ABOUT <span>US</span>
                    </h2>

                    <p>
                        <strong>Welcome to Tru Projects.</strong> Tru Projects are being introduced to
                        make a long way from its beginnings. We are the one source and efficient
                        student oriented service provider for IT projects.
                    </p>

                    <p>
                        We expertise and are the best mutually proclaimed platform for Academic Live
                        Projects, for students of B.Tech, M.Tech, MBA, MCA. We are dedicated to
                        giving you the best of IT projects, with a focus on Quality, Dependability,
                        Structure and much more.
                    </p>

                    <p>
                        Tru Projects is applying its way through, to help with the best of service
                        for students in implementing CSE projects in skill sets – Data Sciences,
                        Machine Learning, Artificial Intelligence, Deep Learning, Android, Big Data,
                        Block Chain and Java related technologies with the best equipment which
                        drives them to inspiration.
                    </p>

                    <p>
                        We serve students with implementing their own ideas, abstracts and thoughts,
                        and we are thrilled to be a part of the student fraternity. We hope you
                        appreciate our IT projects as much as we enjoy offering them to you.
                        For any guidance, please do revert to us.
                    </p>
                </div>

            </div>
        </section>

        <section className="expand-section">
            <div className="expand-container">
                <p id='para'>
                    Are you having trouble deciding which of the top engineering projects consultants in Hyderabad or Final Year projects providers in Hyderabad can offer you with an exceptional graduation project? Don’t worry,
                    we at Tru Projects are here to help you make your work easier by providing you with valuable hands-on expertise. Don’t bite your nails now the services are available near to your home town Sr nagar , Ameerpet , Jntu , Kphp , Kukatpally , Dilshuknagar , Madhapur , L.B.Nagar ,Sec-bad ,Tarnaka ,
                </p>
                <div
                    ref={contentRef}
                    className={`expand-content ${open ? "open" : ""}`}
                >


                    <p>
                        Don’t bite your nails now the services are available near to your
                        home town Sr nagar, Ameerpet, Jntu, Kphp, Kukatpally, Dilshuknagar,
                        Madhapur, L.B.Nagar, Sec-bad, Tarnaka.
                    </p>
                    <p>“Through hands-on experience, our projects have shown to be an effective recruitment tool in aiding students in hiring the relevant individuals. Our Final Year projects consultants in Hyderabad & projects providers in Hyderabad are skilled “Head Hunters” who bring expertise, a good attitude, and a kind approach to the table. They provide excellent direction at every level of the project implementation process, and they are constantly keen to offer suggestions while truly interested in our accomplishment. Choosing best btech projects consultants in Hyderabad is challenging. Tru projects for
                        Final Year academic projects consultants in Hyderabad is a dream come true.”</p>
                    <p>Selecting a noteworthy Project Consultant for Btech Projects in Hyderabad for your academic year might be difficult. You’ll have to locate the essential equipment, as well as look for the best engineering projects providers in Hyderabad, as well as select the appropriate field in Btech projects for engineering students. Tru Projects is the most effective option. Are You looking actual competency-based Final Year cse projects consultants in Hyderabad & Final Year ece projects consultants in Hyderabad with ensure quality, and within lower expenditures? Tru Projects will be one of the best for all of and also provides best btech projects providers in Hyderabad.

                        Tru Projects is delighted to be one of the best btech academic projects consultants in Hyderabad for the btech cse projects consultants as well as btech ece projects consultants in Hyderabad, offering students a wide range of customized B TECH major and mini projects, B TECH major & mini projects, MBA major and mini projects, and so on. Among the domains in which we specialize are Data Mining, Artificial Intelligence, Big Data, Deep Learning, Data Science, Android, cloud computing, and Cyber security.

                        So, if you’re looking for Best Project Consultant for Final Year. you’ve come to the right place. All you have to do now is give us a call for more information and to get started on your project. Tru Projects makes it easy for you to get all the best complete Final Year projects in one place and at your own convenience.

                        How about a web developer or a software developer? Find the best role for you by working on one of our most challenging engineering projects? For those who simply want a grade boost, you may want to look for engineering academic projects. Tru Projects has a wide range of trending b tech projects for you to choose from, so waste no more time and contact us.</p>

                </div>

                <button
                    className="expand-btn"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "Close ↑" : "Read More ↓"}
                </button>

            </div>
        </section>


        <section className="projects-section">
            <div className="projects-grid">
                {projects.map((item) => (
                    <div className="project-card" key={item.id}>

                       
                        <a
                            href={item.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            <div className="project-thumb">
                                <img src={item.thumbnail} alt={item.title} />

                               
                                <div className="project-overlay">
                                    <p>
                                        TO PURCHASE THIS PROJECT IN ONLINE <br />
                                        CONTACT : TRU PROJECTS <br />
                                        WEBSITE : www.truprojects.in <br />
                                        MOBILE : ---
                                    </p>

                                    <div className="project-icons">
                                        <span>❤ 0</span>
                                        <span>💬 0</span>
                                    </div>
                                </div>

                                
                                <div className="play-btn">▶</div>
                            </div>
                        </a>

                        
                        <div className="project-content">
                            <h3>{item.title}</h3>
                            <p className="meta">
                                TRU PROJECTS • {item.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <FeaturedSlider/>


    </>

    );
};

export default About;
