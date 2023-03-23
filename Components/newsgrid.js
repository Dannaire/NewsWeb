import { Result } from "postcss";
import React from "react";
import { useState, useEffect } from "react";

function Newsgrid() {
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
    <>
 {/* hero big grid */}
 <div className="bg-white py-6">
  
 {/* {searchResults.slice(0, 1).map((result) => ( */}
 <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
   {/* big grid 1 */}
   <div className="w-full py-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />Hot News
                </h2>
              </div>
   <div className="flex flex-row flex-wrap">
     {/*Start left cover*/}
     {searchResults.slice(1, 2).map((result) => (
     <div key={result.id} className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
       <div className="relative hover-img h-96 overflow-hidden">
         <a href="#">
           <img className="max-w-full w-full mx-auto h-auto" src={result.image} alt="Image description" />
         </a>
         <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
           <a href="#">
             <h2 className="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
           </a>
           <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
           <div className="pt-2">
             <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2" />Europe</div>
           </div>
         </div>
       </div>
     </div>
     ))}
     {/*Start box news*/}
     
     <div className="flex-shrink max-w-full w-full lg:w-1/2">
       <div className="box-one flex flex-row flex-wrap">
       {searchResults.slice(0, 4).map((result) => (
         <article key={result.id} className="flex-shrink max-w-full w-full sm:w-1/2 ">
           <div className="relative hover-img max-h-48 overflow-hidden m-0.5">
             <a href="#">
               <img className="max-w-full w-full mx-auto h-48 max-h-auto" src={result.image} />
             </a>
             <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
               <a href="#">
                 <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">{result.title}</h2>
               </a>
               <div className="pt-1">
                 <div className="text-gray-100"><div className="inline-block h-3 border-l-2 border-red-600 mr-2" />Techno</div>
               </div>
             </div>
           </div>
         </article>
       ))}
       </div>
     </div>
   </div>
 </div>
 {/* ))} */}
</div>
</>
);
}

export default Newsgrid;