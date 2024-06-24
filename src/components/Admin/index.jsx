import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/addProductSlice";

const Admin = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const { product } = useSelector((s) => s.pro);

  let dispatch = useDispatch();
  function addProduct() {
    if (
      image.trim() &&
      title.trim() &&
      desc.trim() &&
      price.trim() &&
      category.trim() !== ""
    ) {
      let newProduct = {
        image,
        title,
        desc,
        price,
        category,
        id: product.length + 1,
      };
      dispatch(createProduct(newProduct));
      setImage("");
      setTitle("");
      setDesc("");
      setPrice("");
    } else {
      alert("err ...");
    }
  }
  return (
    <div className="py-[40px]">
      <div className="container">
        <div className="">
          <h1 className="text-white text-2xl font-bold">create Product!</h1>
          <div className="w-[50%] mx-auto py-[50px] flex flex-col gap-10">
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => setImage(e.target.value)}
                value={image}
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                img
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                add title
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                add description
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                add price
              </label>
            </div>

            <form class="mx-auto w-full">
              <label for="underline_select" class="sr-only">
                category
              </label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                id="underline_select"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Choose a category</option>
                <option value="MAN">MAN</option>
                <option value="WOMAN">WOMAN</option>
                <option value="KIDS">KIDS</option>
              </select>
            </form>

            <button
              onClick={() => addProduct()}
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              add product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
