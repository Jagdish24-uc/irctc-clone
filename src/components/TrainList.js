import React from 'react';
import TrainCard from './TrainCard';
import TrainData from '../TrainData.json'; // Import the dummy data

function TrainList({ from, to, date }) {
  // Filter trains based on the "from" and "to" locations
  const filteredTrains = TrainData.filter(
    (train) => train.from === from && train.to === to
  );

  return (
    <div className="train-list">
      <h2>Available Trains</h2>
      {filteredTrains.length > 0 ? (
        filteredTrains.map((train) => (
          <TrainCard key={train.id} train={train} />
        ))
      ) : (
        <p>No trains available for the selected route.</p>
      )}
    </div>
  );
}

export default TrainList;