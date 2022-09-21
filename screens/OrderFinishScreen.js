import { View, Text, SafeAreaView, ScrollView } from "react-native";

import { useSelector } from "react-redux";

import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";

import firebase from "../firebase";
import { MenuItems } from "../components/restaurantDetail/MenuItems";

export const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bolognese",
        description: "With butter, tomato and special sauce",
        price: "$15.79",
        image:
          "https://recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottieView
          style={{ height: 120, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/Animedone.json")}
          autoPlay
          speed={1.1}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
          <LottieView
            style={{ height: 250, alignSelf: "center" }}
            source={require("../assets/animations/CookingAnime.json")}
            autoPlay
            speed={1.1}
            loop={true}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
