import React, { useState } from 'react';
import axios from 'axios';

const AddShipmentForm = ({ refresh }) => {
  const [form, setForm] = useState({ containerId: '', route: '', currentLocation: '', eta: '', status: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/shipment', { ...form, route: form.route.split(',') }).then(refresh);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Container ID" onChange={(e) => setForm({ ...form, containerId: e.target.value })} />
      <input placeholder="Route (comma-separated)" onChange={(e) => setForm({ ...form, route: e.target.value })} />
      <input placeholder="Current Location" onChange={(e) => setForm({ ...form, currentLocation: e.target.value })} />
      <input placeholder="ETA" onChange={(e) => setForm({ ...form, eta: e.target.value })} />
      <input placeholder="Status" onChange={(e) => setForm({ ...form, status: e.target.value })} />
      <button type="submit">Add Shipment</button>
    </form>
  );
};

export default AddShipmentForm;