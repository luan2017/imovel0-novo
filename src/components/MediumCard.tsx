import { NextPage } from "next";
import Image from "next/image";

const MediumCard: NextPage<{ img: string, title: string }> = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image className="rounded-xl" alt="Moradias" src={img} fill />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
