import axios from "axios";
export const getAllProductsData = (names, values, page) => async (disatch) => {
  const res = await axios.get(
    `/getProducts?QueryName=${names}&QueryValues=${values}&page=${page}`
  );

  disatch({
    type: "getAllProductsData",
    payload: res.data.data,
    total: res.data.total,
    names: res.data.names,
    values: res.data.values,
  });
};
export const getAllReviews = (ids) => async (disatch) => {
  const res = await axios.get(`/getReviews?id=${ids}`);
  disatch({
    type: "getAllReviews",
    payload: res.data,
  });
};
