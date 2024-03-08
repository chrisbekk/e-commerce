export const initialState = {
  total: 0,
  items: [],
};

export default function shopCartReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      const updatedItems = state.items.map((item) =>
        item.id === payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      const newItem = state.items.find((item) => item.id === payload.id);
      if (!newItem) {
        updatedItems.push({ ...payload, quantity: 1 });
      }
      const newTotal = updatedItems.reduce((acc, item) => {
        return acc + item.discountedPrice * item.quantity;
      }, 0);
      return { ...state, total: newTotal, items: updatedItems };

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
