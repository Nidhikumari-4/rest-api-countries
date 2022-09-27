import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Details = () => {
  const [mode, setMode] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(
    '<i class="far fa-sun"></i> Light Mode'
  );

  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  const goHomeBtn = () => navigate("/");

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

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white ">
      <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16 ">
        <div className="flex container mx-auto ">
          <h1 className="font-bold text-xl">Where in the world?</h1>
          <div className="ml-auto font-medium">
            <button
              onClick={() => toggleDarkMode()}
              dangerouslySetInnerHTML={{ __html: toggleBtn }}
            ></button>
          </div>
        </div>
      </div>
      <div className="flex container mx-auto mb-16">
        <button
          className="px-8 py-2 bg-white text-gray-600 shadow-md dark:bg-gray-700 dark:text-white rounded-lg"
          onClick={() => goHomeBtn()}
        >
          <i className="fa fa-arrow-left"></i> Back
        </button>
      </div>
      <div className="flex flex-row justify-center items-center">
        <img
          src={state.state.flags.png}
          className="w-1/3 flex justify-center items-center "
          alt={state.state.name.common}
        />
        <div className="  justify-center items-center pl-8 pt-8 ">
          <h2 className="font-bold text-2xl mb-8">{state.state.name.common}</h2>
          <div className="grid grid-cols-2 gap-x-20 gap-y-4">
            <p>
              Native Name:{" "}
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {state.state.name.common}
              </span>
            </p>
            <p>
              Population:{" "}
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {state.state.population}
              </span>
            </p>
            <p>
              Region:{" "}
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {state.state.region}
              </span>
            </p>
            <p>
              Sub Region:{" "}
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {state.state.subregion}
              </span>
            </p>
            <p>
              Capital:{" "}
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {state.state.capital}
              </span>
            </p>
            <p>
              Top Level Domain:{" "}
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {state.state.tld[0]}
              </span>
            </p>
            <p>
              Currencies:{" "}
              {/* {Object.keys(state.state.currencies).map((name) => (
              <span
                className="dark:text-gray-400 text-gray-700 text-sm"
                key={name}
              >
                {state.state.currencies.name[name]}
                {","}
              </span>
            ))} */}
            </p>
            <p>
              Languages:{" "}
              {Object.keys(state.state.languages).map((language) => (
                <span
                  className="dark:text-gray-400 text-gray-700 text-sm"
                  key={language}
                >
                  {state.state.languages[language]}
                  {","}
                </span>
              ))}
            </p>
          </div>
          <div className="flex mt-16">
            <p className="font-bold">Border Countries: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
