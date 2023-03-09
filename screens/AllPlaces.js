import React, { useEffect, useState } from "react";
import PlacesList from "../components/places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

const AllPlaces = ({ route }) => {
  const isFocused = useIsFocused();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    if (isFocused && route.params) {
      setPlaces((prevState) => {
        return [...prevState, route.params.place];
      });
    }
  }, [isFocused, route]);

  return <PlacesList places={places}/>;
};

export default AllPlaces;
