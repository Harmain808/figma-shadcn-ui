import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image"

const Footer = () => {
	return (
    <footer className="bg-white border-t border-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Subscribe to our newsletter
            </h3>
            <p className="text-center xl:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center xl:items-start gap-4 w-full">
            <form className="flex flex-col xl:flex-row justify-center items-center gap-4 w-full">
              <input
                placeholder="Enter your email"
                type="email"
                className="w-full p-3 border border-black rounded-[5px]"
              />
                <Button variant={"apnaStyle"}>Subscribe</Button>
            </form>
            <p className="text-sm text-center">
              By subscribing you agree to with our
              <span className="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-start xl:justify-between xl:w-full gap-8 xl:gap-10">
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Image src={"/Logo.svg"} alt="image" height={100} width={100} />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="font-semibold text-center">Courses</h3>
            <div>
              <p className="py-2 text-sm text-center">Business</p>
              <p className="py-2 text-sm text-center">Development</p>
              <p className="py-2 text-sm text-center">Technology</p>
              <p className="py-2 text-sm text-center">Design</p>
              <p className="py-2 text-sm text-center">Programming</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="font-semibold text-center">Resources</h3>
            <div>
              <p className="py-2 text-sm text-center">Career</p>
              <p className="py-2 text-sm text-center">Resume</p>
              <p className="py-2 text-sm text-center">Learning</p>
              <p className="py-2 text-sm text-center">Interview Preperation</p>
              <p className="py-2 text-sm text-center">Jobs</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="font-semibold text-center">About Us</h3>
            <div>
              <p className="py-2 text-sm text-center">Contact</p>
              <p className="py-2 text-sm text-center">Help/Support</p>
              <p className="py-2 text-sm text-center">FAQ</p>
              <p className="py-2 text-sm text-center">Terms and Conditions</p>
              <p className="py-2 text-sm text-center">Partners</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <hr className="border border-black w-full" />
          <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-6 xl:w-full">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-6">
              <p className="text-center text-sm">
                2023 Ddsgnr
                </p>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                All right reserved
              </a>

              
              <div className="flex items-center gap-6">
              <a href="https://policies.google.com/privacy?hl=en-US" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="https://policies.google.com/terms?hl=en" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="https://support.google.com/accounts/answer/61416?hl=en&co=GENIE.Platform%3DDesktop" className="text-sm text-gray-400 hover:text-white">
              Cookies Settings
              </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
               
            <a className="" href="https://www.facebook.com/"><img src="/Facebook.svg" alt="facebook"/></a>
                    <a className="" href="https://www.instagram.com/"><img src="/Instagram.svg" alt="Instagram"/></a>
                    <a className="" href="https://twitter.com/"><img src="/Twitter.svg" alt="Twitter"/></a>
                    <a className="" href="https://pk.linkedin.com/"><img src="/Linkedin.svg" alt="Linkedin"/></a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer