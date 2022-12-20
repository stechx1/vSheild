import { WorldMap } from '../WorldMap';

/* eslint-disable @next/next/no-img-element */
export const LocationSection = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center space-y-4'>
        <h2 className='text-3xl'>8 Worldwide locations</h2>
        <p className='text-sm font-light text-gray-300 text-center'>
          vShield has been working on growing its number of worldwide server
          locations, allowing us to provide our customers with a server that
          meets their needs. We are always looking to expand our location
          offering so if you ever have a need for a new location, let us know
        </p>

        {/* <img src="/images/map.svg" alt="map" /> */}
      </div>
      <WorldMap />
      {/* <img src="/images/world-map.svg" alt="world-map" className='my-4' /> */}
    </>
  );
};
