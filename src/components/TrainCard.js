import React from 'react';
import './TrainCard.css'; // For styling

function TrainCard({ train }) {
  return (
    <div className="train-card">
      <div className="train-header">
        <h3>{train.trainName} ({train.trainNumber})</h3>
        <p>Runs On: {train.runsOn}</p>
      </div>

      <div className="train-schedule">
        <div className="schedule-item">
          <span className="time">{train.departureTime}</span>
          <span className="station">{train.from}</span>
          <span className="day">{train.departureDay}</span>
        </div>
        <div className="duration">{train.duration}</div>
        <div className="schedule-item">
          <span className="time">{train.arrivalTime}</span>
          <span className="station">{train.to}</span>
          <span className="day">{train.arrivalDay}</span>
        </div>
      </div>

      <div className="train-classes">
        <div className="class">
          <span>Sleeper (SL)</span>
          <button>Refresh</button>
        </div>
        <div className="class">
          <span>AC 3 Tier (3A)</span>
          <button>Refresh</button>
        </div>
        <div className="class">
          <span>AC 2 Tier (2A)</span>
          <button>Refresh</button>
        </div>
        <div className="class">
          <span>AC First Class (1A)</span>
          <button>Refresh</button>
        </div>
      </div>

      <div className="train-footer">
        <p>Please check NTES website or NTES app for actual time before boarding</p>
        <div className="actions">
          <button className="book-now">Book Now</button>
          <button className="other-dates">Other Dates</button>
        </div>
      </div>
    </div>
  );
}

export default TrainCard;