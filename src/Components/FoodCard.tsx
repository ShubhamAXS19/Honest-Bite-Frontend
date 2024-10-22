import pizzaSlice from "../../public/assets/pizza.png";
import applePie from "../../public/assets/apple-pie.png";
import bagel from "../../public/assets/bagel.png";
import bhelpuri from "../../public/assets/bhelpuri.png";
import choleBhature from "../../public/assets/chole-bhature.png";
import fafafel from "../../public/assets/fafafel.png";
import paneerTikka from "../../public/assets/paneer-tikka.png";
import pasta from "../../public/assets/pasta.png";
import IdliSambhar from "../../public/assets/idli-with-sambar.png";
import ragda from "../../public/assets/ragda.png";

const icons = [
  { src: pizzaSlice, name: "Pizza" },
  { src: applePie, name: "Apple Pie" },
  { src: bagel, name: "Bagel" },
  { src: bhelpuri, name: "Bhel Puri" },
  { src: choleBhature, name: "Chole Bhature" },
  { src: IdliSambhar, name: "Idli Sambhar" },
  { src: fafafel, name: "Falafel" },
  { src: ragda, name: "Ragda Pattice" },
  { src: paneerTikka, name: "Paneer Tikka" },
  { src: pasta, name: "Pasta" },
];

const FoodCard = () => {
  return (
    <div className="w-full px-4 py-6 md:px-6 lg:px-8">
      {/* Main container */}
      <div className="relative">
        {/* Gradient fade effect for scroll indication */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden"></div>

        {/* Scrollable container */}
        <div className="overflow-x-auto pb-4">
          {/* Flex container */}
          <div className="flex flex-nowrap gap-3 md:gap-5">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex-none group cursor-pointer w-24 sm:w-30 md:w-40 lg:w-48 xl:w-56"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className="w-full h-20 sm:h-28 md:h-32 lg:h-36 xl:h-40 object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                </div>
                <p className="mt-2 text-center text-sm sm:text-base font-medium text-gray-800 group-hover:text-gray-900">
                  {icon.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator for mobile */}
      <div className="flex justify-center mt-2 md:hidden">
        <div className="h-1 w-16 rounded-full bg-gray-200">
          <div className="h-full w-8 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

<div className="overflow-x-auto mx-4 my-2 py-2">
  <FoodCard />
</div>;
