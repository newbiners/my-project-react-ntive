import { Text, FlatList, View } from "react-native";
import { useContext } from "react";
import { FavoriteContext } from "./store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
function FavoritesScreen() {
  const FavoriteItems = useContext(FavoriteContext);
  // console.log(FavoriteItems.ids);

  const CurrentFavorite = MEALS.filter((currentId) =>
    FavoriteItems.ids.includes(currentId.id)
  );
  // console.log(CurrentFavorite);

  function 

  return (
    <FlatList
      data={CurrentFavorite}
      keyExtractor={(item) => item.id}
      renderItem={(data) => {
        return (
          <View>
            <Text>{data.item.duration}</Text>
          </View>
        );
      }}
    />
  );
}

export default FavoritesScreen;
