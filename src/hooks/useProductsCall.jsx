import { useDispatch } from "react-redux";
import { fetchStart, getSuccess, fetchFail } from "../features/productSlice";
import axios from "axios";

const useProductsCall = () => {
  const dispatch = useDispatch();

  //!------------- GET PRODUCTS ----------------
  const getProducts = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "https://honey-badgers-ecommerce.glitch.me/products"
      );
      dispatch(getSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  return {
    getProducts,
  };
};

export default useProductsCall;
