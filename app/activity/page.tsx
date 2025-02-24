import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div
        className=" h-[600px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/cover 03 1.png')" }}
      >
        <h1 className=" flex text-center justify-center font-extrabold pt-8  text-6xl text-[#315D0D] ">
          {" "}
          Organic Retreats
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center p-8 gap-16">
        <div className="flex-shrink-0 mr-8">
          <Image
            src="/farmtour2.webp"
            alt="Farm Tour"
            width={456}
            height={317}
            priority
          />
        </div>

        <div className="max-w-lg">
          <h1 className="text-3xl font-semibold mb-4 text-[#315D0D]">
            Farm Tours
          </h1>
          <p className="text-justify">
            There’s something special about stepping onto a farm and
            experiencing life beyond the city. Our farm tours offer a chance to
            slow down and connect with nature, where you can walk through lush
            fields, see how crops are grown, and learn about traditional and
            modern farming techniques. The scent of fresh earth, the sight of
            farmers at work, and the peaceful countryside air create an
            experience that is both refreshing and educational. These tours are
            perfect for families, nature lovers, and anyone curious about where
            their food comes from. You’ll get a firsthand look at the daily life
            of a farmer, meet the animals, and even try your hand at simple
            farming activities. Whether it’s picking fresh vegetables, feeding
            livestock, or just soaking in the rural charm, there’s something for
            everyone to enjoy. Join us for a weekend farm tour and discover the
            beauty of farm life.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center p-8 gap-16">
        <div className="max-w-lg">
          <h1 className="text-3xl font-semibold mb-4 text-[#315D0D]">
            Teach our roots to Gen-z{" "}
          </h1>
          <p className="text-justify">
            In today’s fast-paced digital world, many children grow up without
            ever seeing where their food truly comes from. Our initiative aims
            to bridge this gap by introducing kids to the beauty of
            farming—helping them understand the effort, patience, and care that
            go into growing the food on their plates. From planting seeds to
            watching crops flourish, every step in the process is a lesson in
            nature’s rhythm and resilience. Through hands-on activities, kids
            get to experience farm life up close—feeding animals, harvesting
            fresh produce, and learning about sustainable farming practices.
            These moments not only spark curiosity but also instill a sense of
            appreciation for the land and those who cultivate it. By
            reconnecting the next generation with their roots, we’re sowing the
            seeds for a future that values nature, hard work, and community.
            Let’s teach our kids where it all begins.
          </p>
        </div>
        <div className="flex-shrink-0 mr-8">
          <Image
            src="/farmtour1.webp"
            alt="Farm Tour"
            width={456}
            height={317}
            priority
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center p-8 gap-16">
        <div className="flex-shrink-0 mr-8 ">
          <Image
            src="/pot2.png"
            alt="Farm Tour"
            width={456}
            height={317}
            priority
          />
        </div>

        <div className="max-w-lg">
          <h1 className="text-3xl font-semibold mb-4 text-[#315D0D]">
            {" "}
            Pottery
          </h1>
          <p className="text-justify">
            In a world driven by technology, the joy of creating something with
            our hands is often forgotten. Our pottery workshop brings back this
            simple yet fulfilling experience, allowing you to shape clay into
            beautiful, handcrafted pieces. From molding the soft earth to
            watching it transform, every step in the process is a lesson in
            patience, creativity, and tradition. Through guided sessions,
            participants of all ages can explore the art of pottery—learning the
            techniques passed down through generations. The feel of the clay,
            the rhythm of the wheel, and the satisfaction of crafting something
            unique make this workshop a truly immersive experience. By engaging
            in this age-old craft, we reconnect with the essence of handmade
            artistry while appreciating the skill of rural potters. Come,
            rediscover the joy of working with your hands.
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center mb-8">
        <Image
          className="flex justify-center items-center mt-8"
          src="/pot3.png"
          alt="pot image"
          width={613}
          height={95}
          priority
        />
      </div>
      <div className=" flex justify-center items-center mt-8 mb-32">
        <Link href={"/activity"} className="text-blue-700">
          Limited Slots Available , Book Yours Now!
        </Link>
      </div>
    </>
  );
};

export default page;
