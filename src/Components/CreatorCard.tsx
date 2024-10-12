import pizza from "../../assets/pizzaBanner.png";

const CreatorCard = (creatorData) => {
  return (
    <div className="w-[20vw] h-[40vh] p-4 flex flex-col rounded-lg shadow-md">
      <img src={pizza} alt="" className="rounded-xl" />
      <p className="text-center py-4">
        Top {Math.round(Math.random() * 100) / 100} %
      </p>
    </div>
  );
};

export default CreatorCard;
