import React from "react";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";

export const Stream = ({ DData,Error404 }) => {
  const [Url, setUrl] = useState("");
  const [Ep, setEp] = useState("");

  async function getUrl(U) {
    fetch(`https://gogoanime.consumet.org/vidcdn/watch/${U}`)
      .then((response) => response.json())
      .then((cdnlink) => setUrl(cdnlink.Referer));
  }
  
  return (
    <>
    <ScrollToTop smooth />
      {DData.length?<div><img style={{marginLeft:"40vh"}} src={Error404} alt="Not Found" /></div>:<section className="anime-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <div className="anime__details__episodes pt-md-5 pt-sm-5 pt-5">
                <div className="section-title">
                  <h5>Episodes List</h5>
                </div>{DData.episodesList.length!==0?DData.episodesList.map((episodesList)=>{return <>
                <button key={1}
                  onClick={() => {
                    getUrl(episodesList.episodeId);
                    setEp(episodesList.episodeNum);
                  }}
                >
                  {episodesList.episodeNum}
                </button></>}):<h6 style={{color:"white"}}>Upcoming</h6>}
              </div>
              {Url!==""?<><h2 style={{ color: "white", fontFamily: "verdana" }}>
                {DData.animeTitle + " Ep "+ Ep}
              </h2>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                allow="fullscreen"
                width="1024px"
                height="576px"
                scrolling="no"
                  title="Stream Episodes"
                  src={Url}
                 
                />
              </div></>:""}
              
            </div>
          </div>
        </div>
      </section>}
    </>
  );
};

export default Stream;
