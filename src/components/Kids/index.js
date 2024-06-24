import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../ProductCard";
import { sortProduct } from "../../redux/addProductSlice";

function Kids(props) {
  const { product } = useSelector((s) => s.pro);
  const forKids = product.filter((el) => el.category === "KIDS");
  const dispatch = useDispatch();

  console.log("ewrg");
  return (
    <div>
      <div className="container">
        <div className="">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-white text-2xl font-bold">All Products</h1>
            <form className="max-w-sm">
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                onChange={(e) => dispatch(sortProduct(e.target.value))}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Expensive to Cheap">Expensive to Cheap</option>
                <option value="Cheap to Expensive">Cheap to Expensive</option>
              </select>
            </form>
          </div>
          <div className="py-[40px] flex items-center flex-wrap gap-[50px]">
            {forKids.map((el) => (
              <ProductCard {...el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kids;
