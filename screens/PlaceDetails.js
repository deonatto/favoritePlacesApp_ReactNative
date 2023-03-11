import React, { useEffect, useState } from "react";
import { ScrollView, Image, View, StyleSheet, Text } from "react-native";
import OutLinedButton from "../components/ui/OutlinedButton";
import { GlobalStyles } from "../constants/colors";
import { fetchPlaceDetails } from "../util/database";

const PlaceDetails = ({ navigation, route }) => {
  const id = route.params.placeId;
  const [place, setPlace] = useState();

  useEffect(() => {
    const loadPlace = async () => {
      try {
        const fetchedPlace = await fetchPlaceDetails("bu");
        setPlace(fetchedPlace);
        navigation.setOptions({
          title: fetchedPlace.title,
        });
      } catch (err) {
      }
    };
    loadPlace();
  }, [id]);
  const showOnMapHanddler = () => {
    navigation.navigate("Map", {
      lat: place.location.lat,
      lng: place.location.lng,
    });
  };

  if (!place) {
    return (
      <View>
        <Text>Loading place data...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <Image style={styles.Image} source={{ uri: place.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <OutLinedButton icon="map" onPress={showOnMapHanddler}>
          View on Map
        </OutLinedButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: GlobalStyles.colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
  },
});
