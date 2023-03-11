import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";
import PlaceItem from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";

const PlacesList = ({ places }) => {
  const navigation = useNavigation();

  const selectPlaceHandler = (id) => {
    navigation.navigate("PlaceDetails", {
      placeId: id,
    });
  };

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet!</Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={selectPlaceHandler} />
      )}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    padding: 24,
  },
  fallbackContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  fallbackText: {
    fontSize: 16,
    color: GlobalStyles.colors.primary200,
  },
});
