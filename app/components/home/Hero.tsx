import { PaymentCardComponent } from "@/components/component/payment-card-component";
import { Button } from "@/components/ui/button";
import { Chatbot } from "@/public";
import { Dribbble, ZapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main className="flex-1 relative">
      <section id="About" className="w-full py-12 md:py-24 lg:py-20 xl:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl max-w-[900px] leading-loose pb-2 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ">
                Transform Your Job Search with AI-Powered Resumes
              </h1>
              <p className="mx-auto max-w-[700px] dark:text-gray-50 md:text-xl font-poppins font-[300] py-2">
                {`"Unlock Your Career Potential with AI: Effortlessly Create Professional Resumes That Get Noticed."`}
              </p>
            </div>
            <div className="space-x-4">
              <Button className="mt-8 bg-[#5ac4ff] hover:bg-[#21a5ed] px-5 py-6 rounded-full">
                Get Started 🔥
              </Button>
            </div>
          </div>
        </div>
        <div className=" w-full  mt-20  overflow-x-hidden overflow-y-clip">
          <div className=" mb-4 flex  justify-center space-x-4 px-4 py-7">
            <div className="z-10 flex items-center space-x-2 bg-[#333] py-3 px-4 rounded-xl border-2 border-gray-600 transform rotate-12">
              <TwitterIcon className="h-8 w-8 text-blue-500" />
              <span className="text-gray-50 ">Cryptopunk - Search</span>
              <Button variant="ghost" className="">
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2 bg-[#333] py-2 px-4 rounded-xl border-2 border-gray-600 rotate-6">
              <Dribbble className="h-8 w-8 text-purple-400" />
              <span className="text-sm text-gray-50">
                Popular Design - Search
              </span>
              <Button variant="ghost" className=" hover:text-gray-400">
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2 bg-[#333] py-2 px-4 rounded-xl border-2 border-gray-600 transform -rotate-12">
              <FacebookIcon className="h-8 w-8 text-blue-700" />
              <span className="text-sm text-gray-50">
                Product Design - Search
              </span>
              <Button variant="ghost" className=" hover:text-gray-400">
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2 bg-[#333] py-2 px-4 rounded-xl border-2 border-gray-600  ml-10 rotate-12 sticky top-0 bottom-0 right-0">
              <Dribbble className="h-8 w-8 text-purple-400" />
              <span className="text-sm text-gray-50">
                Popular Design - Search
              </span>
              <Button
                variant="ghost"
                className="text-gray-500 hover:text-gray-400"
              >
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full items-center ">
        <div className="bg-[#5ac4ff] mx-auto container py-10 items-center flex flex-col justify-center">
          <h3 className="font-[600] text-[40px] pt-16 px-10 text-center text-gray-800">
            Tailored Resumes Just in Minutes{" "}
          </h3>
          <div className="px-16  py-10 rounded-xl bg-white items-center flex flex-col justify-center my-5">
            <div className="bg-black px-16 py-8 flex justify-around items-center lg:space-x-5 space-x-2">
              <ZapIcon className="h-4 w-4 " />
              <p className="lg:text-xl  text-white">Upload Resume </p>
              <XIcon className="h-4 w-4" />
            </div>
          </div>

          <p className="mx-auto max-w-[700px] text-gray-800 text-center md:text-xl font-poppins font-[400] py-2">{`A solution for your browser tabs and don't make your device get slower over time. Get ease and faster to discover a trend with just one tab.`}</p>
        </div>
      </section>

      <section className="w-full  flex flex-col justify-center items-center">
        <div className="w-full items-center  py-10 container bg-white ">
          <div className="max-w-[700px] mx-auto items-center  ">
            <h3 className="font-[600] text-gray-800 text-[40px] text-center">
              Our AI helps you to increase your chances of getting hired by your
              dream company,
              <span className="font-poppins font-[700] text-[36px] text-gray-500">
                a resume that guarantees to fulfill your daily browsing needs.{" "}
              </span>
            </h3>
          </div>

          <div className="mt-16 w-full ">
            <h3 className="text-gray-800 font-poppins font-[700] text-[40px] lg:leading-6 text-center">{`Merlin's Group AI - Trusted by Many`}</h3>

            <div className="grid lg:grid-cols-4 grid-cols-2 mt-10 gap-5 pb-20">
              <div className="rounded-lg bg-gray-100 text-black font-bold text-[24px] font-poppins py-5 text-center">
                Microsoft
              </div>
              <div className="rounded-lg bg-gray-100 text-black font-bold text-[24px] font-poppins py-5 text-center">
                Microsoft
              </div>
              <div className="rounded-lg bg-gray-100 text-black font-bold text-[24px] font-poppins py-5 text-center">
                Microsoft
              </div>
              <div className="rounded-lg bg-gray-100 text-black font-bold text-[24px] font-poppins py-5 text-center">
                Microsoft
              </div>
              <div className="rounded-lg bg-gray-100 text-black font-bold text-[24px] font-poppins py-5 text-center">
                Microsoft
              </div>
              <div className="rounded-lg bg-gray-100 text-black font-bold text-[24px] font-poppins py-5 text-center">
                Microsoft
              </div>
              <div className="rounded-lg bg-gray-100 text-black font-bold text-[24px] font-poppins py-5 text-center">
                Microsoft
              </div>
              <div className="rounded-lg bg-gray-100 text-black font-bold text-[24px] font-poppins py-5 text-center">
                Microsoft
              </div>
              <div className="rounded-lg bg-gray-100 text-black font-bold text-[24px] font-poppins py-5 text-center">
                Microsoft
              </div>
              <div className="rounded-lg bg-gray-100 text-black font-bold text-[24px] font-poppins py-5 text-center">
                Microsoft
              </div>
              <div className="rounded-lg bg-gray-100 text-black font-bold text-[24px] font-poppins py-5 text-center">
                Microsoft
              </div>
              <div className="rounded-lg bg-gray-100 text-black font-bold text-[24px] font-poppins py-5 text-center">
                Microsoft
              </div>
            </div>
            <div className="bg-gray-100 container py-16">
              <h3 className="text-gray-800 font-poppins font-[700] text-[40px] lg:leading-6 text-center">{`All platform connect to MG`}</h3>
              <div className="grid lg:grid-cols-8 grid-cols-2 mt-10 gap-5 pb-20">
                <div className="rounded-lg bg-white text-black font-bold text-[24px] font-poppins py-5 text-center">
                  Microsoft
                </div>
                <div className="rounded-lg bg-white text-black font-bold text-[24px] font-poppins py-5 text-center">
                  Microsoft
                </div>
                <div className="rounded-lg bg-white text-black font-bold text-[24px] font-poppins py-5 text-center">
                  Microsoft
                </div>
                <div className="rounded-lg bg-white text-black font-bold text-[24px] font-poppins py-5 text-center">
                  Microsoft
                </div>
                <div className="rounded-lg bg-white text-black font-bold text-[24px] font-poppins py-5 text-center">
                  Microsoft
                </div>
                <div className="rounded-lg bg-white text-black font-bold text-[24px] font-poppins py-5 text-center">
                  Microsoft
                </div>
                <div className="rounded-lg bg-white text-black font-bold text-[24px] font-poppins py-5 text-center">
                  Microsoft
                </div>
                <div className="rounded-lg bg-white text-black font-bold text-[24px] font-poppins py-5 text-center">
                  Microsoft
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold tracking-tighter md:text-4xl/tight ">
              Get Your Best Deal
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-400 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Monthly Or Yearly (Save 10 % Per Month)
            </p>
          </div>
          <PaymentCardComponent />
        </div>
      </section>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-300 px-3 py-1 text-sm ">
                New Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
                Faster iteration. More innovation.
              </h2>
              <p className="mx-auto max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The platform for rapid progress. Let your team focus on shipping
                features instead of managing infrastructure with automated
                CI/CD, built-in testing, and integrated collaboration.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src={Chatbot}
              width="550"
              height="310"
              alt="Image"
              className="mx-auto aspect-video rounded-xl object-fit object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-white">
                      Collaboration
                    </h3>
                    <p className="text-gray-400">
                      Make collaboration seamless with built-in code review
                      tools.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-white">Automation</h3>
                    <p className="text-gray-400">
                      Automate your workflow with continuous integration.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-white">Scale</h3>
                    <p className="text-gray-400">
                      Deploy to the cloud with a single click and scale with
                      ease.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container bg-[#5ac4ff] w-full flex flex-col justify-center items-center py-16 ">
          <div className="space-y-4 flex flex-col justify-center items-center">
            <h2 className="text-[40px] font-[700] tracking-tighter md:text-4xl/tight text-gray-900 ">
              Join us on email for{" "}
            </h2>
            <h3 className="text-4xl font-[700] tracking-tighter md:text-4xl/tight text-white">
              more career topics{" "}
            </h3>
            <button className="bg-black text-white rounded-full px-5 py-3 ">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
