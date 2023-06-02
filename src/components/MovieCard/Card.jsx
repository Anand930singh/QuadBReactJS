import React from "react";
import Button from "../GenereButton/Button";
import RatingStar from "../RatingStar/Star";
import "./Card.css";

function ResourceCards(props) {

  console.log(props);
  return (
    <div className="card">
      <div className="imageStyle">
        <img src={props.data.show.image.medium} alt="Resource" />
      </div>
      <div className="showName">{props.data.show.name}</div>
      <div className="genereContainer">
        <Button data={props.data.show.genres} />
      </div>
      <div className="ratAndLanguage">
        <div className="ratingContainer">
          <RatingStar average={props.data.show.rating.average} />
        </div>
        <div className="language">{props.data.show.language}</div>
      </div>
    </div>
  );
}

export default ResourceCards;
