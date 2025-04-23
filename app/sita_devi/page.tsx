"use client";

import React from "react";
import FarmerProfile from "@/components/FarmerProfile";

const SitaDeviPage = () => {
  const farmerData = {
    name: "Sita Devi",
    mainImage: "/sita_devi2.png",
    secondaryImage: "/sita_devi1.png",
    secondaryImageCaption: "Sita Devi's Family",
    quote:
      "We are super proud of my super mom, our family welcomes you to our farm.",
    quoteAuthor: "Sita Devi's Family",
    bio: `Hello, my name is Sita Devi. I grew up in a small village where life was simple and every day was a lesson in nature's ways. I learned the art of farming from my mother, who taught me how to listen to the land and respect its rhythm. From an early age, I helped in the fields, watching the seeds transform into the crops that fed our family. Every season brought a new challenge and a fresh opportunity to learn, and over time, I began to see farming as both a duty and a celebration. My journey in farming has always been about more than just producing food. It is a way for me to connect with the earth and to honor the traditions of my ancestors. I have a small plot of land where I grow vegetables and herbs, and I treat each plant as a cherished guest. I take time to tend to my garden, ensuring that every seed is given the chance to grow strong and healthy. I believe that nature provides in its own time, and all I can do is nurture it with patience and care.`,
    specialties: [
      "Organic heirloom tomatoes",
      "Sweet corn varieties",
      "Assorted organic berries",
      "Free-range chicken eggs",
      "Local wildflower honey",
    ],
    communityImpact: `Beyond her own farm, Sita Devi is passionate about empowering women in agriculture. She regularly organizes training sessions where she teaches organic farming techniques and financial independence to local women. Her efforts have helped many start their own small-scale farms, creating a ripple effect of self-sufficiency in her village.`,
    lifeStory: `In my daily work, I find comfort in the quiet moments early in the morning, when the first light touches the fields and everything feels fresh. I spend these moments reflecting on my day ahead and feeling grateful for the simple gifts of life—a bountiful harvest, the sound of birds in the trees, and the satisfaction of seeing my hard work blossom into life. I have learned to embrace the small joys, like the scent of earth after rain and the laughter shared with neighbors during busy harvest days. One of my greatest joys is sharing the fruits of my labor with others. When people come to our farm or buy our produce, I feel a deep sense of pride knowing that the food on their tables is grown with love and care. It is a reminder that even a small patch of land can bring people together and create a community bound by the love of nature. I am honored to be a part of this journey from खेत to Kitchen, where every crop I nurture helps to build stronger families and communities—one family at a time. Through my work, I hope to inspire others to reconnect with nature and appreciate the simple, enduring beauty of farm life.`,
  };

  return <FarmerProfile {...farmerData} />;
};

export default SitaDeviPage;
