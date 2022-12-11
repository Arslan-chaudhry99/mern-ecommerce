let totalAmount = 0;
const ProductsDatas = (
  data = {
    content: [],
    totalAmount: 0,
  },
  action
) => {
  switch (action.type) {
    case "getAllProductsData":
      if (action.payload.length === 0) {
        data.content = [];
        data.totalAmount = 0;

        return {
          content: [],
          totalAmount: 0,
        };
      } else {
        totalAmount = action.total;
        return {
          content: action.payload,
          totalAmount,
        };
      }
      break;

    default:
      return data;
      break;
  }
};
export default ProductsDatas;
