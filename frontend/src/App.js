import * as React from "react";
import Header from "../src/Component/Header/Header";
import Footer from "../src/Component/Footer/Footer";
import Home from "../src/Component/Home/Home";
import About from "../src/Component/About/About";
import Services from "../src/Component/Services/Services";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import "../src/Style.css";
import Testimonials from "./Component/Testimonials/Testimonials";
// import Newcontact from "./Component/Newcontact";



function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />


      {/* <Newcontact/> */}
  
 
  


      
    </>
  );
}

export default App;
