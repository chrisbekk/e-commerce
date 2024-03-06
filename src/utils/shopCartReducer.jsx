export const initialState = {
  total: 0,
  items: [],
};

export default function shopCartReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      console.log('ADD_TO_CART', payload);
      const updatedCart = [...state.items];
      updatedCart.push(payload);

      return {
        ...state,
        items: updatedCart,
      };
    case 'REMOVE_FROM_CART':
      console.log('REMOVE_FROM_CART', payload);
      const updatedCart = [...state.items];
      return {
        ...state,
        items: payload.items,
      };
    case 'UPDATE_TOTAL':
      console.log('UPDATE_TOTAL', payload);
      return {
        ...state,
        total: payload.total,
      };
    default:
      throw new Error(`No case for type ${type}`);
  }
}
