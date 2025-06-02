import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapDisplay = ({ shipment }) => {
  const coordinates = shipment.route.map((loc) => loc.split(',').map(Number));
  const center = coordinates[0] || [0, 0];

  return (
    <MapContainer center={center} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {coordinates.map((pos, idx) => <Marker key={idx} position={pos} />)}
      <Polyline positions={coordinates} />
    </MapContainer>
  );
};

export default MapDisplay;