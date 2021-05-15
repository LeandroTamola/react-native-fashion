import React from "react";
import { Text, View } from "react-native";

interface OutfitIdeasProps {}

const OutfitIdeas = ({}: OutfitIdeasProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>OutfitIdeas Screen</Text>
    </View>
  );
};

export default OutfitIdeas;
