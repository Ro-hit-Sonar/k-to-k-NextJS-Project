import Image from "next/image";

const ProductsGrid = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {[
            {
              id: 1,
              name: "Tomato",
              price: "₹24.00/Kg",
              img: "/tomato.png",
              category: "Vegetable",
            },
            {
              id: 2,
              name: "Carrot",
              price: "₹35.00/Kg",
              img: "/carrot.png",
              category: "Vegetable",
            },
            {
              id: 3,
              name: "Potato",
              price: "₹25.00/Kg",
              img: "/patato.png",
              category: "Vegetable",
            },
            {
              id: 4,
              name: "Okra (Bhindi)",
              price: "₹40.00/Kg",
              img: "/bhendi.png",
              category: "Vegetable",
            },
            {
              id: 5,
              name: "Cauliflower",
              price: "₹30.00/Kg",
              img: "/cauliflower.png",
              category: "Vegetable",
            },
            {
              id: 6,
              name: "Chili",
              price: "₹60.00/Kg",
              img: "/chilli.png",
              category: "Vegetable",
            },
            {
              id: 7,
              name: "Corn",
              price: "₹22.00/Kg",
              img: "/corn.png",
              category: "Grain",
            },
            {
              id: 8,
              name: "Cucumber",
              price: "₹20.00/Kg",
              img: "/cucumber.png",
              category: "Vegetable",
            },
            {
              id: 9,
              name: "Milk",
              price: "₹50.00/L",
              img: "/milk.png",
              category: "Dairy",
            },
            {
              id: 10,
              name: "Paneer",
              price: "₹200.00/Kg",
              img: "/paneer.png",
              category: "Dairy",
            },
            {
              id: 11,
              name: "Honey",
              price: "₹500.00/Kg ",
              img: "/honey.png",
              category: "Dairy",
            },
            {
              id: 12,
              name: "Rice",
              price: "₹60.00/Kg",
              img: "/rice.png",
              category: "Grain",
            },
          ].map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={420}
                  height={260}
                  className="object-cover object-center w-full h-full block"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
