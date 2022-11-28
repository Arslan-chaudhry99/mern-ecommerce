import axios from "axios";
export const getAllProductsData = () => async (disatch) => {
  const res = await axios.get(`/getProducts?brand=${"samsung"}&initial=${"3000"}`,);

  disatch({
    type: "getAllProductsData",
    payload: res.data,
  });
};
