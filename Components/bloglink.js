import { useState, useEffect } from "react";

function Bloglink() {
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
    <>
{/* block news */}
<div className="bg-gray-50 py-6">
        <div className="xl:container mx-auto px-3 sm:px-8 xl:px-8">
          <div className="flex flex-row flex-wrap">
            {/* Left */}
            <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
              <div className="w-full py-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />New Update
                </h2>
              </div>
              <div className="flex flex-row flex-wrap -mx-3">
                <div className="flex-shrink max-w-full w-full px-3 pb-5">
                  <div className="relative hover-img max-h-98 overflow-hidden">
                    {/*thumbnail*/}
                    {/* <a href="#">
                      <img className="max-w-full w-full mx-auto h-auto" src="src/img/dummy/img2.jpg" alt="Image description" />
                    </a> */}
                    <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                      {/*title*/}
                      <a href="#">
                        <h2 className="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
                      </a>
                      <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>                                                  
                      {/* author and date */}
                      <div className="pt-2">
                        <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2" />Europe</div>
                      </div>
                    </div>
                  </div>
                </div>
                {searchResults.slice(0,6).map((result) => (
                <div key={result.id} className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href>
                      <img className="object-cover w-full h-48 rounded" src={result.image} alt="alt title" />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                    <h3 className="text-lg font-bold leading-tight mb-2 overflow-hidden overflow-ellipsis"style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
                          <a href="#">{result.headline}</a>
                        </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1 overflow-hidden overflow-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{result.desc}</p>

                      <a className="text-gray-500" href="#"><span className="inline-block h-3 border-l-2 border-red-900 mr-2" />{result.category}</a>
                    </div>
                  </div>
                </div>
                 ))}
              </div>
            </div>
            
            {/* right */}
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              <div className="w-full bg-white">
                <div className="mb-6">
                  <div className="p-4 bg-gray-100">
                    <h2 className="text-lg font-bold">More News</h2>
                  </div>
                  {searchResults.slice(0, 4).map((result) => (
                  <ul key={result.id } className="post-number">
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">{result.headline}</a>
                    </li>
                  </ul>
                   ))}
                </div>
              </div>
              <div className="text-sm py-6 ">
                <div className="w-full text-center">
                  <a className="uppercase" href="#">Advertisement</a>
                  <a href="#">
                    <img className="mx-auto " src='https://i.postimg.cc/BvMLq5SY/300x250-barilla-jpg.webp' alt="advertisement area" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
      );
    }
    
    export default Bloglink;