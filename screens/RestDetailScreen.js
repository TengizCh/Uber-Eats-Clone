import { View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

import { About } from "../components/restaurantDetail/About";
import { MenuItems } from "../components/restaurantDetail/MenuItems";
import { ViewCart } from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Stracciatella Salad",
    description: "With cheese and cherry tomato",
    price: "$20.99",
    image:
      "https://images.unsplash.com/photo-1657652996082-bbed5bf51bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
  },
  {
    title: "Ceasar Salad",
    description: "With cheese, cherry tomato, cucumber and lettuce",
    price: "$17.99",
    image:
      "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1218&q=80",
  },
  {
    title: "Weller Burger",
    description: "Beef 200mg, lettuce, secret sauce",
    price: "$27.00",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1599&q=80",
  },
  {
    title: "Sneackers",
    description: "Chocolate, nuts and caramel sauce",
    price: "$17.99",
    image:
      "https://imageproxy.wolt.com/menu/menu-images/60acc97f84ddfe7751495178/ce88ae4e-bd42-11eb-bd93-2aec0b53c962_snickers____________.jpeg",
  },
  {
    title: "Ceasar Salad",
    description: "With cheese, cherry tomato, cucumber and lettuce",
    price: "$17.99",
    image:
      "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1218&q=80",
  },
];

export const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
};
