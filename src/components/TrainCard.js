import React from 'react';
import './TrainCard.css'; // Optional: For styling the card

function TrainCard({ train }) {
  return (
    <div className="train-card">
      <h3>{train.trainName}</h3>
      <p><strong>From:</strong> {train.from}</p>
      <p><strong>To:</strong> {train.to}</p>
      <p><strong>Departure:</strong> {train.departureTime}</p>
      <p><strong>Arrival:</strong> {train.arrivalTime}</p>
      <p><strong>Duration:</strong> {train.duration}</p>
      <p><strong>Price:</strong> ₹{train.price}</p>
    </div>
  );
}

export default TrainCard;