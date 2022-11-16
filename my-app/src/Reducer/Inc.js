const initial = 1;
const IncrementData = (data = initial, action) => {
  if (action.type === "INCREMENT") {
    return data + 1 + action.disatch;
  }
  return data;
};
export default IncrementData;
