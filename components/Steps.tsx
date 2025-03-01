import React from "react";
import Image from "next/image";
const Steps = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#315D0D] inline-flex items-center justify-center text-white relative z-10">
                  1
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">
                    We are more than just a shop! Before browsing our products,
                    take a moment to visit our Farmer Profile section and get
                    inspired by their heartfelt stories.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#315D0D] inline-flex items-center justify-center text-white relative z-10">
                  2
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    After you’ve met our farmers, head to the products page and
                    create your shopping list of fresh, farm-picked treasures.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#315D0D] inline-flex items-center justify-center text-white relative z-10">
                  3
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">
                    If you’re visiting the farm, be sure to check out our
                    family-friendly activities for a fun, hands-on
                    experience—don’t forget to book your spot!
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#315D0D] inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    We love hearing from you! Share your feedback or suggestions
                    so we can make your experience even better.
                  </p>
                </div>
              </div>
            </div>
            <Image
              src="/cow.png"
              alt="cover"
              width={500}
              height={500}
              className="ml-28"
            />
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default Steps;
