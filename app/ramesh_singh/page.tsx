"use client";

import React from "react";
import FarmerProfile from "@/components/FarmerProfile";

const RameshSinghPage = () => {
  const farmerData = {
    name: "Ramesh Singh",
    mainImage: "/ramesh1.png",
    secondaryImage: "/ramesh2.png",
    secondaryImageCaption: "Ramesh Singh's Granddaughter",
    quote:
      "Dadu is my hero. Every morning, he's up before the sun, and yet he still has time to tell us stories by the fire. His hands may be rough, but his heart is the softest. We're so proud of him—and we can't wait for you to visit our farm.",
    quoteAuthor: "Ramesh Singh's Granddaughter",
    bio: `Hello, my name is Ramesh Singh. I grew up with the land as my closest friend, a bond that has grown with me through the years. I was born in a small village where farming was not just a job but a way of life passed down through generations. From a young age, I learned the art of sowing seeds, nurturing them, and patiently waiting for the harvest. I still remember the early mornings, walking through dew-kissed fields, feeling the earth beneath my feet, and listening to the soft whispers of the wind as it carried the promise of a new day. Every season brings its own story to my farm. Spring is when hope is planted; I watch as tiny green sprouts break through the soil. Summer is a time of hard work, with the sun shining down and the earth growing warm under my care. In the cool embrace of autumn, I see my crops ripen and feel a deep satisfaction, knowing that nature has once again blessed my efforts. And even in winter, when the fields rest, there is a quiet peace that reminds me of the cycles of life and growth.`,
    specialties: [
      "Organic heirloom tomatoes",
      "Sweet corn varieties",
      "Assorted organic berries",
      "Free-range chicken eggs",
      "Local wildflower honey",
    ],
    communityImpact: `Ramesh Singh is a strong advocate for farmer collaboration. He has played a key role in forming a local farming collective where farmers exchange resources, ideas, and best practices. By fostering a sense of unity and shared learning, he has helped small-scale farmers achieve better yields and economic stability.`,
    lifeStory: `Farming is not always easy, but it is always honest. I have learned to work with nature rather than against it. I rely on traditional methods that my father taught me, mixed with a few new ideas I have picked up along the way. I use simple, natural techniques to keep my soil healthy and my crops thriving. My goal has always been to grow food that is not only fresh but also full of the natural goodness that comes from a well-tended field. One of the best parts of my journey is sharing my work with others. When I see people enjoying the fruits of my labor, I feel a connection that goes beyond just selling a product. It feels like I am sharing a part of my life, my daily routine, and my love for the earth. Every vegetable I grow carries with it the story of the land, the care of my family, and the spirit of a simple life. I am proud to be a part of this journey from खेत to Kitchen, where the food I nurture reaches tables where families gather. I hope that as you enjoy the produce, you also share in the joy of a life spent in tune with nature—a life that is simple, honest, and full of quiet rewards.`,
  };

  return <FarmerProfile {...farmerData} />;
};

export default RameshSinghPage;
