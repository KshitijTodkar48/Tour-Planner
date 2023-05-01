import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';

function GoogleMap() {
    const [location, setLocation] = useState('');
  
    const mapOptions = {
      center: {
        lat: 37.7749,
        lng: -122.4194
      },
      zoom: 10
    };
  
    const onMapLoaded = (map, maps) => {
      // Use the map and maps objects to customize the map as needed
    };
  
    return (
      <div>
        <input type="text" placeholder="Enter location name" value={location} onChange={(e) => setLocation(e.target.value)} />
        <div style={{ height: '500px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: ''}}
            defaultCenter={mapOptions.center}
            defaultZoom={mapOptions.zoom}
            onGoogleApiLoaded={({ map, maps }) => onMapLoaded(map, maps)}
          />
        </div>
      </div>
    );
  }

export default GoogleMap;
