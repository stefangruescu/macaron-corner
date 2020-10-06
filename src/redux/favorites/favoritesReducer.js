import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../constants/constants";

const initialState = {
  favorites: [],
};

export function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      let productInFavorites = false;
      state.favorites.map((product) => {
        if (product.id === action.payload.favorite.id) {
          productInFavorites = true;
        }
        return product;
      });
      if (!productInFavorites)
        return {
          ...state,
          favorites: [...state.favorites, action.payload.favorite],
        };
      else return state;
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: [
          ...state.favorites.filter(
            (product, index) => product.id !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
}
