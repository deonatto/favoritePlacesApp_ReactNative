import { API_KEY } from "@env";

export const getMapPreview = (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${API_KEY}`;
  return url;
};

export const getAddress = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    const address = data.results[0].formatted_address;
    return address;
  }catch(err){
    console.log(err);
  }
};
