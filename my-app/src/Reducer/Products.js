const initial = [];
const ProductsDatas = (data = initial, action) => {
  if (action.type === "getAllProductsData") {
    console.log("thi is new");
    return action.payload;
  }
  return data;
};
export default ProductsDatas;
