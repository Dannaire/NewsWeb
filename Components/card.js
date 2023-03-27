import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
function Card() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const router = useRouter();

  const handleNewsClick = (resultId) => {
    router.push(`/detail/${resultId}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedResults = searchResults.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalPages = Math.ceil(searchResults.length / pageSize);

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
    <>
    <div className="bg-gray-900 w-full h-12"></div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="w-full py-3">
          <h2 className="text-gray-800 text-2xl font-bold text-center">
          <div className="mt-4 mb-4 pt-4 pb-4 dark:bg-gray-900 text-white">
            <span className="inline-block h-5 border-l-3 border-red-600 mr-2" >Featured News</span></div>
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {paginatedResults.map((result) => (
            <div
              key={result.id}
              className="overflow-hidden transition-transform border-gray-900 duration-300 bg-white rounded hover:transform-none"
            >
              <button onClick={() => handleNewsClick(result.id)} >
                <img
                  src={result.image}
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </button>
              <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  {result.date}
                </p>
                <button onClick={() => handleNewsClick(result.id)} >
                  <a
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <h3
                      className="text-lg font-bold leading-tight text-left mb-2 overflow-hidden overflow-ellipsis"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      <a href="#">{result.headline}</a>
                    </h3>
                  </a>
                  </button>
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
                  
                    <div className="mr-2 inline-block">
                      <button onClick={() => handleNewsClick(result.id)} >
                      
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
                   
                </div>
                
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i}
      onClick={() => handlePageChange(i + 1)}
      className={`mx-1 font-bold py-2 px-4 rounded ${
        currentPage === i + 1 ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'
      }`}
    >
      {i + 1}
    </button>
  ))}
</div>
      </div>
    </>
  );
}
export default Card;
