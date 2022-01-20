import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import { useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  const child = useRef(null);
  const [Show, setShow] = useState({});
  const [model, setModel] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sits, setSits] = useState("");
  const params = useParams();

  var stringToHTML = (str) => {
    var dom = document.createElement("div");
    dom.innerHTML = str;
    console.log(dom);
    child.current = dom != null ? dom : <p></p>;
    console.log(child.current.innerText);
    return dom;
  };

  useEffect(() => {
    console.log("calling getShows()");
    const filterShow = (id) => {
      return id.show.id == params.id;
    };
    const getShows = async () => {
      try {
        const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const data = await res.json();
        console.log(data);
        let getShow = [];
        getShow = data.filter(filterShow);
        console.log(getShow);
        setShow(getShow[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getShows();
  }, []);

  const book = (showName,time,day,rating) => {
    console.log("name " + name);
    time=time==null?"00:00":time;
    localStorage.setItem(
      "Details",
      JSON.stringify({ name,time,day,rating, age, sits, showName })
    );
    //setModel(false);
    navigate("/");
  };

  const setPersonName = (e) => {
    setName(e.target.value);
    console.log(e);
  };
  const setPersonAge = (e) => {
    setAge(e.target.value);
  };
  const setPersonSits = (e) => {
    setSits(e.target.value);
  };

  const Model = (
    <div className="model" onClick={() => setModel(!model)}>
      {Object.keys(Show).length > 0 && (
        <div className="model_container">
          <div className="model_content">
            <div className="model_content_left">
              <img src={Show.show.image.medium} alt="img" />
            </div>
            <div className="model_content_right">
              <div className="model_content_right_content">
                <div
                  className="model_name model_contents"
                  style={{ display: "flex" }}
                >
                  <p>Name</p>
                  {Show.show.name}
                </div>
                <div
                  className="model_rating model_contents"
                  style={{ display: "flex" }}
                >
                  <p>Rating</p>
                  {Show.show.rating.average || "0"}
                </div>
                <div
                  className="model_time model_contents"
                  style={{ display: "flex" }}
                >
                  <p>Time</p>
                  {Show.show.schedule.time || "00:00"}
                </div>
                <div
                  className="model_date model_contents"
                  style={{ display: "flex" }}
                >
                  <p>Day</p>
                  {Show.show.schedule.day || "Monday"}
                </div>
                <input
                  onChange={setPersonSits}
                  placeholder="Enter number of name"
                />
                <div
                  className="name_age"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <input
                    type="text"
                    onChange={setPersonName}
                    placeholder="Enter number of sits"
                    style={{ width: "47%" }}
                  />
                  <input
                    style={{ width: "45%" }}
                    onChange={setPersonAge}
                    placeholder="Enter your age"
                  />
                </div>

                <button className="submit" onClick={() => book(Show.show.name,Show.show.schedule.time,Show.show.schedule.day,Show.show.rating.average)}>Book</button>
                <button className="cancel"onClick={() =>setModel(!model)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  if (Object.keys(Show).length > 0) {
    stringToHTML(Show.show.summary);
  }

  return (
    <div className="detail_page_body">
      {model && Model}
      {Object.keys(Show).length > 0 && (
        <div className="detail_page_container">
          <div className="detail_page_content">
            <div className="detail_page_left">
              <div className="detail_page_image">
                <div className="detail_page_image_content">
                  <img
                    className="detail_page_logo"
                    src={Show.show.image.original}
                    alt="show"
                  />
                </div>
              </div>
            </div>
            <div className="detail_page_right">
              <div className="detail_page_right_content">
                <div className="details detail_name">
                  <div className="label">
                    <h4>Name</h4>
                  </div>
                  <div className="detail">{Show.show.name}</div>
                </div>
                <div className="details detail_language">
                  <div className="label">
                    <h4>Language</h4>
                  </div>
                  <div className="detail">{Show.show.language}</div>
                </div>
                <div className="details detail_summary">
                  <div className="label">
                    <h4>Description</h4>
                  </div>
                  <div className="detail">
                    <p ref={child}>{child.current.innerText}</p>
                  </div>
                </div>
                <div className="details detail_schedule">
                  <div className="label">
                    <h4>Time</h4>
                  </div>
                  <div className="detail">
                    {Show.show.schedule.time || "00:00"}
                  </div>
                </div>
                <div className="details detail_ratting">
                  <div className="label">
                    <h4>Rating</h4>
                  </div>
                  <div className="detail">
                    {Show.show.rating.average || "0"}
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => setModel(!model)}
                    className="detail_button"
                  >
                    Book ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
