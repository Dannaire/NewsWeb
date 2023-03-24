import { useState, useEffect } from "react";

function Card() {
  const [searchResults, setSearchResults] = useState([]);
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

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="w-full py-3">
        <h2 className="text-gray-800 text-2xl font-bold">
          <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
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
                {result.date}
              </p>
              <a href="/">
                <a
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <h3
                    className="text-lg font-bold leading-tight mb-2 overflow-hidden overflow-ellipsis"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    <a href="#">{result.headline}</a>
                  </h3>
                </a>
              </a>
              <p
                className="mb-4 text-gray-700 overflow-hidden overflow-ellipsis"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {result.desc}
              </p>
              <div className="flex space-x-4">
                <a
                  href="/"
                  aria-label="Likes"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2 inline-block">
                    <button>
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More{" "}
                        <svg
                          className="w-4 h-4 ml-2 transition-transform duration-500 hover:translate-x-4"
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
