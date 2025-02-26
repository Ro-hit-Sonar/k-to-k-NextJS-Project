import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="relative h-[500px] mb-8">
          <Image
            src="/hari_chand1.png"
            alt="Farmer in the field"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
            Hari Chand
          </h1>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Sustainable Farming Enthusiast
          </h2>
          <p className="text-amber-900 leading-relaxed">
            Hello, I’m Hari Chand, and farming has been my life’s work since I
            was a child. I grew up in a small village where my father taught me
            that the land is a trusted friend. Every day, I rise before dawn to
            greet the gentle light of morning, when the fields are quiet and
            full of promise. I walk slowly along the rows, checking on each
            plant, and listening to the soft whispers of nature as it tells me
            when to nurture, water, or simply wait. My way of farming is simple
            and true. I use time-honored methods passed down from my
            ancestors—methods that respect the rhythm of nature. I mix these
            traditions with a few careful, modern touches that help keep my soil
            healthy. I believe that every seed holds a promise, and every
            harvest is a small miracle of nature. When the crops grow strong and
            green, I feel a deep sense of fulfillment knowing that my hard work
            has been rewarded.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#315D0D]">
              The Roots of Passion
            </h3>
            <p>
              Hari Chand grew up in a farming household where every sunrise
              marked a new day of dedication to the land. From an early age, he
              was fascinated by the way nature provided when treated with care
              and respect, a lesson he carries with him to this day.
            </p>
            <p>
              Driven by the need for better agricultural practices, he turned to
              natural fertilizers, companion planting, and rainwater harvesting.
              His efforts have not only increased his farm’s productivity but
              also contributed to a healthier, more sustainable way of farming.
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
              Hari Chand&#39;s farm is a testament to the harmony between modern
              agricultural science and time-honored farming traditions.
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-[#315D0D] mb-4">
            Community Impact
          </h3>
          <p className="text-green-900 leading-relaxed">
            Hari Chand dedicates his time to educating the next generation about
            farming. He welcomes school groups to his farm, giving children
            hands-on experience with planting and harvesting. By bridging the
            gap between urban youth and agriculture, he hopes to instill a deep
            respect for farming and the people behind it.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-[#315D0D]">The Life </h3>
          <p>
            What makes my journey so special is the connection I share with my
            community. Every vegetable I grow is a conversation between the
            earth and me. When families enjoy the produce that I nurture, it
            feels as though I’m sharing a part of my own heart with them. I
            joined the “खेत to Kitchen” initiative to bring this connection to
            more homes, ensuring that the love and care I put into my work reach
            tables far and wide. I cherish the moments spent in my fields,
            watching the play of light on the leaves and the quiet hustle of
            nature at work. Even on challenging days—when a sudden change in
            weather or an unexpected setback occurs—I remember that each day
            offers a new lesson. Farming is not just about growing food; it’s
            about growing with the land, learning from it, and passing on those
            lessons to the next generation. In my humble work, I find both
            strength and joy. The simple act of sowing a seed and watching it
            sprout reminds me that life, much like farming, is a series of
            small, hopeful beginnings. I invite you to join me on this journey
            from खेत to Kitchen, where every harvest tells a story and every
            meal is a celebration of nature’s bounty. Together, we can
            appreciate the simple, honest beauty of farm life—one family at a
            time.
          </p>
        </div>

        <div className="relative h-[600px] mt-12">
          <Image
            src="/hari_chand2.png"
            alt="Panoramic view of John's farm"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-lg"></div>
          <p className="absolute bottom-6 left-6 text-white text-lg font-semibold">
            Hari Chand&#39;s Grandchildren{" "}
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
