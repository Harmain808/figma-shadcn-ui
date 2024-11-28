import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";


function hero (){
  return(
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
    <div className="flex-1 space-y-4 text-center md:text-left">
      <h2 className="text-5xl font-bold text-gray-800 leading-tight w-full md:w-[600px]">
        Learn new skills online with ease
        </h2>
    
    <p className="text-gray-600 text-lg">
      Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    
    <div className="flex space-x-4">
      <Button variant={"apnaStyle"}>Start Learning Now</Button>
      <Button variant={"default"}>
        Explore Courses
        </Button>
    </div>
  </div>
    <img 
      src="/Image.svg" 
      alt="hero" 
      width={640}
      height={900}
      className="object-cover mx-auto rounded-lg shadow-lg"
    />
      
      </section>
    
);
};

export default hero;