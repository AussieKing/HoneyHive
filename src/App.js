import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail"; // Import the new component
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import LegalDocument from "./components/LegalDocument";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const handleContactSubmit = (contactMessage) => {
    // Handle contact form submission here
    alert("Message Sent!");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout useContainer={false}><About /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/projects/:slug" element={<Layout><ProjectDetail /></Layout>} /> {/* New route for project details */}
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/contact" element={<Layout><ContactForm onSubmitContact={handleContactSubmit} /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><LegalDocument /></Layout>} />
        <Route path="/terms-conditions" element={<Layout><LegalDocument /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
