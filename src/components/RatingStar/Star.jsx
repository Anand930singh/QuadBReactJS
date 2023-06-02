import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Star.css';

function Star(props) {
  const fullStar = parseInt(props.average / 2);
//   const partialStar = (props.average / 2) % 1;

  const stars = Array.from({ length: 5 }, (_, index) => {
    let starStyle = {};

    if (index < fullStar) {
        starStyle = { color:'orange' };
      }
     else {
        starStyle = { color: 'white' };
      }

    return (
      <div className="star-icon" style={starStyle}>
        <FaStar />
      </div>
    );
  });

  return <div className="ratStars">{stars} &nbsp; {props.average}</div>;
}

export default Star;
