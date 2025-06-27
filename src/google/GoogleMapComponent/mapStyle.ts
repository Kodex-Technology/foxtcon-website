export const landOnlyStyle: google.maps.MapTypeStyle[] = [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      { visibility: "on" },
      { color: "#ffffff" }, // Make water white to match background
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      { visibility: "on" },
      { color: "#EAEAEC" }, // Light gray for land
    ],
  },
];
