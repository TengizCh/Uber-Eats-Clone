import { View, Text, Image, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Gastronome",
    image_url:
      "https://cdn.archilovers.com/projects/1f466c93-45f0-496e-8010-c9eea398d33d.jpg",
    categories: ["Restaurant", "Bar"],
    price: "$$$$",
    reviews: 236,
    rating: 4.5,
  },
  {
    name: "Weller",
    image_url:
      "https://check24.ge/storage/gastronomy/203/gallery/U8QUw-1626871171-y813u.jpg",
    categories: ["Restaurant", "Bar"],
    price: "$$$",
    reviews: 516,
    rating: 4.8,
  },
  {
    name: "Rooms",
    image_url:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/247821097.jpg?k=f88898da7bb202832bf102d89510700d4574874ef8d10e7ea80adcf6962f910a&o=&hp=1",
    categories: ["Cafe", "Bar"],
    price: "$$$",
    reviews: 2291,
    rating: 4.1,
  },
  {
    name: "Stamba",
    image_url:
      "https://cdn.wallpaper.com/main/styles/responsive_1680w_scale/s3/g_01.jpg",
    categories: ["Restaurant", "Bar", "Cafe"],
    price: "$$$",
    reviews: 1236,
    rating: 4.6,
  },
];

export const RestaurantItem = ({ navigation, ...props }) => (
  <>
    {props.restaurantsData.map((restaurant, index) => (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={{ marginBottom: 30 }}
        onPress={() =>
          navigation.navigate("RestaurantDetail", {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            reviews: restaurant.review_count,
            rating: restaurant.rating,
            categories: restaurant.categories,
          })
        }
      >
        <View
          style={{
            marginTop: 10,
            padding: 15,
            backgroundColor: "white",
          }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      </TouchableOpacity>
    ))}
  </>
);

const RestaurantImage = (props) => (
  <>
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 30 }}>
      <MaterialCommunityIcons name="heart-outline" size={24} color={"white"} />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-40 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }}
    >
      <Text style={{ fontWeight: "500" }}>{props.rating}</Text>
    </View>
  </View>
);
