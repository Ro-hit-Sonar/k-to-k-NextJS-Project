import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="relative h-96 mb-8">
          <Image
            src="/sita_devi2.png"
            alt="Farmer in the field"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
            Sita Devi
          </h1>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Sustainable Farming Enthusiast
          </h2>
          <p className="text-amber-900 leading-relaxed">
            Hello, my name is Sita Devi. I grew up in a small village where life
            was simple and every day was a lesson in nature’s ways. I learned
            the art of farming from my mother, who taught me how to listen to
            the land and respect its rhythm. From an early age, I helped in the
            fields, watching the seeds transform into the crops that fed our
            family. Every season brought a new challenge and a fresh opportunity
            to learn, and over time, I began to see farming as both a duty and a
            celebration. My journey in farming has always been about more than
            just producing food. It is a way for me to connect with the earth
            and to honor the traditions of my ancestors. I have a small plot of
            land where I grow vegetables and herbs, and I treat each plant as a
            cherished guest. I take time to tend to my garden, ensuring that
            every seed is given the chance to grow strong and healthy. I believe
            that nature provides in its own time, and all I can do is nurture it
            with patience and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#315D0D]">
              The Roots of Passion
            </h3>
            <p>
              Sita Devi’s journey into farming began in the heart of her
              family’s ancestral land, where she grew up surrounded by fields of
              golden crops. Watching her parents nurture the soil with care, she
              developed a deep-rooted passion for agriculture and the traditions
              that sustain it.
            </p>
            <p>
              Determined to make farming more rewarding for her community, she
              embraced organic methods and traditional seed preservation. By
              blending age-old wisdom with eco-friendly techniques, she has
              transformed her small farm into a model of sustainable
              agriculture, inspiring others to follow her path.
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
            Beyond her own farm, Sita Devi is passionate about empowering women
            in agriculture. She regularly organizes training sessions where she
            teaches organic farming techniques and financial independence to
            local women. Her efforts have helped many start their own
            small-scale farms, creating a ripple effect of self-sufficiency in
            her village.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-[#315D0D]">The Life </h3>
          <p>
            In my daily work, I find comfort in the quiet moments early in the
            morning, when the first light touches the fields and everything
            feels fresh. I spend these moments reflecting on my day ahead and
            feeling grateful for the simple gifts of life—a bountiful harvest,
            the sound of birds in the trees, and the satisfaction of seeing my
            hard work blossom into life. I have learned to embrace the small
            joys, like the scent of earth after rain and the laughter shared
            with neighbors during busy harvest days. One of my greatest joys is
            sharing the fruits of my labor with others. When people come to our
            farm or buy our produce, I feel a deep sense of pride knowing that
            the food on their tables is grown with love and care. It is a
            reminder that even a small patch of land can bring people together
            and create a community bound by the love of nature. I am honored to
            be a part of this journey from खेत to Kitchen, where every crop I
            nurture helps to build stronger families and communities—one family
            at a time. Through my work, I hope to inspire others to reconnect
            with nature and appreciate the simple, enduring beauty of farm life.
          </p>
        </div>

        <div className="relative h-80 mt-12">
          <Image
            src="/sita_devi1.png"
            alt="Panoramic view of John's farm"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-lg"></div>
          <p className="absolute bottom-6 left-6 text-white text-lg font-semibold">
            Sita Devi&#39;s Family{" "}
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
