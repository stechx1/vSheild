import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

import ReactTooltip from 'react-tooltip';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

export const WorldMap = () => {
  const [content, setContent] = useState('');

  const markers = [
    {
      markerOffset: -15,
      name: 'Montreal, Canada',
      coordinates: [-73.561668, 45.508888],
    },
  ];

  return (
    <div>
      <ReactTooltip>{content}</ReactTooltip>
      <ComposableMap className=''>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography fill='#fff' key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker data-tip={content}
            key={name}
            coordinates={coordinates}
            onMouseEnter={() => {
              setContent(name);
            }}
            onMouseLeave={() => {
              setContent("");
            }}
          >
            <circle r={5} fill='#F00' stroke='#000' strokeWidth={1} />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};
