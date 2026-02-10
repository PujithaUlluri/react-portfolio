import { Routes, Route } from "react-router-dom";

import Card from "../components/Card/Card";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

function my_router() {
  return (
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default my_router;


