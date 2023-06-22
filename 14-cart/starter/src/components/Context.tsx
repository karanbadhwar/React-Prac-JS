import React, {
  JSX,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";
import reducer from "./Reducer";
import { actions } from "./Action";
import cartItems from "../data";
import { getTotal } from "./Utils";

//URL
const url = "https://www.course-api.com/react-useReducer-cart-project";

//React Element
interface ReactEl {
  children: JSX.Element[] | JSX.Element;
}

export interface IContext {
  loading: boolean;
  cart: Map<
    string,
    {
      id: string;
      title: string;
      price: string;
      img: string;
      amount: number;
    }
  >;
  clearCart: () => void;
  removeItem: (id: string) => void;
  increaseItem: (id: string) => void;
  decreaseItem: (id: string) => void;
  totalAmount: number;
  totalCost: number;
}

const AppContext = createContext({} as IContext);

const initialState = {
  loading: false,
  cart: new Map<
    string,
    {
      id: string;
      title: string;
      price: string;
      img: string;
      amount: number;
    }
  >(),
  removeItem: (id: string) => {},
  clearCart: () => {},
  increaseItem: (id: string) => {},
  decreaseItem: (id: string) => {},
  totalAmount: 0,
  totalCost: 0,
};

const AppProvider = ({ children }: ReactEl) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getTotal(state.cart);

  function clearCart() {
    dispatch({ type: actions.clear });
  }
  function removeItem(id: string) {
    console.log(id);
    dispatch({ type: actions.remove, payload: { id } });
  }
  function increaseItem(id: string): void {
    dispatch({ type: actions.increase, payload: { id } });
  }
  function decreaseItem(id: string): void {
    dispatch({ type: actions.decrease, payload: { id } });
  }

  const fetchData = async () => {
    dispatch({ type: actions.loading });
    try {
      const response = await fetch(url);
      const cartData: {
        id: string;
        title: string;
        price: string;
        img: string;
        amount: number;
      }[] = await response.json();
      dispatch({
        type: actions.display_items,
        payloadCart: {
          cart: cartData,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Use Global Hook
export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
