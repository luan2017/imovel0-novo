import { NextPage } from "next";
import Image from "next/image";
import BannerImage from 'assets/casal-feliz.jpg';

const Banner: NextPage = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        alt="Imagem de capa"
        src={BannerImage}
        fill
        className="object-cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg bg-white">
          Não consegue encontrar seu imóvel? Ótimo.
        </p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          TEMOS A SOLUÇÃO PRA VOCÊ
        </button>
      </div>
    </div>
  );
};

// export component
export default Banner;
