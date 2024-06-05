import { Button } from "@/components/ui/button";

export function PaymentCardComponent() {
  return (
    <section className=" w-full py-12 bg-gradient-to-r  flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div>
              <div className="py-5">
                <h3 className="text-2xl font-bold text-start text-gray-800">
                  Personal
                </h3>
                <h4 className="text-lg font-normal text-start text-gray-600">{` Special first packet for all `}</h4>
              </div>

              <hr />
              <div className="mt-4 text-center text-zinc-600">
                <span className="text-4xl font-bold">$8</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Up to 5 page each group
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Up to 10 group page
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                 5 Days group page saved
                </li>
                
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
          <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500">
            <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Popular
            </div>
            <div>
            <div className="py-5">
                <h3 className="text-2xl font-bold text-start text-gray-800">
                  Personal
                </h3>
                <h4 className="text-lg font-normal text-start text-gray-600">{` Special first packet for all `}</h4>
              </div>

              <hr />
              <div className="mt-4 text-center text-zinc-600 ">
                <span className="text-4xl font-bold">$20</span>/ month
              </div>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-2xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Up to 15 page each group
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Download page up to 20 page
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                 Up to 10 group page
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  15 Days group page saved
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div>
              <div className="py-5">
                <h3 className="text-2xl font-bold text-start text-gray-800">
                  Premium
                </h3>
                <h4 className="text-lg font-normal text-start text-gray-600">{` Packet for Startup & Company `}</h4>
              </div>

              <hr />
              <div className="mt-4 text-center text-zinc-600">
                <span className="text-4xl font-bold">$48</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Unlimited group pages
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Unlimited download page
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Unlimited page each group
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Customize sorting group pages
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  Customize group page name
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="bg-green-500 rounded-full mr-2 p-1">
                    <svg
                      className=" text-white text-xs"
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  30 Days group page saved
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
