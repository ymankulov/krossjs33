import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
};

export const AddProductSlice = createSlice({
  name: "PRODUCT_ADD",
  initialState,
  reducers: {
    createProduct(state, action) {
      let newProduct = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(newProduct));
      state.product = newProduct;
    },
    sortProduct(state, action) {
      if (action.payload == "A-Z") {
        state.product = state.product.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      } else if (action.payload == "Z-A") {
        state.product = state.product.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      } else if (action.payload == "Expensive to Cheap") {
        state.product = state.product.sort((a, b) => +b.price - a.price);
      } else if (action.payload == "Cheap to Expensive") {
        state.product = state.product.sort((a, b) => +a.price - b.price);
      }
    },
  },
});

export default AddProductSlice.reducer;
export const { createProduct, sortProduct } = AddProductSlice.actions;
