"use client";

import FeedBack from "@/components/FeedBack";
import Steps from "@/components/Steps";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mt-16"
        >
          <h1 className="text-[#315D0D] font-bold text-4xl md:text-7xl text-center">
            खेत-to-Kitchen
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mt-8 text-center font-normal text-[#315D0D] text-lg md:text-xl">
            We connect farmers and families with love, freshness, and care.
            <br />
            Together, we make a difference, one family at a time.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Image
            src="/coverfinal.png"
            alt="cover"
            width={1200}
            height={683}
            className="mt-16 w-full max-w-4xl h-auto object-contain"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="bg-[#315D0D] bg-opacity-10 py-16 px-4 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-[#315D0D] text-3xl md:text-4xl font-semibold mb-4">
                Get Yours Today
              </h3>
              <p className="text-[#315D0D] text-lg md:text-xl">
                Straight from our farm to your kitchen
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/products" className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/farmproducts.png"
                    alt="Our Products"
                    width={900}
                    height={483}
                    className="w-full max-w-4xl h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center mt-4">
                  <span className="inline-block bg-[#315D0D] text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-[#315D0D]/90 transition-colors duration-300">
                    Explore Our Products
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 px-4 md:px-0"
        >
          <h3 className="text-[#315D0D] text-3xl md:text-4xl font-semibold">
            How we work?
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Steps />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16"
        >
          <h1 className="font-bold text-[#315D0D] text-3xl md:text-5xl text-center mb-12">
            Meet Our Farmers
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {[
              {
                name: "Ramesh Singh",
                image: "/farmer1.png",
                link: "/ramesh_singh",
              },
              { name: "Sita Devi", image: "/farmer2.png", link: "/sita_devi" },
              {
                name: "Hari Chand",
                image: "/farmer3.png",
                link: "/hari_chand",
              },
              {
                name: "Arvind Patel",
                image: "/farmer5.png",
                link: "/arvind_patel",
              },
            ].map((farmer) => (
              <Link
                key={farmer.name}
                href={farmer.link}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-full">
                  <Image
                    src={farmer.image}
                    alt={farmer.name}
                    width={275}
                    height={275}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-[#315D0D] group-hover:font-semibold mt-4 text-lg">
                  {farmer.name}
                </p>
              </Link>
            ))}
          </div>
          <p className="text-center text-[#315D0D] mt-16 text-lg">
            & Many more to come!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="mt-16 bg-[#315D0D] bg-opacity-10 py-16 px-4 rounded-lg"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-[#315D0D] text-3xl md:text-4xl font-semibold mb-6">
                  Check out Farm Activities
                </h1>
                <p className="text-[#315D0D] text-lg leading-relaxed mb-8">
                  Experience the joy of farm life with our weekend activities!
                  From guided farm tours and organic vegetable picking to
                  hands-on sessions like pottery and cow milking, there&apos;s
                  something for everyone. Enjoy a peaceful escape from city
                  life, breathe in the fresh air, and reconnect with nature.
                </p>
                <Link
                  href="/activity"
                  className="inline-block bg-[#315D0D] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#315D0D]/90 transition-colors duration-300"
                >
                  Explore Activities
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/grouptour1.webp"
                  alt="Activity 1"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/grouptour2.webp"
                  alt="Activity 2"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="mt-16"
        >
          <h1 className="text-center text-xl md:text-2xl text-[#315D0D] mb-8">
            Real stories, real experiences—hear from those who have connected
            with खेत to Kitchen!
          </h1>
          <Testimonial />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          <FeedBack />
        </motion.div>
      </div>
    </div>
  );
}
