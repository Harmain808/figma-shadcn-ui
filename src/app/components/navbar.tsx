import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#F7F7F7] text-sm text-gray-700 hidden md:block">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto py-2 px-2">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div>
            <span> Phone Number:</span>
            <a href="tel:03452615590" className="text-black hover:underline">
            956 742 455 678 
            </a>
          </div>
          <div className='h-5 w-px bg-[#676767]'></div>
          <div>
            <span>Email: </span>
            <a
              href="mailto:info@ddsgnr.com"
              className="text-black hover:underline"
            >
              info@ddsgnr.com
            </a>
          </div>
        </div>
                <div className="flex items-center justify-center gap-2">
                  
                    <a className="" href="https://www.facebook.com/"><img src="/Facebook.svg" alt="facebook"/></a>
                    <a className="" href="https://www.instagram.com/"><img src="/Instagram.svg" alt="Instagram"/></a>
                    <a className="" href="https://twitter.com/"><img src="/Twitter.svg" alt="Twitter"/></a>
                    <a className="" href="https://pk.linkedin.com/"><img src="/Linkedin.svg" alt="Linkedin"/></a>

            </div>
            </div>
        
      </div>
      )
      }
      export default Navbar;