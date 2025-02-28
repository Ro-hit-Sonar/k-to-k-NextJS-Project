import React from "react";

const FeedBack = () => {
  return (
    <div>
      <div
        className=" h-[600px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/farmbground.png')" }}
      >
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mt-0 mb-4 text-[#315D0D]">
                Your Voice Matters
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Every visit, every purchase, and every shared moment helps us
                grow. We&lsquo;d love to hear about your experience—your
                feedback shapes the way we bring farm-fresh goodness to your
                table.
              </p>
            </div>
            <div className="lg:w-2/3 w-full mx-auto px-8 sm:px-0">
              <div className="flex sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="relative flex-grow w-full">
                  <label
                    htmlFor="full-name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative flex-grow w-full">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="relative flex-grow w-full mt-4">
                <label
                  htmlFor="feedback"
                  className="leading-7 text-sm text-gray-600"
                >
                  Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={5}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div className="mt-4 mb-8 text-center ">
                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default FeedBack;
