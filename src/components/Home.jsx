import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThumbDetail from "../components/ThumbDetail";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [mode, setMode] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(
    '<i class="far fa-sun"></i> Light Mode'
  );

  const getCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const toggleDarkMode = () => {
    if (mode) {
      document.documentElement.classList.add("dark");
      setToggleBtn('<i class="fas fa-moon"></i> Dark Mode');
      setMode((current) => (current = !current));
    }
    if (!mode) {
      document.documentElement.classList.remove("dark");
      setToggleBtn('<i class="far fa-sun"></i> Light Mode');
      setMode((current) => (current = !current));
    }
  };

  const searchCountry = async (term) => {
    if (term.length < 3 || term === "") return;
    const res = await fetch(`https://restcountries.com/v3.1/name/${term}`);
    const data = await res.json();
    setCountries(data);
  };

  const filterByRegion = async (region) => {
    if (region === " ") return;
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();
    setCountries(data);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white ">
      <div className=" shadow-md py-6 px-6 bg-white dark:bg-gray-700 dark:text-white mb-16 ">
        <div className="flex container mx-auto ">
          <h1 className="font-bold text-xl cursor-pointer">
            Where in the world?
          </h1>
          <div className="ml-auto font-medium">
            <button
              onClick={() => toggleDarkMode()}
              dangerouslySetInnerHTML={{ __html: toggleBtn }}
            ></button>
          </div>
        </div>
      </div>
      <div className="flex container mx-auto mb-16">
        <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700"
          onChange={(term) => searchCountry(term.target.value)}
        />
        <select
          className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700"
          onChange={(region) => filterByRegion(region.target.value)}
        >
          <option value=" ">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="container grid grid-cols-4 gap-10 mx-auto ">
        {countries.map((country, index) => (
          <Link to={"/details"} state={{ state: country }} key={index}>
            <ThumbDetail
              title={country.name.common}
              image_url={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
