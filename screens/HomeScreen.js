import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { BottomTabs } from "../components/BottomTabs";
import { Categories } from "../components/Categories";

import { HeaderTabs } from "../components/HeaderTabs";
import { localRestaurants, RestaurantItem } from "../components/RestaurantItem";
import { SearchBar } from "../components/SearchBar";

const YELP_API_KEY =
  "c21caJGJpogsO4OHymKUREW6u2B82QxJWg1IX3ZMXTfnaf2PJam291ObElB0KwTs5g4iN0DKJtigunLTIhtS3XL0bsiK4S4tBWMT4YFtHvcaApFH7R39oRiyaAwfY3Yx";

export const HomeScreen = ({ navigation }) => {
  const [restaurantsData, setRestaurantsData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantsData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          restaurantsData={restaurantsData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};
