import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";
import { GlobalStyles } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

const ImagePicker = () => {
  const [image, setImage] = useState(null);
  const pickImageHandler = async () => {
    // No permissions request is necessary for launching the image library
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View>
      <View style={styles.imageContainer}>
        {image ? (
          <Image style={styles.image} source={{ uri: image }} />
        ) : (
          <Text>Pick an Image</Text>
        )}
      </View>
      <OutlinedButton icon="camera" onPress={pickImageHandler}>
        Pick Image
      </OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
