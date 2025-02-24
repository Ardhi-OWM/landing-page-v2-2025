import React from "react";
import { Route, Routes } from "react-router-dom"; // No need to import Router again here


import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import BlogDetails from "./components/BlogDetails"; // Import the BlogDetail component
import Imprint from "./components/Imprint";


const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Routes>
        {/* Main route with all your primary components */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Benefits />
              <Collaboration />
              <Blogs />
            </>
          }
        />

        {/* Route for individual blog posts */}

        <Route path="/imprint" element={<Imprint />} />

        

        {/* Route for About page */}
        <Route path="/about" element={<Hero />} />

        {/* Route for Features page */}
        <Route path="/features" element={<Benefits />} />  {/* Benefits is used for Features */}

        {/* Route for Blogs page */}
        <Route path="/blogs" element={<Blogs />} />  
        <Route path="/blog/:slug/" element={<BlogDetails />} />
        {/* <Route path="/blog/:id/" element={<BlogDetails />} /> */}


      </Routes>
      <Footer />
      <ButtonGradient />
    </div>
  );
};

export default App;
