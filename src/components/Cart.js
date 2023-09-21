import React from "react";
import { useState, useEffect } from "react";
import ReviewStar from "./ReviewStar";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  const [priceAmt, setPriceAmt] = useState(0);

  useEffect(() => {
    const price = cartItems.map((k) => {
      const d = priceAmt + Number(k.price);
      setPriceAmt(d);
    });
  }, [cartItems]);

  return (
    <div className="container mx-auto w-full md:w-4/5 min-h-[80vh] bg-white dark:bg-zinc-900 dark:text-gray-50 flex flex-col justify-between">
      <div className="">
        {cartItems?.length > 0 ? (
          cartItems.map((k) => (
            <div className="w-full dark:bg-zinc-800 mt-3 mb-3  h-[200px] lg:h-[150px] outline outline-1 outline-gray-300 dark:outline-gray-800 rounded-lg flex items-center justify-between">
              <img
                src={k.thumbnail}
                alt="product-image"
                className="w-[150px] h-[150px] rounded-l-lg"
              ></img>
              <div className=" ml-1">
                <div className="font-bold text-lg">{k.title}</div>
                <div className="w-[400px] hidden md:block">{k.description}</div>
              </div>
              <div className="hidden md:block">
                <ReviewStar star={k.rating} />
              </div>
              <div className="text-lg lg:text-2xl mr-5 ">Price: {k.price}$</div>
            </div>
          ))
        ) : (
          <div className="w-full min-h-[40vh] flex justify-center items-center text-2xl">
            Nothing in Cart
          </div>
        )}
      </div>

      <div className="w-full flex justify-end">
        {priceAmt ? (
          <div className="text-4xl mb-5">Total : {priceAmt} $</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Cart;
