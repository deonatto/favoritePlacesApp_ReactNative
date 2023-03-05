import React from "react";
import { View, Button, Alert } from "react-native";
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
} from "expo-image-picker";

const ImagePicker = () => {
  const takeImageHandler = async () => {
    const image = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
  };
  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;
