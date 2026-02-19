export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const SELECT_PRODUCT = "SELECT_PRODUCT";

export const initialState = {
  products: [],
  selectedProduct: null
};

export function productReducer(state, action) {
  switch (action.type) {

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          p => p.id !== action.payload.id
        ),
        selectedProduct:
          state.selectedProduct?.id === action.payload.id
            ? null
            : state.selectedProduct
      };

    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct:
          state.products.find(
            p => p.id === action.payload.id
          ) || null
      };

    default:
      return state;
  }
}
