import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/farmer1.png"
                  width={80}
                  height={80}
                />
                <p className="leading-relaxed">
                  Absolutely loved the freshness and quality! The experience of
                  knowing where my food comes from makes every meal feel more
                  special. A perfect blend of tradition and trust recommend it .
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#315D0D] mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  PRIYA SHARMA
                </h2>
                <p className="text-gray-500"> Food Enthusiast </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/farmer1.png"
                  width={80}
                  height={80}
                />
                <p className="leading-relaxed">
                  Visiting the farm was a breath of fresh air—literally! The
                  warmth of the farmers, the quality of the produce, and the
                  overall experience were nothing short of amazing. Definitely
                  coming back.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#315D0D] mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  RAHUL MEHTA
                </h2>
                <p className="text-gray-500"> Entrepreneur </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/farmer1.png"
                  width={80}
                  height={80}
                />
                <p className="leading-relaxed">
                  From farm to plate, the journey feels real and meaningful.
                  Every product carries a story, and that’s what makes it so
                  special. A beautiful initiative that truly connects people
                  with their food.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#315D0D] mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  ANANYA VERMA
                </h2>
                <p className="text-gray-500"> Sustainable Living Advocate </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
