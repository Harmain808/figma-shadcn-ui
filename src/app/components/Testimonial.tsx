import React from "react"
import Image from "next/image"

const Testimonial = () => {
    return (
      <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[36px] text-center sm:text-[48px] font-bold text-[#000000] px-4 sm:px-8">
          Customer Testimonials
        </h2>
        <p className="text-gray-900 text-center mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-12 w-full">
          <div className="xl:flex justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-start gap-4 p-8 border border-black w-full">
            <p className="text-3xl">★★★★★</p> 
              <div className="flex flex-col justify-center items-start w-full gap-6">
                <p className="text-lg">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex justify-start items-center gap-5">
                  <Image
                    src={"/ai.svg"}
                    alt="ai"
                    height={50}
                    width={50}
                  />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="font-semibold">Wade Warren</h3>
                    <p className="xl:hidden">Position, Company name</p>
                    <p className="hidden xl:block">Software Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex flex-col justify-center items-start gap-4 p-8 border border-black w-full">
            <p className="text-3xl">★★★★★</p> 
              <div className="flex flex-col justify-center items-start w-full gap-6">
                <p className="text-lg">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex justify-start items-center gap-5">
                  <Image
                    src={"/ai1.svg"}
                    alt="ai1"
                    height={50}
                    width={50}
                  />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="font-semibold">Erick Kipkemboi</h3>
                    <p>Scrum Master</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex flex-col justify-center items-start gap-4 p-8 border border-black w-full">
              <p className="text-3xl">★★★★★</p> 
              <div className="flex flex-col justify-center items-start w-full gap-6">
                <p className="text-lg">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                </div>
                <div className="flex justify-start items-center gap-5">
                  <Image
                    src={"/ai2.svg"}
                    alt="ai2"
                    height={50}
                    width={50}
                  />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="font-semibold">Stephen Kerubo</h3>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 py-2 text-[46px] w-full">•◦◦◦◦
            <div className="flex justify-center items-center gap-[10px]">
              <button className="p-1 py-1 text-[46px] border border-black border-2 rounded-full">← 
              </button>
              <button className="p-1 py-1 text-[46px] border border-black border-2 rounded-full">→
              </button>
            </div>
          </div>
        </div>
        )
        }
        export default Testimonial;