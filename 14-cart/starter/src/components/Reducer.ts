import { actions } from "./Action";
import { IContext } from "./Context";
//interface
interface actionType {
  type: actions;
  payload?: {
    id: string;
  };
  payloadCart?: {
    cart?: {
      id: string;
      amount: number;
      title: string;
      price: string;
      img: string;
    }[];
  };
}
const reducer = (state: IContext, action: actionType) => {
  if (action.type === actions.clear) {
    return { ...state, cart: new Map() };
  } else if (action.type === actions.remove) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload!.id!);
    return { ...state, cart: newCart };
    // state.cart.delete(action.payload!.id);
    // return { ...state };
  } else if (action.type === actions.increase) {
    const newCart = new Map(state.cart);

    const itemId = action!.payload!.id;
    const item = newCart.get(itemId)!;

    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  } else if (action.type === actions.decrease) {
    const newCart = new Map(state.cart);
    const itemId = action.payload!.id;
    const item = newCart.get(itemId)!;
    const newItem = { ...item, amount: item.amount - 1 };
    if (newItem.amount === 0) {
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }
    newCart.set(itemId!, newItem);
    return { ...state, cart: newCart };
  } else if (action.type === actions.loading) {
    return { ...state, loading: true };
  } else if (action.type === actions.display_items) {
    const cartArr = action!.payloadCart!.cart;
    // console.log(cartArr);
    const newCart = new Map(cartArr?.map((item) => [item.id, { ...item }]));
    console.log(newCart);
    return { ...state, loading: false, cart: newCart };
  }
  throw new Error(`No matching type found: ${action.type}`);
};

export default reducer;
