# frontend
The Cargo Shipment Tracker is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to track and manage cargo shipments efficiently. This project is beginner-friendly and serves as a great learning resource for full-stack development.
 Features
Backend (Node.js + Express + MongoDB)
GET /api/shipments – Retrieve all shipments

GET /api/shipment/:id – Get a specific shipment by ID

POST /api/shipment – Add a new shipment with container ID, route, location, ETA, and status

POST /api/shipment/:id/update-location – Update a shipment’s current location

GET /api/shipment/:id/eta – Get the ETA of a specific shipment

MongoDB Data Model – Each shipment contains: containerId, route (array), currentLocation, ETA, status

🖥️ Frontend (React + Redux)
Dashboard View – Tabular display of all shipments with key details (container ID, status, location, ETA)

Add Shipment Form – Allows users to input container ID, route, location, ETA, and status

Map Integration – Visualize shipment route and location using Leaflet.js

Click to Track – Select any shipment in the table to view it on the map

📦 Folder Structure
cargo-tracker-backend/ – Node.js server, Express routes, MongoDB models

cargo-tracker-frontend/ – React app with shipment dashboard, form, and map

🌐 Technologies Used
MongoDB (Database)

Express.js (Backend Framework)

React.js (Frontend Library)

Node.js (Runtime Environment)

Axios (HTTP Requests)

React Leaflet (Map Integration)

dotenv (Environment Configuration)
