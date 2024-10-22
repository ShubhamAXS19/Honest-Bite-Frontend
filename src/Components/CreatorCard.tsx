import pizza from "../../public/assets/pizzaBanner.png";
import { CreatorCardProps } from "../types/user";

const CreatorCard: React.FC<CreatorCardProps> = () => {
  return (
    <div className="w-[15vw] h-[30vh] p-4 flex flex-col rounded-lg shadow-md">
      <img src={pizza} alt="" className="rounded-xl" />
      <p className="text-center py-4">
        Top {Math.round(Math.random() * 100) / 100} %
      </p>
    </div>
  );
};

export default CreatorCard;
