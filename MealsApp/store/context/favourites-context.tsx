/* eslint-disable prettier/prettier */
import {createContext, ReactNode, useState} from 'react';

export const FavouritesContext = createContext({
  ids: [] as string[],
  addFavourite: (id: string) => {},
  removeFavourite: (id: string) => {},
});

const FavouritesContextProvider = ({children}: {children: ReactNode}) => {
  const [favouriteMealIDs, setFavouriteMealIDs] = useState<string[]>([]);

  const addFavourite = (id: string) => {
    setFavouriteMealIDs(prev => [...prev, id]);
  };

  const removeFavourite = (id: string) => {
    setFavouriteMealIDs(prev => prev.filter((mealId: string) => mealId !== id));
  };

  const value = {
    ids: favouriteMealIDs,
    addFavourite,
    removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
