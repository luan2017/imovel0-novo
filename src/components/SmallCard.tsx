import { NextPage } from "next";
import Image from "next/image";

const SmallCard: NextPage<{ img: string, location: string, distance: string }> = ({ img, location, distance }) => {
  return (
    <div className="flex item-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image alt="Locais" src={img} fill className="rounded-lg" />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
