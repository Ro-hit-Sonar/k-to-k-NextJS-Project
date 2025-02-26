import React from "react";

const Quote = () => {
  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            {/* Header Section */}
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Quotes
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                A collection of inspiring quotes
              </p>
            </div>

            {/* Asymmetrical Layout */}
            <div className="flex flex-wrap md:-m-2 -m-1">
              {/* Left Column */}
              <div className="flex flex-wrap w-1/2">
                {/* 500 x 300 */}
                <div className="md:p-2 p-1 w-1/2 h-[300px] border border-gray-300 bg-gray-100 flex items-center justify-center">
                  <p className="text-center text-sm md:text-base lg:text-lg">
                    “The only limit to our realization of tomorrow is our doubts
                    of today.”
                  </p>
                </div>
                {/* 501 x 301 */}
                <div className="md:p-2 p-1 w-1/2 h-[301px] border border-gray-300 bg-gray-100 flex items-center justify-center">
                  <p className="text-center text-sm md:text-base lg:text-lg">
                    “In the middle of every difficulty lies opportunity.”
                  </p>
                </div>
                {/* 600 x 360 */}
                <div className="md:p-2 p-1 w-full h-[360px] border border-gray-300 bg-gray-100 flex items-center justify-center">
                  <p className="text-center text-sm md:text-base lg:text-lg">
                    “Do not wait to strike till the iron is hot; but make it hot
                    by striking.”
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-wrap w-1/2">
                {/* 601 x 361 */}
                <div className="md:p-2 p-1 w-full h-[361px] border border-gray-300 bg-gray-100 flex items-center justify-center">
                  <p className="text-center text-sm md:text-base lg:text-lg">
                    “Success is not final, failure is not fatal: it is the
                    courage to continue that counts.”
                  </p>
                </div>
                {/* 502 x 302 */}
                <div className="md:p-2 p-1 w-1/2 h-[302px] border border-gray-300 bg-gray-100 flex items-center justify-center">
                  <p className="text-center text-sm md:text-base lg:text-lg">
                    “The best way to predict the future is to create it.”
                  </p>
                </div>
                {/* 503 x 303 */}
                <div className="md:p-2 p-1 w-1/2 h-[303px] border border-gray-300 bg-gray-100 flex items-center justify-center">
                  <p className="text-center text-sm md:text-base lg:text-lg">
                    “Keep your face always toward the sunshine, and shadows will
                    fall behind you.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Quote;
