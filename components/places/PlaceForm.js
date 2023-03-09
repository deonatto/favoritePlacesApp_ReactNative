import React, { useCallback, useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";
import Button from "../ui/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import {Place} from '../../models/place';

const PlaceForm = ({ onCreatePlace }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  const changeTitleHandler = (enteredText) => {
    setTitle(enteredText);
  };

  const imageTakenHandler = (imgUri) => {
    setImage(imgUri);
  };
  //use callback hook to avoid unnecessary re-creations
  const locationPickedHandler = useCallback((location) => {
    setLocation(location);
  }, []);
  const savePlaceHandler = () => {
    const place = new Place(title, image, location);
    onCreatePlace(place);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={title}
        />
      </View>
      <ImagePicker onImageTaken={imageTakenHandler} />
      <LocationPicker onLocationPicked={locationPickedHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: GlobalStyles.colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});
