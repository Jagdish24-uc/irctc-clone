import React, { useState } from 'react';
import Navbar from './Navbar';
import TrainList from './TrainList'; 
import './HomePage.css';

function HomePage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [showTrains, setShowTrains] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTrains(true); // Show the train list after form submission
  };

  return (
    <div className="homepage">
      <Navbar />
      <h2>Book Your Train Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            placeholder="Enter Departure Station"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            placeholder="Enter Arrival Station"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Search Trains</button>
      </form>

      {showTrains && <TrainList from={from} to={to} date={date} />}
    </div>
  );
}

export default HomePage;