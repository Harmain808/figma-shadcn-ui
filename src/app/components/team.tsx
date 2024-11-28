import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Team = () => {
    return (
    <div className="flex flex-col justify-center items-center py-12 xl:py-28 px-6 xl:px-16 gap-12 xl:gap-20 bg-[#f7f7f7]">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-bold text-[32px]/[40px] xl:text-5xl text-center">
            Our team
          </h2>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row justify-center xl:justify-evenly items-center gap-12 xl:gap-0 xl:w-full">
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src="/t.svg" alt="team" height={80} width={80}/>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">James Nduku</h3>
              <p className="text-lg text-center">Marketing Coordinator</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
            <a className="" href="https://pk.linkedin.com/"><img src="/Linkedin.svg" alt="Linkedin"/></a>
            <a className="" href="https://twitter.com/"><img src="/Twitter.svg" alt="Twitter"/></a>
            <a className="" href="https://www.uefa.com/"><img src="/fot.svg" alt="d"/></a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src="/t1.svg" alt="team" height={80} width={80}/>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">
                Joseph Munyambu
              </h3>
              <p className="text-lg text-center">Nursing Assistant</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
            <a className="" href="https://pk.linkedin.com/"><img src="/Linkedin.svg" alt="Linkedin"/></a>
            <a className="" href="https://twitter.com/"><img src="/Twitter.svg" alt="Twitter"/></a>
            <a className="" href="https://www.uefa.com/"><img src="/fot.svg" alt="d"/></a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src="/t2.svg" alt="team" height={80} width={80}/>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">
                Joseph Ngumbau
              </h3>
              <p className="text-lg text-center">Medical Assistant</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
            <a className="" href="https://pk.linkedin.com/"><img src="/Linkedin.svg" alt="Linkedin"/></a>
            <a className="" href="https://twitter.com/"><img src="/Twitter.svg" alt="Twitter"/></a>
            <a className="" href="https://www.uefa.com/"><img src="/fot.svg" alt="d"/></a>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex flex-col xl:flex-row justify-center xl:justify-evenly items-center gap-12 xl:gap-0 xl:w-full">
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src="/t3.svg" alt="team" height={80} width={80}/>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">
                Erick Kipkemboi
              </h3>
              <p className="text-lg text-center">Web Designer</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
            <a className="" href="https://pk.linkedin.com/"><img src="/Linkedin.svg" alt="Linkedin"/></a>
            <a className="" href="https://twitter.com/"><img src="/Twitter.svg" alt="Twitter"/></a>
            <a className="" href="https://www.uefa.com/"><img src="/fot.svg" alt="d"/></a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src="/t4.svg" alt="team" height={80} width={80}/>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">
                Stephen Kerubo
              </h3>
              <p className="text-lg text-center">President of Sales</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
            <a className="" href="https://pk.linkedin.com/"><img src="/Linkedin.svg" alt="Linkedin"/></a>
            <a className="" href="https://twitter.com/"><img src="/Twitter.svg" alt="Twitter"/></a>
            <a className="" href="https://www.uefa.com/"><img src="/fot.svg" alt="d"/></a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src="/t5.svg" alt="team" height={80} width={80}/>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">John Leboo</h3>
              <p className="text-lg text-center">Dog Trainer</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
            <a className="" href="https://pk.linkedin.com/"><img src="/Linkedin.svg" alt="Linkedin"/></a>
            <a className="" href="https://twitter.com/"><img src="/Twitter.svg" alt="Twitter"/></a>
            <a className="" href="https://www.uefa.com/"><img src="/fot.svg" alt="d"/></a>
            </div>
          </div>
        </div>
        <Button variant={"default"}>
        View All
        </Button>
      </div>
    )
}
export default Team;