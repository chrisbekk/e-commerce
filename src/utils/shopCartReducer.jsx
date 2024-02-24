export const initialState = {
  total: 0,
  items: [
    { id: 1, title: 'item1', price: 100 },
    { id: 2, title: 'item2', price: 200 },
    { id: 3, title: 'item3', price: 400 },
  ],
};

export default function shopCartReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      console.log('ADD_TO_CART', payload);
      return {
        ...state,
        items: payload.items,
      };
    case 'REMOVE_FROM_CART':
      console.log('REMOVE_FROM_CART', payload);
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
