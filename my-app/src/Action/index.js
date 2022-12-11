import axios from "axios";
export const getAllProductsData = (names, page) => async (disatch) => {
  console.log(Object.values(names)[0]);
  const res = await axios.get(
    `/getProducts?QueryName=${Object.keys(names)[0]}&QueryValues=${
      Object.values(names)[0]
    }&page=${page}`
  );

  disatch({
    type: "getAllProductsData",
    payload: res.data.data,
    total: res.data.total,
    names: res.data.names,
    values: res.data.values,
  });
};
// get main product data
export const getMainData = (ids) => async (disatch) => {
  const res = await axios.get(`/getMainData?name=${ids}`);
  console.log(res.data.data);
  disatch({
    type: "getMainData",
    payload: res.data.data,
  });
};
// get all prodyct reviews
export const getAllReviews = (ids) => async (disatch) => {
  const res = await axios.get(`/getReviews?id=${ids}`);
  disatch({
    type: "getAllReviews",
    payload: res.data,
  });
};

// find products data
export const findProducts = (value) => async (disatch) => {
  const res = await axios.get(`/findProducts?name=${value}`);
  disatch({
    type: "findProducts",
    payload: res.data.data,
  });
};
