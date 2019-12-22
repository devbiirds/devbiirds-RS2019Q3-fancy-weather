export default function CreateMap(lng, lat) {
// eslint-disable-next-line no-undef
  document.querySelector('.mapsbox__latitude').textContent = `Latitude :${lat}`;
  // eslint-disable-next-line no-undef
  document.querySelector('.mapsbox__longitude').textContent = `Longitude :${lng}`;
  // eslint-disable-next-line no-undef
  mapboxgl.accessToken = 'pk.eyJ1IjoidmFkaW00NHF3ZSIsImEiOiJjazRkN3hxa3UwMDllM2RuOWo1d2h0dmkwIn0.BsvJKILLQ27kjexe1vsXpA';
  let map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [lng, lat], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
};