import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"

const Course = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
    <div className="text-center mb-12">
      <h2 className="text-[48px] sm:text-[56px] font-bold text-[#000000]">Courses</h2>
      <p className="text-[16px] sm:text-[20px] text-[#000000] mt-4">Your Ultimate Guide to Learning</p>
    </div>

    <section className="max-w-7xl mx-auto px-4 py-5">
      <div className="flex justify-center mb-16 gap-8">
        <span className="text-[14px] sm:text-[16px] text-[#000000] border-b-[1px] border-[#676767]">Popular</span> 
        <span className="text-[14px] sm:text-[16px] text-[#000000]">Recommended</span> 
        <span className="text-[14px] sm:text-[16px] text-[#000000]">Best Price</span> 
      </div>
      </section>

  <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-16">
<div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
  <div className="flex flex-col items-center justify-center gap-6 rounded-[5px] bg-[#f7f7f7]">
    
    <Image
      src={"/f.svg"}
      alt="1"
      width={400}
      height={300}
      className="w-full"
    />
    <div className="flex flex-col items-center justify-center gap-6 px-4 pb-6">
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="flex w-full items-start justify-end">
          <span className="flex-grow text-sm font-semibold">
            Design
          </span>
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"/Stars.png"}
              alt="star"
              width={30}
              height={30}
            />
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold">UX/UI Design 201</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros.
        </p>
      </div>
      <div className="flex w-full gap-4">
       <Button variant={"destructive"}>Enroll Now</Button>
        <span className="rounded-[5px]font-medium px-5 py-2 text-center">
          $400</span>
      </div>
    </div>
  </div>
  <div className="flex flex-col items-center justify-center gap-6 rounded-[5px] bg-[#f7f7f7]">
    <Image
      src={"/f1.svg"}
      alt="f1"
      width={400}
      height={300}
      className="w-full"
    />
    <div className="flex flex-col items-center justify-center gap-6 px-4 pb-6">
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="flex w-full items-start justify-end">
          <span className="flex-grow text-sm font-semibold">
            Programmimg
          </span>
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"/Stars.png"}
              alt="star"
              width={30}
              height={30}
            />
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold">
          Introduction to Python
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros.
        </p>
      </div>
      <div className="flex w-full gap-4">
       <Button className="px-4 py-3 text-black border-2 border-black bg-white rounded-md transition-colors hover:bg-black hover:text-white">Enroll Now</Button>
        <span className="rounded-[5px]font-medium px-5 py-2 text-center">
          $400
        </span>
      </div>
    </div>
  </div>
  <div className="flex flex-col items-center justify-center gap-6 rounded-[5px] bg-[#f7f7f7]">
    <Image
      src={"/f2.svg"}
      alt="f2"
      width={400}
      height={300}
      className="w-full"
    />
    <div className="flex flex-col items-center justify-center gap-6 px-4 pb-6">
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="flex w-full items-start justify-end">
          <span className="flex-grow text-sm font-semibold">
            Business
          </span>
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"/Stars.png"}
              alt="star"
              width={30}
              height={30}
            />
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold">
          Data Analysis for Beginners
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros.
        </p>
      </div>
      <div className="flex w-full gap-4">
      <Button variant={"destructive"}>Enroll Now</Button>
        <span className="rounded-[5px]font-medium px-5 py-2 text-center">
          $400
        </span>
      </div>
    </div>
  </div>
</div>
{/* Second */}
<div className="hidden items-center justify-center gap-8 lg:flex">
  <div className="flex flex-col items-center justify-center gap-6 rounded-[5px] bg-[#f7f7f7]">
    <Image
      src={"/f3.svg"}
      alt="f3"
      width={400}
      height={300}
      className="w-full"
    />
    <div className="flex flex-col items-center justify-center gap-6 px-4 pb-6">
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="flex w-full items-start justify-end">
          <span className="flex-grow text-sm font-semibold">
            Art
          </span>
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"/Stars.png"}
              alt="star"
              width={30}
              height={30}
            />
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold">Art Specialization</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros.
        </p>
      </div>
      <div className="flex w-full gap-4">
      <Button className="px-4 py-3 text-black border-2 border-black bg-white rounded-md transition-colors hover:bg-black hover:text-white">Enroll Now</Button>
        <span className="rounded-[5px]font-medium px-5 py-2 text-center">
          $400
        </span>
      </div>
    </div>
  </div>
  <div className="flex flex-col items-center justify-center gap-6 rounded-[5px] bg-[#f7f7f7]">
    <Image
      src={"/f4.svg"}
      alt="f4"
      width={400}
      height={300}
      className="w-full"
    />
    <div className="flex flex-col items-center justify-center gap-6 px-4 pb-6">
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="flex w-full items-start justify-end">
          <span className="flex-grow text-sm font-semibold">
            Law
          </span>
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"/Stars.png"}
              alt="star"
              width={30}
              height={30}
            />
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold">Rule of Law</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros.
        </p>
      </div>
      <div className="flex w-full gap-4">
      <Button variant={"destructive"}>Enroll Now</Button>
        <span className="rounded-[5px]font-medium px-5 py-2 text-center">
          $400
        </span>
      </div>
    </div>
  </div>
  <div className="flex flex-col items-center justify-center gap-6 rounded-[5px] bg-[#f7f7f7]">
    <Image
      src={"/f5.svg"}
      alt="f5"
      width={400}
      height={300}
      className="w-full"
    />
    <div className="flex flex-col items-center justify-center gap-6 px-4 pb-6">
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="flex w-full items-start justify-end">
          <span className="flex-grow text-sm font-semibold">
            Tech
          </span>
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"/Stars.png"}
              alt="star"
              width={30}
              height={30}
            />
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold">
          Introduction to webflow
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros.
        </p>
      </div>
      <div className="flex w-full gap-4">
      <Button className="px-4 py-3 text-black border-2 border-black bg-white rounded-md transition-colors hover:bg-black hover:text-white">Enroll Now</Button>
        <span className="rounded-[5px]font-medium px-5 py-2 text-center">
          $400
        </span>
      </div>
    </div>
</div>
</div>
<div className="text-center mt-4">
          <button className="px-4 py-3 text-black border-2 border-black bg-white rounded-md transition-colors hover:bg-black hover:text-white">
            View All Courses
          </button>
        </div>
</div>
</section>
  )
}
export default Course;