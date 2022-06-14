import React, { useReducer } from "react";
import { IProductDetails } from "./constants";
import reducer, { ACTIONS, initialState } from "./reducer";

interface IContext {
  cartData: Array<IProductDetails>;
  total: number;
  addToCart: (payload: IProductDetails) => void;
  removeFromCart: (payload: IProductDetails) => void;
  clearCart: () => void;
  errorMessage: string;
  isDisable: boolean;
}

export const AppContext = React.createContext<IContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cartData, total, errorMessage, isDisable } = state;

  const addToCart = (payload: IProductDetails) => {
    dispatch({ type: ACTIONS.ADD_PRODUCT, payload });
  };

  const removeFromCart = (payload: IProductDetails) => {
    dispatch({ type: ACTIONS.REMOVE_PRODUCT, payload });
  };

  const clearCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART });
  };

  return (
    <AppContext.Provider
      value={{
        cartData,
        total,
        errorMessage,
        isDisable,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
