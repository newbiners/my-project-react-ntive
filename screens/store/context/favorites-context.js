import { createContext } from "react";
import { useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvide({ children }) {
  const [favoritIds, setFavoriteIds] = useState([]);

  function addFavorites(id) {
    setFavoriteIds((currentFavorite) => [...currentFavorite, id]);
  }

  function removeFavorites(id) {
    setFavoriteIds((currentFavorite) =>
      currentFavorite.filter((currentId) => currentId !== id)
    );
  }

  const value = {
    ids: favoritIds,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoritesContextProvide;
