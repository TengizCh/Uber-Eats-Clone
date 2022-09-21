import { Text, View } from "react-native";

export const OrderItem = ({ item }) => {
  const { title, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{title}</Text>
      <Text style={{ fontWeight: "400", fontSize: 16 }}>{price}</Text>
    </View>
  );
};
