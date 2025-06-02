import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShipmentTable from '../components/ShipmentTable';
import AddShipmentForm from '../components/AddShipmentForm';
import MapDisplay from '../components/MapDisplay';

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);
  const [selectedShipment, setSelectedShipment] = useState(null);

  useEffect(() => {
    axios.get('/api/shipments').then((res) => setShipments(res.data));
  }, []);

  return (
    <div>
      <AddShipmentForm refresh={() => axios.get('/api/shipments').then((res) => setShipments(res.data))} />
      <ShipmentTable shipments={shipments} onSelect={setSelectedShipment} />
      {selectedShipment && <MapDisplay shipment={selectedShipment} />}
    </div>
  );
};

export default Dashboard;