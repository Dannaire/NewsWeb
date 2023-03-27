import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Nav from "../../Components/nav";
import Footer from "@/Components/footer";
import Heads from "@/Components/head";
import data from "../../public/data/data.json";

export async function getServerSideProps(context) {
  const { resultcategory } = context.query;
  const category = resultcategory.toLowerCase();

  // Filter the data based on the category name
  const filteredData = data.filter((item) => item.category === category);
  
  if (filteredData.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      resultcategory,
      filteredData,
    },
  };
}

function CategoryPage({ resultcategory, filteredData }) {
  const router = useRouter();
  const handleNewsClick = (resultId) => {
    router.push(`/detail/${resultId}`);
  };

  return (
    <div>
      <Heads />
      <Nav />
      <div className="bg-white py-6 mt-12">
        {/* {searchResults.slice(0, 1).map((result) => ( */}
        <div className="xl:container mx-auto px-3 sm:px-8 xl:px-8">
          {/* big grid 1 */}
          <div className="w-full py-3">
            <h2 className="text-gray-800 text-2xl font-bold">
              <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
              Hot News
            </h2>
          </div>
          <div className="flex flex-row flex-wrap">
            {/*Start left cover*/}
            {filteredData.slice(1, 2).map((result) => (
              <div
                key={result.id}
                className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1"
              >
                <div className="relative hover-img h-96 overflow-hidden">
                  <a href="#">
                    <img
                      className="max-w-full w-full mx-auto h-auto"
                      src={result.image}
                      alt="Image description"
                    />
                  </a>
                  <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                    <a href="#">
                      <h2 className="text-3xl font-bold capitalize text-white mb-3 overflow-hidden overflow-ellipsis">
                        {result.headline}
                      </h2>
                    </a>
                    <p
                      className="text-gray-100 hidden sm:inline-block overflow-hidden overflow-ellipsis"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {result.desc}
                    </p>
                    <div className="pt-2">
                      <div className="text-gray-100">
                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                        Europe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/*Start box news*/}

            <div className="flex-shrink max-w-full w-full lg:w-1/2">
              <div className="box-one flex flex-row flex-wrap">
                {filteredData.slice(0, 4).map((result) => (
                  <article
                    key={result.id}
                    className="flex-shrink max-w-full w-full sm:w-1/2 "
                  >
                    <div className="relative hover-img max-h-48 overflow-hidden m-0.5">
                      <a href="#">
                        <img
                          className="max-w-full w-full mx-auto h-48 max-h-auto"
                          src={result.image}
                        />
                      </a>
                      <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                        <button onClick={() => handleNewsClick(result.id)}>
                          <h2
                            className="text-lg font-bold capitalize leading-tight text-white mb-1 overflow-hidden overflow-ellipsis"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {result.headline}
                          </h2>
                        </button>
                        <div className="pt-1">
                          <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            {result.category}
                          </div>
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
      {/* =========={ MAIN }==========  */}
      <main id="content">
        {/* advertisement */}
        <div className="bg-gray-50 py-4 hidden">
          <div className="xl:container mx-auto px-3 sm:px-8 xl:px-8">
            <div className="mx-auto table text-center text-sm">
              <a className="uppercase" href="#">
                Advertisement
              </a>
              <a href="#">
                <img src="src/img/ads/ads_728.jpg" alt="advertisement area" />
              </a>
            </div>
          </div>
        </div>
        {/* block news */}
        <div className="bg-gray-50 py-6">
          <div className="xl:container mx-auto px-3 sm:px-8 xl:px-8">
            <div className="flex flex-row flex-wrap">
              {/* Left */}
              <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-gray-800 text-2xl font-bold">
                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
                    {resultcategory}
                  </h2>
                </div>

                <div className="flex flex-row flex-wrap -mx-3">
                  {filteredData.slice(0, 1).map((result) => (
                    <div
                      key={result.id}
                      className="flex-shrink max-w-full w-full px-3 pb-5"
                    >
                      <div className="relative hover-img max-h-98 overflow-hidden">
                        {/*thumbnail*/}
                        <a href="#">
                          <img
                            className="max-w-full w-full mx-auto h-auto"
                            src={result.image}
                            alt="Image description"
                          />
                        </a>
                        <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                          {/*title*/}
                          <a href="#">
                            <h2 className="text-3xl font-bold capitalize text-white mb-3">
                              Amazon Shoppers Are Ditching Designer Belts for
                              This Best-Selling
                            </h2>
                          </a>
                          <p className="text-gray-100 hidden sm:inline-block">
                            Russia says a fire on its flagship vessel in the
                            Black Sea detonated munitions - Ukraine says it
                            fired missiles at the Moskva
                          </p>
                          {/* author and date */}
                          <div className="pt-2">
                            <div className="text-gray-100">
                              <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                              Europe
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filteredData.map((result) => (
                    <div
                      key={result.id}
                      className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
                    >
                      <div className="flex flex-row sm:block hover-img">
                        <a href>
                          <img
                            className="object-cover w-full h-52 rounded"
                            src={result.image}
                            alt="alt title"
                          />
                        </a>
                        <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                          <h3
                            className="text-lg font-bold leading-tight mb-2 overflow-hidden overflow-ellipsis"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            <button
                              className="text-left"
                              onClick={() => handleNewsClick(result.id)}
                            >
                              <a href="#">{result.headline}</a>
                            </button>
                          </h3>
                          <p
                            className="hidden md:block text-gray-600 leading-tight mb-1 overflow-hidden overflow-ellipsis"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {result.desc}
                          </p>
                          <a className="text-gray-500" href="#">
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            {result.date}
                          </a>
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
                    {filteredData.slice(0, 4).map((result) => (
                      <ul key={result.id} className="post-number">
                        <li className="border-b border-gray-100 hover:bg-gray-50">
                          <a
                            className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                            href="#"
                          >
                            {result.headline}
                          </a>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
                <div className="text-sm py-6 ">
                  <div className="w-full text-center">
                    <a className="uppercase" href="#">
                      Advertisement
                    </a>
                    <a href="#">
                      <img
                        className="mx-auto "
                        src="https://i.postimg.cc/BvMLq5SY/300x250-barilla-jpg.webp"
                        alt="advertisement area"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* end main */}
      <Footer />
    </div>
  );
}

export default CategoryPage;
