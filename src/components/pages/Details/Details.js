import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

function Details() {
  const [show, setShow] = useState({});
  const [img, setImg] = useState("");
  const [avg, setAvg] = useState("");
  const [time,setTime] = useState("");
  const [summary,setSummary]= useState();
  const params = useParams();
  //console.log(params.id);

  
    var stringToHTML = function (str) {
        var dom = document.createElement('div');
        dom.innerHTML = str;
        console.log(dom);
        return (dom);
    };
  

  useCallback(() => {
    console.log("calling getShows()");
    const filterShow = (id) => {
      //console.log(id.show.id==params.id);
      return id.show.id == params.id;
    };
    const getShows = async () => {
    //   console.log("get");
      try {
        const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const data = await res.json();
        const getShow = data.filter(filterShow);
        console.log(getShow[0]);
        setShow(getShow[0]);
        // setImg(getShow[0].show.image.original);
        //   setAvg(getShow[0].show.rating.average);
        //  //setTime(show);
        // setSummary(getShow[0].show.summary);
        // console.log(show.rating);
      } catch (err) {
        console.log(err);
      }
    };
    getShows();
  }, [params.id]);

  //console.log(show.image);
  console.log(show);

  return (
    <div className="detail_page_body">
      <div className="detail_page_container">
        {show && <div className="detail_page_content">
          <div className="detail_page_left">
            <div className="detail_page_image">
              <div className="detail_page_image_content">
                <img className="detail_page_logo" src={show.image} alt="show" />
              </div>
            </div>
          </div>
          <div className="detail_page_right">
            <div className="detail_page_right_content">
              <div className="details detail_name">
                <div className="label">Name</div>
                <div className="detail">{show.name}</div>
              </div>
              <div className="details detail_language">
                <div className="label">Language</div>
                <div className="detail">{show.language}</div>
              </div>
              <div className="details detail_summary">
                <div className="label">Description</div>
                {/* <div className="detail">{stringToHTML(show.summary)}</div> */}
              </div>
              <div className="details detail_schedule">
                <div className="label">Time</div>
                <div className="detail">{time}</div>
              </div>
              <div className="details detail_ratting">
                <div className="label">Rating</div>
                <div className="detail">{avg}</div>
              </div>
              <div>
                <button>Book ticket</button>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default Details;
