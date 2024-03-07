export const initialState = {
  total: 0,
  items: [],
};

export default function shopCartReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      const updatedItems = [...state.items];
      let newTotal = state.total;
      console.log(newTotal);
      const itemIndex = updatedItems.findIndex(
        (item) => item.id === payload.id,
      );
      if (itemIndex >= 0) {
        updatedItems[itemIndex].quantity += 1;
      } else {
        updatedItems.push({ ...payload, quantity: 1 });
      }
      console.log(state);
      newTotal = updatedItems.reduce(
        (acc, item) => (acc += item.price * item.quantity),
        newTotal,
      );
      return {
        ...state,
        total: newTotal,
        items: updatedItems,
      };
    case 'REMOVE_FROM_CART':
      console.log('REMOVE_FROM_CART', payload);

      return {
        ...state,
        items: payload.items,
      };

    default:
      throw new Error(`No case for type ${type}`);
  }
}
