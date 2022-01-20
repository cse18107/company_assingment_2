import React, { useState, useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

function Details() {
  const child = useRef(null);
  const [Show, setShow] = useState({});
  const params = useParams();


  
    var stringToHTML =  (str)=> {
        var dom = document.createElement('div');
        dom.innerHTML = str;
        console.log(dom);
        child.current=dom!=null?dom:<p></p>;
        console.log(child.current.innerText)
        return (dom);
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



  if(Object.keys(Show).length>0){
     stringToHTML(Show.show.summary);
  }

  return (
     <div className="detail_page_body">
      {Object.keys(Show).length>0 && <div className="detail_page_container">
         <div className="detail_page_content">
          <div className="detail_page_left">
            <div className="detail_page_image">
              <div className="detail_page_image_content">
                <img className="detail_page_logo" src={Show.show.image.original} alt="show" />
              </div>
            </div>
          </div>
          <div className="detail_page_right">
            <div className="detail_page_right_content">
              <div className="details detail_name">
                <div className="label"><h4>Name</h4></div>
                <div className="detail">{Show.show.name}</div>
              </div>
              <div className="details detail_language">
                <div className="label"><h4>Language</h4></div>
                <div className="detail">{Show.show.language}</div>
              </div>
              <div className="details detail_summary">
                <div className="label"><h4>Description</h4></div>
                <div className="detail"><p ref={child}>{child.current.innerText}</p></div>
              </div>
              <div className="details detail_schedule">
                <div className="label"><h4>Time</h4></div>
                <div className="detail">{Show.show.schedule.time || "00:00"}</div>
              </div>
              <div className="details detail_ratting">
                <div className="label"><h4>Rating</h4></div>
                <div className="detail">{Show.show.rating.average || "0"}</div>
              </div>
              <div>
                <button>Book ticket</button>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default Details;
