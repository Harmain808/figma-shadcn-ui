import React from "react";
import { Button } from "@/components/ui/button"
import Image from 'next/image';

const Header = () => {
    return (
      <div className="w-[1152px] h-[50px] justify-center gap-8.02px">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={130}
            height={30}
            priority
            className="w-auto h-auto"
          />
<div className=" hidden md:flex w-[1277px] h-[44px] top-[170px] left-[100px] border-b-[2px] pr[64px] pl-[64px] bg-[#FFFFFF] border-[#676767]">
<ul className="w-[687px] h-[44px] ml-[500px] justify-center">
    <li className="flex justify-center flex gap-2 mr-4 ">
    <Button variant={"outline"} size={"sm"}>
                Home
              </Button>
              <Button variant={"secondary"} size={"sm"}>
                Courses
              </Button>
              <Button variant={"secondary"} size={"sm"}>
                Services
              </Button>
              <Button variant={"secondary"} size={"sm"}>
                Achievement
              </Button>
              <Button variant={"secondary"} size={"sm"}>
                About Us
              </Button>
              <Button variant={"secondary"} size={"sm"}>
                Testimonial
              </Button>
              </li>
            </ul>
            <div className="flex gap-1">
            <a href="https://accounts.google.com/v3/signin/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en&authuser=0&ddm=1&flowName=GlifWebSignIn&flowEntry=AddSession" className="py-2 px-2 rounded-[5px] bg-black text-white border border-black">
            Login
            </a>
              <a href=" https://discord.com/login" className="px-4 py-2 rounded-[6px] bg-black text-white border border-black">
             SignUp
              </a>
            </div>
           </div>
            </div>
          
          
          
      )
      }
      export default Header;
