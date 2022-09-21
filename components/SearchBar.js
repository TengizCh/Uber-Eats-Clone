import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import Ionicons from "react-native-vector-icons/Ionicons";

export const SearchBar = ({ cityHandler }) => (
  <View style={{ marginTop: 15, flexDirection: "row" }}>
    <GooglePlacesAutocomplete
      query={{ key: "AIzaSyBFoViv0ml8kX2RPVOGDHjGAShTxbgLK8w" }}
      onPress={(data, details = null) => {
        console.log(data.description);
        const city = data.description.split(",")[0];
        cityHandler(city);
      }}
      placeholder="Search"
      styles={{
        textInput: {
          backgroundColor: "#eee",
          borderRadius: 20,
          fontWeight: "700",
          marginTop: 7,
        },
        textInputContainer: {
          backgroundColor: "#eee",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
        },
      }}
      renderLeftButton={() => (
        <View style={{ marginLeft: 13 }}>
          <Ionicons name="location-sharp" size={24} />
        </View>
      )}
      renderRightButton={() => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 8,
            backgroundColor: "white",
            padding: 9,
            borderRadius: 30,
          }}
        >
          <Ionicons name="time" size={24} style={{ marginRight: 4 }} />
          <Text>Search</Text>
        </View>
      )}
    />
  </View>
);
