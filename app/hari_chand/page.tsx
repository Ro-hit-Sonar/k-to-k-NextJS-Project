"use client";

import React from "react";
import FarmerProfile from "@/components/FarmerProfile";

const HariChandPage = () => {
  const farmerData = {
    name: "Hari Chand",
    mainImage: "/hari_chand1.png",
    secondaryImage: "/hari_chand2.png",
    secondaryImageCaption: "Hari Chand's Grandchildren",
    quote:
      "He may look serious in the photo, but trust us—he's the gentlest soul we know. Dadaji teaches us how to listen to the land and respect the cows like family. We're proud to call this farm our second home, and we'd love to share it with you.",
    quoteAuthor: "Hari Chand's Grandchildren",
    bio: `Hello, I am Hari Chand, a third-generation farmer from a small village in Punjab. My grandfather taught me the importance of respecting the land and understanding its needs. I believe in sustainable farming practices that have been passed down through generations, while also embracing modern techniques that help us grow better crops. My farm is my life's work, and I take pride in every seed that sprouts and every harvest that feeds our community.`,
    specialties: [
      "Organic wheat",
      "Basmati rice",
      "Mustard",
      "Sugarcane",
      "Seasonal vegetables",
    ],
    communityImpact: `Hari Chand has been instrumental in forming a cooperative of local farmers, helping them access better markets and fair prices for their produce. He regularly hosts workshops on sustainable farming practices and has helped many young farmers start their journey in agriculture. His farm serves as a learning center for the community, demonstrating the balance between traditional wisdom and modern farming techniques.`,
    lifeStory: `My journey in farming began when I was just a child, following my grandfather through the fields. He would tell me stories about how each crop has its own personality and needs. I remember him saying, "The land speaks to those who listen." These early lessons shaped my approach to farming. Today, I continue his legacy by maintaining the same respect for nature while incorporating new methods that help us grow better crops. Every morning, I walk through my fields, checking on each crop, listening to what they need. It's not just about growing food; it's about nurturing life and sustaining our community. I take pride in knowing that the wheat and rice we grow feeds hundreds of families, and that our farming practices ensure this land will continue to be productive for generations to come.`,
  };

  return <FarmerProfile {...farmerData} />;
};

export default HariChandPage;
