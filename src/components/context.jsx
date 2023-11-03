import { useContext, useReducer, useEffect, createContext } from "react";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  DISPLAY_ITEMS,
  BUY,
} from "./actions";
import cartItems from "./data";
import cartReducer from "./reducer";

const AppContext = createContext();
const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeCartItem = (id) => {
    dispatch({ type: REMOVE, payload: id });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: id });
  };
  const buy = () => {
    dispatch({ type: BUY });
  };

  useEffect(() => {
    dispatch({ type: DISPLAY_ITEMS });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeCartItem,
        increase,
        decrease,
        buy,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
