import React from "react";

import ItemCard from "../tools/ItemCard";

function Body({ data, addToCart, loading }) {

  return (
    <div className="flex flex-col  h-full bg-white  dark:bg-zinc-900 text-zinc-900 dark:text-gray-200">
      <div className="w-full h-[40px]"></div>
      <div className="container w-4/5 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 ">
        {!loading ? (
          data?.length > 0 ? (
            data.map((k) => (
              <ItemCard key={k.id} data={k} addToCart={addToCart} />
            ))
          ) : (
            <div className="w-[160vh] min-h-[40vh] flex justify-center items-center text-2xl">
              Nothing in Found
            </div>
          )
        ) : (
          <>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </>
        )}
      </div>
    </div>
  );
}

export default Body;
