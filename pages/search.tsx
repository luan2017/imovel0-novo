import Footer from '@components/Footer';
import Header from '@components/Header';
import { useRouter } from 'next/router';
import React from 'react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import InfoCard from '@components/InfoCard';
import { SearchProps } from '../types/search';
import Map from '@components/Map';
// import pt from 'date-fns/locales/pt';


const Search: React.FC<{searchResults: Array<SearchProps>}> = ({searchResults}) => {
    const router = useRouter();
    const {location, startDate, endDate, numberOfGuests} = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy", { locale: pt });
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy", { locale: pt });
    const range = `${formattedStartDate} - ${formattedEndDate}`;


  return (
    <div>
        <Header username='Busca' placeholder={`${location} | ${range} | ${numberOfGuests} pessoas`} />
        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className="text-xs">300+ estadias - {range} - para {numberOfGuests} pessoas </p>
                <h1 className="text-3x1 font-semibold mt-2 mb-6">Fica em {location}</h1>
                <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="px-4 ру-2 border
                    rounded-full cursor-pointer
                    hover: shadow-lg active:scale-95
                    active:bg-gray-100 transition
                    transform duration-100 ease-out">
                    Cancelamento Flexível
                    </p>

                    <p className="px-4 ру-2 border
                    rounded-full cursor-pointer
                    hover: shadow-lg active:scale-95
                    active:bg-gray-100 transition
                    transform duration-100 ease-out">
                    Tipo de Lugar
                    </p>

                    <p className="px-4 ру-2 border
                    rounded-full cursor-pointer
                    hover: shadow-lg active:scale-95
                    active:bg-gray-100 transition
                    transform duration-100 ease-out">
                    Preço
                    </p>

                    <p className="px-4 ру-2 border
                    rounded-full cursor-pointer
                    hover: shadow-lg active:scale-95
                    active:bg-gray-100 transition
                    transform duration-100 ease-out">
                    Quartos e Camas
                    </p>

                    <p className="px-4 ру-2 border
                    rounded-full cursor-pointer
                    hover: shadow-lg active:scale-95
                    active:bg-gray-100 transition
                    transform duration-100 ease-out">
                    Mais Filtros
                    </p>
                </div>

                <div className='flex flex-col'>
                    {searchResults.map(({img, description, lat, location, long, price, star, title, total}) => (
                        <InfoCard 
                            key={img}
                            img={img} 
                            description={description}
                            lat={lat}
                            location={location}
                            long={long}
                            price={price}
                            star={star}
                            title={title}
                            total={total}
                        />
                    ))}
                </div>

            </section>

            {/* hidden xl:inline-flex */}
            <section className='min-w-[600px]'> 
                <Map searchResults={searchResults} />
            </section>
        </main>
        <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/GE5E")
    .then(res => res.json());


    return {
        props: {
            searchResults,
        },
    };
}