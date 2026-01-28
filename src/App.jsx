import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Researchpaper from "./Pages/Researchpaper";
import DocumentWriting from "./Pages/DocumentWriting";
import Contactus from "./Pages/Contactus";


import ProjectsHome from "./Pages/Projects/ProjectsHome";
import BranchProjects from "./Pages/Projects/BranchProjects";
import ProjectList from "./Pages/Projects/ProjectList";
import QuickEnquiry from "./Components/Enquiry";
import SummerInternship from "./Pages/SummerInternship";
import CategoryProjectsTable from "./Pages/Projects/CategoryProjectsTable";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Researchpaper />} />
        <Route path="/documents" element={<DocumentWriting />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/enquiry" element={<QuickEnquiry />} />

        {/* Level */}
        <Route path="/:level" element={<ProjectsHome />} />

        {/* Branch */}
        <Route path="/:level/:branch" element={<BranchProjects />} />

        {/* Major / Minor */}
        <Route path="/:level/:branch/:type" element={<ProjectList />} />

        <Route path="/summer" element={<SummerInternship />} />
        {/* <Route path="/s" element={<SummerInternship2/>}/> */}

        <Route
          path="/:level/:branch/:type/:category"
          element={<CategoryProjectsTable />}
        />


      </Routes>


      <Footer />
    </>
  );
}

export default App;
