import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/GenereButton/Button";
import RatingStar from "../../components/RatingStar/Star";
import Navigate_button from "../../components/Button/Navigate_button";
import { useNavigate } from "react-router-dom";

import "./ShowDetails.css";

function ShowDetails() {
  const navigate = useNavigate();

  const location = useLocation();
  const { search } = location;
  const params = new URLSearchParams(search);
  const data = params.get("data");
  const item = data ? JSON.parse(decodeURIComponent(data)) : null;

  console.log(item);

  const handleBook=(item)=>{
      navigate(`/form/${item.show.id}?data=${encodeURIComponent(JSON.stringify(item))}`);
  };

  return (
    <div className="show">
      <div className="detailsCard">
        <div className="detailsCardImg">
          <img src={item.show.image.medium} />
        </div>
        <div className="detailsText">
          <div className="movieName">{item.show.name}</div>
          <div className="genereContainer">
            <Button data={item.show.genres} />
          </div>
          <div className="ratAndLanguage2">
            <div className="ratingContainer2">
              <RatingStar average={item.show.rating.average} />
            </div>
            <div className="language2">{item.show.language}</div>
          </div>
          <div
            className="summary"
            dangerouslySetInnerHTML={{ __html: item.show.summary }}
          ></div>
          <div className="runtime">
            <h3 style={{ display: "inline" }}>Run Time :</h3>{" "}
            {item.show.runtime}
          </div>
          <div className="premiered">
            <h3 style={{ display: "inline" }}>Premiered :</h3>{" "}
            {item.show.premiered}
          </div>
          <div className="timeAndBook">
            <div className="schedule">
              <div>
                {item.show.schedule.days.map((item, index) => (
                  <span className="days">{item}</span>
                ))}
              </div>
              <div className="time">
                <h3 style={{ display: "inline" }}>Time :</h3>({" "}
                {item.show.schedule.time})
              </div>
            </div>
            <div className="nav_button" onClick={()=>handleBook(item)}>
              <Navigate_button data={"Book Show"}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;
