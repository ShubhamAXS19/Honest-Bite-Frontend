import pizzaSlice from "../../assets/pizza.png";
import applePie from "../../assets/apple-pie.png";
import bagel from "../../assets/bagel.png";
import bhelpuri from "../../assets/bhelpuri.png";
import choleBhature from "../../assets/chole-bhature.png";
import fafafel from "../../assets/fafafel.png";
import paneerTikka from "../../assets/paneer-tikka.png";
import pasta from "../../assets/pasta.png";
import IdliSambhar from "../../assets/idli-with-sambar.png";
import ragda from "../../assets/ragda.png";
import samosaJalebi from "../../assets/samosa-jalebi.png";
// Update the icons array to include both image and name
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
  // { src: samosaJalebi, name: "Samosa and Jalebi" },
];

const FoodCard = () => {
  return (
    <div className="" style={{ height: "auto", width: "auto" }}>
      <div className="inset-0 flex justify-center items-center">
        {/* Remove the aspect ratio classes */}
        <div className="flex gap-10 items-center justify-between w-full h-full">
          {icons.map((icon, index) => (
            <div key={index} className="text-center">
              {/* Apply fixed width and height to the image */}
              <img
                src={icon.src}
                alt={icon.name}
                className="object-cover"
                style={{ width: "140px", height: "120px" }}
              />
              <p className="mt-2">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
