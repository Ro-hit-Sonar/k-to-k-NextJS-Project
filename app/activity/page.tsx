"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ActivityPage = () => {
  const activities = [
    {
      title: "Farm Tours",
      description:
        "Experience the beauty of farm life through our guided tours. Walk through lush fields, learn about farming techniques, and connect with nature.",
      image: "/farmtour2.webp",
      duration: "2-3 hours",
      groupSize: "Up to 20 people",
      price: "₹500 per person",
    },
    {
      title: "Teach our roots to Gen-z",
      description:
        "Introduce children to farming through hands-on activities. Let them experience the joy of growing food and understanding nature's rhythm.",
      image: "/farmtour1.webp",
      duration: "3-4 hours",
      groupSize: "Up to 15 children",
      price: "₹400 per child",
    },
    {
      title: "Pottery Workshop",
      description:
        "Rediscover the joy of creating with your hands. Learn traditional pottery techniques and craft beautiful pieces under expert guidance.",
      image: "/pot2.png",
      duration: "2 hours",
      groupSize: "Up to 10 people",
      price: "₹600 per person",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9f4]">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <Image
          src="/cover 03 1.png"
          alt="Organic Retreats"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold text-white text-center"
          >
            Organic Retreats
          </motion.h1>
        </div>
      </div>

      {/* Activities Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#315D0D] mb-4">
            Our Activities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the joy of connecting with nature through our diverse range
            of activities. From farm tours to pottery workshops, we offer
            experiences that educate, inspire, and create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-[#315D0D] mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{activity.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2" />
                      <span>{activity.groupSize}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>{activity.price}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#315D0D] hover:bg-[#264a0a] text-white">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="relative mb-8">
            <Image
              src="/pot3.png"
              alt="Pottery Workshop"
              width={613}
              height={95}
              className="mx-auto"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/activity">
              <Button className="bg-[#315D0D] hover:bg-[#264a0a] text-white px-8 py-6 text-lg">
                Limited Slots Available, Book Yours Now!
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
