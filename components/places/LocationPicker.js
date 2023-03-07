import React, { useState } from "react";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { View, StyleSheet, Alert, Image, Text } from "react-native";
import OutlinedButton from "../ui/OutlinedButton";
import { GlobalStyles } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { getMapPreview } from "../../util/location";

const LocationPicker = () => {
  const [pickedLocation, setPickedLocation] = useState();
  const navigation = useNavigation();
  const [permission, requestPermission] = useForegroundPermissions();
  //verify if user has permission, if permission is undetermined, ask for permissions
  const verifyPermissions = async () => {
    if (permission.status === PermissionStatus.UNDETERMINED) {
      const permission = await requestPermission();
      return permission.granted;
    }

    if (permission.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant permission to use this app!"
      );
      return false;
    }

    return true;
  };
  //get current location and set latitude and longitude
  const getLocationHandler = async () => {
    const hasPermissions = await verifyPermissions();
    if (hasPermissions) {
      const location = await getCurrentPositionAsync();
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    }
  };
  const pickOnMapHandler = () => {
    navigation.navigate("Map");
  };

  return (
    <View>
      <View style={styles.mapPreview}>
        {pickedLocation ? (
          <Image
            style={styles.mapPreviewImage}
            source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }}
          />
        ) : (
          <Text>No location picked yet</Text>
        )}
      </View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  mapPreviewImage: {
    height: "100%",
    width: "100%",
  },
});
