let totalAmount = 0;
const ProductsDatas = (
  data = {
    content: [],
  },
  action
) => {
  switch (action.type) {
    case "getAllProductsData":
      if (action.payload.length === 0) {
        console.log("this is 0");
        return {
          content: [],
          totalAmount: 0,
        };
      } else {
        console.log("this is not 0");
        totalAmount = action.total;
        
        let mainData = {
          
          ...data.content,
          content: [ ...data.content,  action.payload],
          totalAmount,
        };
        return mainData;
      }

      break;

    default:
      return data;
      break;
  }
};
export default ProductsDatas;
