import React from 'react';

const ShipmentTable = ({ shipments, onSelect }) => (
  <table>
    <thead>
      <tr>
        <th>Container ID</th>
        <th>Status</th>
        <th>Location</th>
        <th>ETA</th>
      </tr>
    </thead>
    <tbody>
      {shipments.map((s) => (
        <tr key={s._id} onClick={() => onSelect(s)}>
          <td>{s.containerId}</td>
          <td>{s.status}</td>
          <td>{s.currentLocation}</td>
          <td>{s.eta}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ShipmentTable;