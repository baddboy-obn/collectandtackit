function cartItems(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const filter = state.filter(item => item.id !== action.payload.id);

      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(cartItem => cartItem.id !== action.payload.id);
    case 'ADD_ADDRESS':
      return [...state, action.payload];
  }

  return state;
}

export default cartItems;
