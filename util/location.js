import { API_KEY } from "@env";

export const getMapPreview = (lat, lng) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${API_KEY}`;
  return imagePreviewUrl;
};
