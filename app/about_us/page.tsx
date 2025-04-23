import {
  Leaf,
  Sprout,
  TractorIcon as Farm,
  ShoppingBasket,
  Heart,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: "url('/farmbground.png')" }}
      />

      {/* Decorative elements */}
      <div className="absolute -left-16 top-20 w-64 h-64 rounded-full bg-green-100 opacity-30 blur-3xl z-0"></div>
      <div className="absolute -right-16 bottom-20 w-64 h-64 rounded-full bg-green-100 opacity-30 blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with decorative elements */}
        <div className="flex items-center justify-center mb-12">
          <Leaf className="text-[#315D0D] h-8 w-8 mr-3 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#315D0D] relative">
            About Us
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#315D0D]/30 rounded-full"></span>
          </h1>
          <Leaf className="text-[#315D0D] h-8 w-8 ml-3 animate-pulse" />
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-start mb-6">
                <Sprout className="text-[#315D0D] h-8 w-8 mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  At{" "}
                  <span className="font-semibold text-[#315D0D]">
                    खेत to Kitchen
                  </span>
                  , we believe that food is more than just a necessity—
                  it&apos;s a story, a connection, and a way to build a
                  stronger, more sustainable community. Our mission is simple
                  yet profound: to bring fresh, naturally grown farm produce
                  directly to your kitchen while uplifting the hardworking
                  farmers who dedicate their lives to cultivating the land.
                </p>
              </div>

              <div className="flex items-start mb-6">
                <Farm className="text-[#315D0D] h-8 w-8 mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  In today&apos;s world, the gap between consumers and farmers
                  continues to widen. Supermarket shelves are stocked with
                  produce that has traveled thousands of miles, often treated
                  with chemicals to maintain freshness. Meanwhile, local farmers
                  struggle to receive fair prices for their work.{" "}
                  <span className="font-semibold text-[#315D0D]">
                    खेत to Kitchen
                  </span>{" "}
                  was born to change this—to bring people closer to their food
                  and the hands that grow it.
                </p>
              </div>

              <div className="flex items-start mb-6">
                <ShoppingBasket className="text-[#315D0D] h-8 w-8 mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  We connect you directly with farmers, offering fresh, local
                  produce while ensuring fair compensation for those who grow
                  it. Our platform not only provides high-quality, chemical-free
                  food but also fosters a community where consumers can learn
                  about and support the farmers who make it all possible.
                </p>
              </div>

              <div className="flex items-start">
                <Heart className="text-[#315D0D] h-8 w-8 mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  Every choice you make has an impact. By choosing{" "}
                  <span className="font-semibold text-[#315D0D]">
                    खेत to Kitchen
                  </span>
                  , you&apos;re not just buying food—you&apos;re supporting
                  livelihoods, encouraging sustainability, and becoming part of
                  a movement that values authenticity, care, and trust.
                  Together, we can create a future where farmers and consumers
                  thrive, one family at a time.
                </p>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-10 text-center">
              <button className="bg-[#315D0D] hover:bg-[#3e7511] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
                Join Our Community
              </button>
            </div>
          </div>

          {/* Stats or highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-[#315D0D] font-bold text-4xl mb-2">5+</div>
              <div className="text-gray-700">Local Farmers</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-[#315D0D] font-bold text-4xl mb-2">100+</div>
              <div className="text-gray-700">Happy Customers</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-[#315D0D] font-bold text-4xl mb-2">20+</div>
              <div className="text-gray-700">Product Varieties</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
