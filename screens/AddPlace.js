import React from "react";
import PlaceForm from "../components/places/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = async (place) => {
    try {
      await insertPlace(place);
      //this is temporary
      navigation.navigate("AllPlaces");
    } catch (err) {}
  };
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
