import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Card() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/6419d536c0e7653a058beae8"
        );
        const data = await response.json();
        setSearchResults(data.record);
        console.log("API data fetched successfully!");
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       <div className="w-full py-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />New Update
                </h2>
              </div>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {searchResults.map((result) => (
          <div
            key={result.id}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded"
          >
            <a href="/" aria-label="Article">
              <img
                src={result.image}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                {result.publishedAt}
              </p>
              <a href="/">
                <a
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-7">{result.title}</p>
                </a>
              </a>
              <p className="mb-4 text-gray-700">{result.description}</p>
              <div className="flex space-x-4">
                <a
                  href="/"
                  aria-label="Likes"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <button>
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More{" "}
                        <svg
                          className="w-4 h-4 ml-2 hover:"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </button>
                  </div>
                  {/* <p className="font-semibold">7.4K</p> */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
