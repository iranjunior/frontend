export default [
  {
    featureType: "all",
    elementType: "geometry.fill",
    stylers: [{ weight: "2.00" }]
  },
  {
    featureType: "all",
    elementType: "geometry.stroke",
    stylers: [{ color: "#9c9c9c" }, { weight: "3.0"}]
  },
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [{ color: "#f2f2f2" }]
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [{ color: "#ffffff" }]
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [{ color: "#ffffff" }]
  },
  { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
  {
    featureType: "road",
    elementType: "all",
    stylers: [{ saturation: -100 }, { lightness: 45 }]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [{ color: "#46bcec" }, { visibility: "on" }]
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#c8d7d4" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#070707" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#ffffff" }]
  }
];


export const condition = {

  low: [
    "rgba(51,242,0, 0)",
    "rgba(171,242,0, 1)",
    "rgba(161,242,0, 1)",
    "rgba(151,242,0, 1)",
    "rgba(141,242,0, 1)",
    "rgba(131,242,0, 1)",
    "rgba(121,242,0, 1)",
    "rgba(111,242,0, 1)",
    "rgba(101,242,0, 1)",
    "rgba(91,242,0, 1)",
    "rgba(81,242,0, 1)",
    "rgba(71,242,0, 1)"
  ],
  medium:[
    "rgba(255,255,0, 0)",
    "rgba(255,175,0, 1)",
    "rgba(255,175,0, 1)",
    "rgba(255,185,0, 1)",
    "rgba(255,195,0, 1)",
    "rgba(255,205,0, 1)",
    "rgba(255,215,0, 1)",
    "rgba(255,225,0, 1)",
    "rgba(255,235,0, 1)",
    "rgba(255,245,0, 1)"
  ],
  high: [
    "rgba(255,42,0, 0)",
    "rgba(255,42,0, 1)",
    "rgba(255,52,0, 1)",
    "rgba(255,62,0, 1)",
    "rgba(255,72,0, 1)",
    "rgba(255,82,0, 1)",
    "rgba(255,92,0, 1)"

  ]
}