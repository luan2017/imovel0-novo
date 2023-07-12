import { Banner, Header } from "@components/index";
import type { NextPage } from "next";
import Head from "next/head";

import MediumCard from "@components/MediumCard";
import SmallCard from "@components/SmallCard";
import LargeCard from "@components/LargeCard";
import Footer from '@components/Footer';

const Home: NextPage<{cardsData: any, exploreData: any}> = ({ cardsData, exploreData }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header username="Bem-vindo Anderson" placeholder={""} />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            Explore Locais Próximos
          </h2>

          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">More Onde Quiser</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="Os Melhores Imóveis"
          description="Listas selecionadas pelo Imóvel Certo"
          buttonText="Inspire-se"
        />

      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  /* const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then((res) =>
    res.json()
  ); */

  const exploreData = [
    {
      img: "https://links.papareact.com/5j2",
      location: "Parque Alvorada",
      distance: "15-minutos de carro",
    },
    {
      img: "https://links.papareact.com/1to",
      location: "Eco Ville Dourados",
      distance: "15-minutos de carro",
    },
    {
      img: "https://links.papareact.com/40m",
      location: "Porto Madeiro",
      distance: "15-minutos de carro",
    },
    {
      img: "https://links.papareact.com/msp",
      location: "Porto Unique",
      distance: "15-minutos de carro",
    },
    {
      img: "https://links.papareact.com/2k3",
      location: "Hequitares",
      distance: "15-minutos de carro",
    },
    {
      img: "https://links.papareact.com/ynx",
      location: "Centro",
      distance: "15-minutos de carro",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Parque das Nações",
      distance: "15-minutos de carro",
    },
    {
      img: "https://links.papareact.com/41m",
      location: "Parque dos Coqueiros",
      distance: "15-minutos de carro",
    },
  ];

  const cardsData = [
    { img: "https://links.papareact.com/2io", title: "Casas ao ar livre" },
    { img: "https://links.papareact.com/q7j", title: "Estadias únicas" },
    { img: "https://links.papareact.com/s03", title: "Casas rústicas" },
    { img: "https://links.papareact.com/8ix", title: "Permite animais de estimação" },
  ];

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

export default Home;
