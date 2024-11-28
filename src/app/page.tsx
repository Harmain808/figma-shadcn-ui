import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Logo from "./components/logo";
import ExploreCourses from "./components/explor category";
import Achievement from "./components/Achievement";
import Courses from "./components/Course";
import Team from "./components/team";
import Testimonial from "./components/Testimonial";

export default function page(){
  return(
    <div>
        <Navbar />
      <Header />
      <Hero />
      <Logo />
      <ExploreCourses />
      <Achievement />
      <Courses />
      <Team />
      <Testimonial />
      <Footer></Footer>
    </div>
  )
}