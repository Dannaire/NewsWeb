import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]); // add filteredResults state
  const url = "/data/data.json";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    const filteredData = searchResults.filter(
      (result) => result.category === category
    );
    router.push({
      pathname: `/category/${category}`,
      query: { filteredData: JSON.stringify(filteredData) },
    });
  };

  return (
    <div>
      <nav className="bg-navbcg border-gray-200 dark:bg-gray-900 h-20 w-full fixed z-10">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link href="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Daily News Actual
            </span>
          </Link>
          <div className="flex items-center">
            <ul className="flex flex-row my-5 mr-6 space-x-8 text-sm font-medium  ">
              <li>
                <Link href="/" className="nav" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <button
                  className="nav"
                  onClick={() => handleCategoryClick("business")}
                >
                  Business
                </button>
              </li>
              <li>
                <button
                  className="nav"
                  onClick={() => handleCategoryClick("Sport")}
                >
                  Sport
                </button>
              </li>
              <li>
                <button
                  className="nav"
                  onClick={() => handleCategoryClick("health")}
                >
                  health
                </button>
              </li>
              <li>
                <button
                  className="nav"
                  onClick={() => handleCategoryClick("travel")}
                >
                  travel
                </button>
              </li>
              <li>
                <button
                  className="nav"
                  onClick={() => handleCategoryClick("World")}
                >
                  World
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      /
    </div>
  );
}

export default Nav;
