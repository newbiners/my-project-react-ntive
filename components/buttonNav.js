import { View, Text, Pressable, StyleSheet } from "react-native";

function ButtonNav({ children, onPress }) {
  return (
    <View style={styles.containerNavItems}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={onPress}>
        <View style={{ paddingVertical: 10, paddingHorizontal: 7 }}>
          <Text>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  containerNavItems: {
    width: "100%",
    marginBottom: 7,
  },
});
export default ButtonNav;
