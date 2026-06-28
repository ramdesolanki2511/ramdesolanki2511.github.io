import React from "react";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import WorkHistory from "@/components/home/WorkHistory";

function Main() {
  return (
    <div className="mt-20 space-y-32" id="main-section">
      <Projects />
      <Skills />
      <WorkHistory />
      <Testimonials />
    </div>
  );
}

export default Main;
