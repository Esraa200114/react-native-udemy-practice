import {configureStore} from '@reduxjs/toolkit';

import FavouritesReducer from './Favourites';

export const store = configureStore({
  reducer: {
    favouriteMeals: FavouritesReducer,
  },
});
