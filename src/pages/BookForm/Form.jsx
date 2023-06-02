import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import './Form.css';

function Form() {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;
  const params = new URLSearchParams(search);
  const data = params.get('data');
  const item = data ? JSON.parse(decodeURIComponent(data)) : null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [day, setDay] = useState('');

  const [cookies, setCookie] = useCookies(['bookingData']);

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      email,
      show: item.show.name,
      day,
      time: item.show.schedule.time,
    };

    setCookie('bookingData', bookingData, { path: '/' });
    navigate('/home');
  };

  return (
    <>
      <div className="container">
        <h2>Book Show</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="show" className="form-label">
              Show:
            </label>
            <input
              type="text"
              id="show"
              className="form-input"
              value={item.show.name}
              required
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input type="date" id="date" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="day" className="form-label">
              Day:
            </label>
            <select
              id="day"
              className="form-input"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
            >
              {item.show.schedule.days.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="time" className="form-label">
              Time:
            </label>
            <input
              type="text"
              id="time"
              className="form-input"
              value={item.show.schedule.time}
              required
              disabled
            />
          </div>
          <button type="submit" className="form-button">
            Book Now
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
