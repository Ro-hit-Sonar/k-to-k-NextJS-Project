import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="relative h-96 mb-8">
          <Image
            src="/ramesh1.png"
            alt="Farmer in the field"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
            Ramesh Singh
          </h1>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Sustainable Farming Enthusiast
          </h2>
          <p className="text-amber-900 leading-relaxed">
            Hello, my name is Ramesh Singh. I grew up with the land as my
            closest friend, a bond that has grown with me through the years. I
            was born in a small village where farming was not just a job but a
            way of life passed down through generations. From a young age, I
            learned the art of sowing seeds, nurturing them, and patiently
            waiting for the harvest. I still remember the early mornings,
            walking through dew-kissed fields, feeling the earth beneath my
            feet, and listening to the soft whispers of the wind as it carried
            the promise of a new day. Every season brings its own story to my
            farm. Spring is when hope is planted; I watch as tiny green sprouts
            break through the soil. Summer is a time of hard work, with the sun
            shining down and the earth growing warm under my care. In the cool
            embrace of autumn, I see my crops ripen and feel a deep
            satisfaction, knowing that nature has once again blessed my efforts.
            And even in winter, when the fields rest, there is a quiet peace
            that reminds me of the cycles of life and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#315D0D]">
              The Roots of Passion
            </h3>
            <p>
              Ramesh Singh’s bond with farming was forged in the lush green
              fields of his family’s land, where every harvest was a celebration
              of hard work and patience. Inspired by his elders, he developed an
              unwavering respect for the land and its cycles.
            </p>
            <p>
              To improve his farm’s yield while staying true to nature, he
              introduced innovative water management and organic farming
              methods. By focusing on soil health and sustainability, he has not
              only secured his farm’s future but also set an example for the
              next generation of farmers.
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
              Ramesh Singh&#39;s farm is a testament to the harmony between
              modern agricultural science and time-honored farming traditions.
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-[#315D0D] mb-4">
            Community Impact
          </h3>
          <p className="text-green-900 leading-relaxed">
            Ramesh Singh is a strong advocate for farmer collaboration. He has
            played a key role in forming a local farming collective where
            farmers exchange resources, ideas, and best practices. By fostering
            a sense of unity and shared learning, he has helped small-scale
            farmers achieve better yields and economic stability.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-[#315D0D]">The Life </h3>
          <p>
            Farming is not always easy, but it is always honest. I have learned
            to work with nature rather than against it. I rely on traditional
            methods that my father taught me, mixed with a few new ideas I have
            picked up along the way. I use simple, natural techniques to keep my
            soil healthy and my crops thriving. My goal has always been to grow
            food that is not only fresh but also full of the natural goodness
            that comes from a well-tended field. One of the best parts of my
            journey is sharing my work with others. When I see people enjoying
            the fruits of my labor, I feel a connection that goes beyond just
            selling a product. It feels like I am sharing a part of my life, my
            daily routine, and my love for the earth. Every vegetable I grow
            carries with it the story of the land, the care of my family, and
            the spirit of a simple life. I am proud to be a part of this journey
            from खेत to Kitchen, where the food I nurture reaches tables where
            families gather. I hope that as you enjoy the produce, you also
            share in the joy of a life spent in tune with nature—a life that is
            simple, honest, and full of quiet rewards.
          </p>
        </div>

        <div className="relative h-80 mt-12">
          <Image
            src="/ramesh2.png"
            alt="Panoramic view of John's farm"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-lg"></div>
          <p className="absolute bottom-6 left-6 text-white text-lg font-semibold">
            Ramesh Singh&#39;s GrandDaughter{" "}
          </p>
        </div>
        <p className="mt-8 font-mono font-semibold  ">
          {" "}
          &quot; we our super pround of my super mom , our family welcomes you
          to our farm.&quot;
        </p>
      </div>
    </div>
  );
};

export default page;
