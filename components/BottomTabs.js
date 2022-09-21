import { Text, TouchableOpacity, View } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon name="home" text="Home" />
      <Icon name="search" text="Search" />
      <Icon name="shopping-bag" text="Grocery" />
      <Icon name="receipt" text="Orders" />
      <Icon name="user" text="Account" />
    </View>
  );
};

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.name}
        size={25}
        style={{ marginBottom: 3, alignSelf: "center" }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
