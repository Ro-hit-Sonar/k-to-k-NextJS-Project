import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="relative h-[700px] mb-8">
          <Image
            src="/arvind_patel1.png"
            alt="Farmer in the field"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
            Arvind Patel{" "}
          </h1>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Sustainable Farming Enthusiast
          </h2>
          <p className="text-amber-900 leading-relaxed">
            Hello, my name is Arvid Patel. I was born into a farming family, and
            from a young age, I was fascinated by the quiet dialogue between the
            land and its caretaker. Unlike many who strictly follow old
            traditions, I always felt a spark of curiosity to learn and improve.
            I remember sitting on the edge of our field, watching the plow turn
            the soil, and wondering how the earth could whisper secrets of
            growth if only we listened closely. Growing up, I balanced the
            wisdom of my elders with a desire to explore new ideas. My
            grandfather taught me the age-old techniques of crop rotation and
            natural composting, while my school lessons introduced me to
            sustainable practices and basic science. This mix of tradition and
            innovation shaped my approach to farming. I started experimenting
            with organic methods, integrating modern tools that still respected
            the natural rhythm of the seasons. Every seed I plant is not only a
            promise of tomorrow’s harvest but also a testament to the harmony
            between old ways and new insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#315D0D]">
              The Roots of Passion
            </h3>
            <p>
              Arvind Patel’s love for farming was nurtured in the fertile lands
              of his village, where he spent his childhood learning from
              seasoned farmers. Their dedication to the land left a lasting
              impact, shaping his vision for a future where farming and
              sustainability go hand in hand.
            </p>
            <p>
              After gaining knowledge in modern farming techniques, he returned
              home with a mission to enhance soil fertility and promote natural
              farming. His approach combines crop diversity, organic
              fertilizers, and efficient irrigation, ensuring both productivity
              and long-term soil health.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#315D0D]">
              Farm Specialties
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Organic heirloom tomatoes</li>
              <li>Sweet corn varieties</li>
              <li>Assorted organic berries</li>
              <li>Free-range chicken eggs</li>
              <li>Local wildflower honey</li>
            </ul>
            <p>
              Sita Devi&#39;s farm is a testament to the harmony between modern
              agricultural science and time-honored farming traditions.
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-[#315D0D] mb-4">
            Community Impact
          </h3>
          <p className="text-green-900 leading-relaxed">
            Arvind Patel believes that knowledge should be shared, not kept. He
            actively mentors young farmers, guiding them in sustainable
            practices and efficient water usage. Through community meet-ups and
            field demonstrations, he helps others understand the importance of
            preserving soil health while maximizing productivity.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-[#315D0D]">The Life </h3>
          <p>
            Each day on the farm is an opportunity to learn. I begin my mornings
            with a quiet walk among the crops, noticing the subtle changes that
            the night has brought. Sometimes, I pause to adjust my methods based
            on the lessons nature teaches me—the way a slight change in water
            flow can impact a row of plants, or how the wind signals the start
            of a new season. I take pride in these small observations, for they
            remind me that farming is a constant dialogue with nature. I also
            believe in sharing this knowledge. On weekends, I welcome local
            youth to visit the farm, inviting them to see firsthand that
            agriculture can be both a respectful nod to tradition and a space
            for creative exploration. Their questions and fresh perspectives
            often spark new ideas in my work, and I find joy in mentoring the
            next generation of farmers. Being a part of the “खेत to Kitchen”
            initiative is particularly special. It means that the fruits of my
            labor reach families who appreciate genuine, lovingly grown produce.
            Every harvest I share is a story of balance—between time-honored
            methods and thoughtful innovation, between personal care and
            community support. I invite you to join me in this journey, as we
            bring the best of the earth to your table, one family at a time.
          </p>
        </div>

        <div className="relative h-80 mt-12">
          <Image
            src="/arvind_patel2.png"
            alt="Panoramic view of John's farm"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-lg"></div>
          <p className="absolute bottom-6 left-6 text-white text-lg font-semibold">
            Arvind Patel&#39;s Son{" "}
          </p>
        </div>
        <p className="mt-8 font-mono font-semibold  ">
          {" "}
          &quot; What I admire most about my father is his constant curiosity.
          He’s always trying something new in the fields—even after all these
          years. Our farm is a blend of his wisdom and experiments, and we’re
          excited to have you walk through it with us&quot;
        </p>
      </div>
    </div>
  );
};

export default page;
