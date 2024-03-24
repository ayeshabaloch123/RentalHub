import React, { useState } from "react";
import search from "../assets/search icon.png";
import filter from "../assets/filter icon.png";
import locate from "../assets/location icon.png";

const hostelsData = [
  {
    name: 'Hostel A',
    location: 'New York',
    rating: 4.5,
  },
  {
    name: 'Hostel B',
    location: 'San Francisco',
    rating: 4.2,
  },
  {
    name: 'Hostel C',
    location: 'Los Angeles',
    rating: 4.8,
  },
  {
    name: 'Hostel D',
    location: 'Chicago',
    rating: 4.0,
  },
];


function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [filteredHostels, setFilteredHostels] = useState(hostelsData);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterHostels(value, selectedLocation);
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setSelectedLocation(value);
    filterHostels(searchTerm, value);
  };

  const filterHostels = (searchValue, locationValue) => {
    const filteredHostels = hostelsData.filter((hostel) =>
      (hostel.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      hostel.rating.toString().includes(searchValue)) &&
      (locationValue === 'All' || hostel.location === locationValue)
    );
    setFilteredHostels(filteredHostels);
  };

  const locations = ['All', 'New York', 'San Francisco', 'Los Angeles', 'Chicago'];


  return (
    <div > 
      <div className="flex items-center justify-center md:items-start md:justify-start space-x-[1.33vw] mt-[5.866vw] md:mt-[2.7vw] ">
        <div className="relative">
          <button>
            <img
              src={search}
              alt="search"
              className="absolute z-10 top-[2.133vw] left-[1.866vw] bottom-[2.133vw] md:top-[1.1vw] md:bottom-[18px] md:left-[15px] w-[15px] h-[15px] md:w-[1.9vw] md:h-[1.6vw]"
            />
          </button>
          <button>
            <img
              src={filter}
              alt="filter"
              className="absolute z-10 top-[1.6vw] right-[1.6vw] bottom-[1.6vw] md:top-[0.7vw] md:right-[12px] md:bottom-[12px] md:w-[2.5vw] md:h-[2.6vw] w-[5.6vw] h-[5.33vw]"
            />
          </button>
          <input
            type="text" value={searchTerm} onChange={handleInputChange}
            className="bg-[#F2F6FF] h-[8.266vw] w-[58.4vw] md:h-[3.9vw] md:w-[40vw] rounded-[0.533vw] md:rounded-xl focus:outline-none px-8 text-xs md:text-lg md:px-16"
          />
          {/* <ul>
        {filteredHostels.map((hostel) => (
          <li key={hostel.name}>
            {hostel.name}, {hostel.location} ({hostel.rating})
          </li>
        ))}
      </ul> */}
        </div>
        <div className="relative">
          <button>
            <img
              src={locate}
              alt="location"
              className="absolute z-10 md:top-[1.1vw] md:left-[1vw] md:bottom-[16px] top-[2.666vw] left-[1.333vw] bottom-[2.4vw] w-[1.866vw] h-[3.2vw] md:w-[1.04vw] md:h-[1.6vw]"
            />
          </button>
          <select value={selectedLocation} onChange={handleLocationChange} className="bg-[#F2F6FF] h-[8.2666vw] rounded-[0.533vw] w-[25.6vw] text-[2.13vw] md:text-[1.3vw] md:w-[15vw] md:h-[3.9vw] md:rounded-xl focus:outline-none pl-[4.533vw] lg:pl-[2.54vw]">
          {locations.map((location) => (
          <option key={location} value={location}>{location}</option>
        ))}
            {/* <option value="pak">Pakistan</option>
            <option value="in">India</option>
            <option value="ban">Bangladesh</option>
            <option value="uae">UAE</option> */}
          </select>
        </div>
        
      </div>
      
    </div>
   
    
  );
}

export default Search;
