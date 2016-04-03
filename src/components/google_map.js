import React from 'react';
import {GoogleMapLoader, GoogleMap} from 'react-google-maps';
import {GOOGLE_MAPS_API_KEY} from '../config/keys';

export default (props) => {

  const url = 'https://maps.googleapis.com/maps/api/staticmap?';
  const params = `center=${props.lat},${props.lon}&zoom=12&size=200x200&maptype=roadmap&key=${GOOGLE_MAPS_API_KEY}`;

  const mapUrl = `${url}${params}`;

  return(
    <div className="google-maps">
      <img className="img-rounded" src={mapUrl} />
    </div>
  );
}