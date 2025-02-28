import React from "react";

const AboutUs = () => {
  return (
    <div
      className=" h-[600px] w-full bg-cover bg-center mb-40"
      style={{ backgroundImage: "url('/farmbground.png')" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-16 text-gray-800 text-center">
        <h1 className="text-5xl font-semibold text-[#315D0D]">About Us</h1>{" "}
        <div className="mt-6 text-lg leading-relaxed text-justify">
          <p>
            At खेत to Kitchen, we believe that food is more than just a
            necessity— it’s a story, a connection, and a way to build a
            stronger, more sustainable community. Our mission is simple yet
            profound: to bring fresh, naturally grown farm produce directly to
            your kitchen while uplifting the hardworking farmers who dedicate
            their lives to cultivating the land.
          </p>

          <p className="mt-6">
            In today’s world, the gap between consumers and farmers continues to
            widen. Supermarket shelves are stocked with produce that has
            traveled thousands of miles, often treated with chemicals to
            maintain freshness. Meanwhile, local farmers struggle to receive
            fair prices for their work. खेत to Kitchen was born to change
            this—to bring people closer to their food and the hands that grow
            it.
          </p>

          <p className="mt-6">
            We connect you directly with farmers, offering fresh, local produce
            while ensuring fair compensation for those who grow it. Our platform
            not only provides high-quality, chemical-free food but also fosters
            a community where consumers can learn about and support the farmers
            who make it all possible.
          </p>

          <p className="mt-6">
            Every choice you make has an impact. By choosing खेत to Kitchen,
            you’re not just buying food—you’re supporting livelihoods,
            encouraging sustainability, and becoming part of a movement that
            values authenticity, care, and trust. Together, we can create a
            future where farmers and consumers thrive, one family at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
