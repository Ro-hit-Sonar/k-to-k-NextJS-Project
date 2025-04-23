"use client";

import React from "react";
import Image from "next/image";

interface FarmerProfileProps {
  name: string;
  mainImage: string;
  secondaryImage: string;
  secondaryImageCaption: string;
  quote: string;
  quoteAuthor: string;
  bio: string;
  specialties: string[];
  communityImpact: string;
  lifeStory: string;
}

const FarmerProfile = ({
  name,
  mainImage,
  secondaryImage,
  secondaryImageCaption,
  quote,
  quoteAuthor,
  bio,
  specialties,
  communityImpact,
  lifeStory,
}: FarmerProfileProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="relative h-[500px] mb-8">
          <Image
            src={mainImage}
            alt={`${name} in the field`}
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
            {name}
          </h1>
        </div>

        {/* Bio Section */}
        <div className="bg-amber-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Sustainable Farming Enthusiast
          </h2>
          <p className="text-amber-900 leading-relaxed">{bio}</p>
        </div>

        {/* Farm Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#315D0D]">
              The Roots of Passion
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {name}&apos;s journey in farming began in the heart of their family&apos;s
              ancestral land, where they learned the delicate balance between
              tradition and innovation. Their approach combines time-honored
              methods with sustainable practices, creating a farm that thrives
              in harmony with nature.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#315D0D]">
              Farm Specialties
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {specialties.map((specialty, index) => (
                <li key={index}>{specialty}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Community Impact */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-[#315D0D] mb-4">
            Community Impact
          </h3>
          <p className="text-green-900 leading-relaxed">{communityImpact}</p>
        </div>

        {/* Life Story */}
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-[#315D0D]">The Life</h3>
          <p className="text-gray-700 leading-relaxed">{lifeStory}</p>
        </div>

        {/* Secondary Image */}
        <div className="relative h-[400px] mt-12">
          <Image
            src={secondaryImage}
            alt={secondaryImageCaption}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 rounded-lg"></div>
          <p className="absolute bottom-6 left-6 text-white text-lg font-semibold">
            {secondaryImageCaption}
          </p>
        </div>

        {/* Quote */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <blockquote className="text-lg italic text-gray-700">
            &quot;{quote}&quot;
          </blockquote>
          <p className="mt-4 text-right font-semibold text-[#315D0D]">
            - {quoteAuthor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
