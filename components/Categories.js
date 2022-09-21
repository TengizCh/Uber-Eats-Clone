import { Image, ScrollView, Text, View } from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drink",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export const Categories = () => (
  <View
    style={{
      marginTop: 5,
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingLeft: 20,
    }}
  >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
          <Image
            source={item.image}
            style={{ width: 50, height: 40, resizeMode: "contain" }}
          />
          <Text style={{ fontSize: 13, fontWeight: "800" }}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  </View>
);
