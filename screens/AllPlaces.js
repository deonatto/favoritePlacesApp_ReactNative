import React, { useEffect, useState } from "react";
import PlacesList from "../components/places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

const AllPlaces = () => {
  const isFocused = useIsFocused();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const places = await fetchPlaces();
        setPlaces(places);
      } catch (err) {}
    };
    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={places} />;
};

export default AllPlaces;
