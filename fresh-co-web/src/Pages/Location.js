import { useState } from 'react';





function LocationComponent() {
    let [latitude, setLatitude] = useState(null);
    let [longitude, setLongitude] = useState(null);
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
      }
  return (
    <div>
        {latitude != null && longitude != null ? <div>https://www.google.com/maps/place/{latitude},{longitude}</div> : null}
    </div>
  );
}


export default LocationComponent;