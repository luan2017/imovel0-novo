import { NextPage } from 'next';
import React, { useState } from 'react';
import ReactMapGl, {Marker, Popup} from 'react-map-gl';
import { SearchProps } from '../../types/search';
import * as geolib from 'geolib';


const Map: NextPage<{searchResults: Array<SearchProps>}> = ({searchResults}) => {
    const [selectedLocation, setSelectedLocation] = useState<SearchProps | {}>({});

//    Transform the search results objectinto the
//    latitude: {00.000000, longitude: 00.000000}
//    object

  const coordinates = searchResults?.map(result => ({
    latitude: result.lat || "",
    longitude: result.long || "",
  }))

  // The latitude and longitude of the center of locations coordinates
  const center = geolib.getCenter(coordinates);

  const [viewPort, sertViewPort] = useState({
    latitude:  center && center.latitude,
    longitude: center && center.longitude,
    zoom: 11,
    width: '100%',
    height: '100%',
  })

  return (
    <ReactMapGl
    mapStyle="mapbox://styles/fabideia/cleugbsvd000e01p3krcu7ibz"
    mapboxAccessToken={process.env.mapbox_key}
    onMove={(ev) => sertViewPort({...ev.viewState, width: '100%', height: '100%'})}
    {...viewPort}
  >
    {searchResults?.map((result) => (
        <div key={result.long} >
            <Marker 
                longitude={result.long} 
                latitude={result.lat} 
            > 
              <p
              role='img'
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer text-2xl animate-bounce'
              aria-label='push-pin' 
              >📌</p>
              {selectedLocation.long === result.long ?  (
                  <Popup
                  latitude={result.lat || 0}
                  longitude={result.long || 0}
                  onClose={() => setSelectedLocation({})}
                  closeOnClick={true}
                  anchor="bottom"
                  >
                      {result.title}
                  </Popup>
              ) : false}
            </Marker>
        </div>
    ))}
  </ReactMapGl>
  );
}

export default Map;