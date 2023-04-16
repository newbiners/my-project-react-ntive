import { FlatList, View, Text, StyleSheet, Animated } from "react-native";
import { useState } from "react";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";
import { Button } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import ButtonNav from "../components/buttonNav";

function CategoriesScreen({ navigation }) {
  const [button, setButton] = useState(true);
  const value = useState(new Animated.ValueXY({ x: 300, y: 30 }))[0];
  function buttonNaviget() {
    requestAnimationFrame(() => {
      if (button === true) {
        Animated.timing(value, {
          toValue: { x: 0, y: 30 },
          duration: 700,
          useNativeDriver: false,
        }).start();
      }
      if (button === false) {
        Animated.timing(value, {
          toValue: { x: 300, y: 30 },
          duration: 700,
          useNativeDriver: false,
        }).start();
      }
      setButton(!button);
    });
  }

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  function homeHendler() {
    navigation.navigate("Categories");
  }
  function favoriteHeandler() {
    navigation.navigate("Favorite");
  }
  return (
    <View>
      <View style={styles.containerHeader}>
        <View
          style={{
            position: "absolute",
            right: 100,
            width: 1,
          }}
        >
          <Animated.View style={value.getLayout()}>
            <View style={styles.containerNav}>
              <ButtonNav onPress={buttonNaviget}>
                <Ionicons name="arrow-forward-sharp" size={25} />
              </ButtonNav>
              <ButtonNav onPress={homeHendler}>Home</ButtonNav>
              <ButtonNav onPress={favoriteHeandler}>Favorit</ButtonNav>
            </View>
          </Animated.View>
        </View>
        <View style={styles.containerItems}>
          <Text style={styles.textHeader}>HEADER</Text>
          <Button title="tombol" onPress={buttonNaviget} />
        </View>
      </View>

      <View style={{ zIndex: -1 }}>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: "#ffff",
    height: 75,
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 10,
    position: "relative",
  },
  containerNav: {
    backgroundColor: "#ffff",
    borderRadius: 20,
    width: 100,
    elevation: 30,
    overflow: "hidden",
    padding: 2,
  },
  textNav: {},
  containerItems: {
    width: "65%",
    height: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    zIndex: -1,
  },
  textHeader: {
    fontSize: 20,
  },
});

export default CategoriesScreen;
