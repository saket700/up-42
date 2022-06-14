import { IProductDetails } from "./constants";

export const enum ACTIONS {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CLEAR_CART = "CLEAR_CART",
  ERROR_MESSAGE = "ERROR_MESSAGE",
}

interface IAction {
  type: ACTIONS;
  payload?: IProductDetails;
}

interface IState {
  cartData: Array<IProductDetails>;
  total: number;
  errorMessage: string;
  isDisable: boolean;
}

export const initialState: IState = {
  cartData: [],
  total: 0,
  errorMessage: "",
  isDisable: false,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT: {
      const stateCopy = Object.assign({}, state);
      const index = stateCopy.cartData.findIndex(
        (item) => item.id === action.payload?.id
      );

      if (action.payload) {
        stateCopy.total += action.payload?.credits;
        if (index === -1 && stateCopy.total <= 200) {
          stateCopy.cartData.push(action.payload);
        }
      }

      if (stateCopy.total >= 200) {
        stateCopy.errorMessage = "Please check your available credits!";
        stateCopy.isDisable = true;
      }

      return stateCopy;
    }

    case ACTIONS.REMOVE_PRODUCT: {
      const stateCopy = Object.assign({}, state);
      stateCopy.cartData = stateCopy.cartData.filter(
        (item) => item.id !== action.payload?.id
      );

      if (action.payload) {
        stateCopy.total -= action.payload?.credits;
        stateCopy.errorMessage = "";
        stateCopy.isDisable = false;
      }
      return stateCopy;
    }

    case ACTIONS.CLEAR_CART: {
      return initialState;
    }

    default:
      return state;
  }
};

export default reducer;
