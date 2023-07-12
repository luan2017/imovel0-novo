// import NextPage generic type
import { NextPage } from "next";
import Image from "next/image";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";
import LogoWhite from '../assets/logo-header.png';

// Props interface
// with username set to string
interface Props {
  username: string;
  placeholder: string;
}

// Defining NextPage as
// type for Name component
// and defining type for props
const Header: NextPage<Props> = (props) => {
  // using destructuring to get username
  const { username, placeholder } = props;
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState<number | string>(1);
  const router = useRouter();

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetInput = () => { 
    setSearchInput('');	
  }

  const handleSearch = () => {
     router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      }
     })
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }


  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          onClick={() => router.push('/')}
          src={LogoWhite}
          alt="Imóvel certo"
          fill
          className="object-contain object-left min-h-fit"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Inicie sua busca"}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500 ">
        <p className="hidden md:inline">Divulgue seu imóvel</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      
      {searchInput && (
        <>
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker 
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
           />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Número de pessoas</h2>

            <UserIcon  className="h-5"/>
            <input 
              value={numberOfGuests} 
              onChange={(e) => setNumberOfGuests(e.target.value)} 
              min={1}
              type="number" 
              className="w-12 pl-2 text-lg outline-none text-red-400"/>
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancelar</button>
            <button onClick={handleSearch} className="flex-grow text-red-400">Buscar</button>
          </div>

        </div>
        </>
      )
      }
    </header>
  );
};

// export component
export default Header;
