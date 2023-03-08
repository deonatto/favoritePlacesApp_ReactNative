import React from "react";
import PlaceForm from "../components/places/PlaceForm";

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = (place) => {
    //this is temporary
    navigation.navigate("AllPlaces", { place });
  };
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
