import calculateTotal from './calculateTotal';

export const initialState = {
  total: 0,
  items: [],
};

export default function shopCartReducer(state, action) {
  const { type, payload } = action;
  let updatedCart;
  let newTotal;
  switch (type) {
    case 'ADD_TO_CART':
      updatedCart = state.items.map((item) =>
        item.id === payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      const newItem = state.items.find((item) => item.id === payload.id);
      if (!newItem) {
        updatedCart.push({ ...payload, quantity: 1 });
      }
      newTotal = calculateTotal(updatedCart);
      return { ...state, total: newTotal, items: updatedCart };

    case 'REMOVE_QUANTITY':
      console.log(type, payload);
      updatedCart = state.items
        .map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
      newTotal = calculateTotal(updatedCart);
      return { ...state, total: newTotal, items: updatedCart };

    case 'DELETE_FROM_CART':
      console.log(type, payload);
      updatedCart = state.items.filter((item) => item.id !== payload.id);
      newTotal = calculateTotal(updatedCart);
      return { ...state, total: newTotal, items: updatedCart };

    case 'CLEAR_CART':
      console.log(type);
      return initialState;
    default:
      throw new Error(`No case for type ${type}`);
  }
}
