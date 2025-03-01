import FeedBack from "@/components/FeedBack";

import Steps from "@/components/Steps";
import Testimonial from "@/components/Testimonial";
import Image from "next/image"; // Correct import
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center mt-16">
          <h1 className="text-[#315D0D] font-semibold text-7xl">
            खेत-to-Kitchen
          </h1>
        </div>
        <div>
          <p className="mt-8 text-center font-normal text-[#315D0D]">
            We connect farmers and families with love, freshness, and care.
            <br />
            Together, we make a difference, one family at a time.
          </p>
        </div>
        <div className=" flex justify-center">
          <Image
            src="/coverfinal.png"
            alt="cover"
            width={1200}
            height={683}
            className="mt-16 flex items-center justify-center mb-8"
          />
        </div>
        <div
          className="mt-16 h-[600px] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/farmbg.png')" }}
        >
          <div className="flex items-center justify-center ">
            <h3 className=" text-[#315D0D] text-4xl font-extralight">
              Get yours today Straight from our farm to your kitchen
            </h3>
          </div>
          <div className="flex justify-center ">
            <Link href={"/products"}>
              <Image
                src="/farmproducts.png"
                alt="cover"
                width={900}
                height={483}
                className="mt-16 flex items-center justify-center mb-8"
              />
            </Link>
          </div>
        </div>
        <div className=" ml-28 ">
          <h3 className=" text-[#315D0D] text-4xl font-semibold">
            How we work?{" "}
          </h3>
        </div>
        <div>
          <Steps />
        </div>
        <div className="flex justify-center">
          <h1 className="font-bold text-[#315D0D] text-5xl">
            Meet Our Farmers
          </h1>
        </div>
        <div className=" flex flex-wrap justify-center gap-8 mt-16">
          <Link href={"/ramesh_singh"} className="text-center">
            <Image
              src="/farmer1.png"
              alt="cover"
              width={275}
              height={275}
              className="mx-auto"
            />
            <p className="text-[#315D0D] hover:font-semibold mt-4">
              Ramesh Singh
            </p>
          </Link>
          <Link href={"/sita_devi"} className="text-center">
            <Image
              src="/farmer2.png"
              alt="cover"
              width={275}
              height={275}
              className="mx-auto"
            />
            <p className="text-[#315D0D] hover:font-semibold mt-4">Sita Devi</p>
          </Link>
          <Link href={"/hari_chand"} className="text-center">
            <Image
              src="/farmer3.png"
              alt="cover"
              width={275}
              height={275}
              className="mx-auto"
            />
            <p className="text-[#315D0D] hover:font-semibold mt-4">
              Hari Chand
            </p>
          </Link>
          <Link href={"/arvind_patel"} className="text-center">
            <Image
              src="/farmer5.png"
              alt="cover"
              width={275}
              height={275}
              className="mx-auto"
            />
            <p className="text-[#315D0D] hover:font-semibold mt-4 ">
              Arvind Patel
            </p>
          </Link>
        </div>
        <div>
          <p className=" flex justify-center text-[#315D0D] mt-16">
            {" "}
            & Many more to come !
          </p>
        </div>
        <div
          className="mt-12 h-[600px] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/farmbground.png')" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 ml-24 ">
            {/* Left Content Section */}
            <div className="md:w-1/2">
              <h1 className=" text-[#315D0D] text-4xl font-semibold mt-20">
                Check out farm Activities
              </h1>
              <p className="text-justify mt-4 text-gray-700 leading-relaxed mr-60">
                Experience the joy of farm life with our weekend activities!
                From guided farm tours and organic vegetable picking to hands-on
                sessions like pottery and cow milking, there’s something for
                everyone. Enjoy a peaceful escape from city life, breathe in the
                fresh air, and reconnect with nature. Whether you are here for
                fun or to learn, we promise a wholesome experience filled with
                warmth and memories. Join us this weekend and be a part of our
                farm family!
              </p>
              <Link href={"/activity"} className="text-blue-700">
                Click here to know more
              </Link>
            </div>

            {/* Right Single Image Section */}
            <div className="grid grid-cols-2 gap-4 mr-24">
              <Image
                src="/grouptour1.webp"
                alt="Activity 1"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <Image
                src="/grouptour2.webp"
                alt="Activity 2"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className=" flex flex-wrap justify-center text-xl text-[#315D0D]">
            {" "}
            Real stories, real experiences—hear from those who have connected
            with खेत to Kitchen!
          </h1>
          <Testimonial />
        </div>
        <div>
          <FeedBack />
        </div>
      </div>
    </>
  );
}
