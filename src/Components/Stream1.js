import React from "react";
import { useState,useEffect } from "react";
import ScrollToTop from "./ScrollToTop";

export const Stream1 = ({ Data,Error404 }) => {
  const [Url, setUrl] = useState("");

    useEffect(() => {
      fetch(`https://gogoanime.consumet.org/vidcdn/watch/${Data.episodeId}`)
      .then((response) => response.json())
      .then((cdnlink) => setUrl(cdnlink.Referer));
    }, [Data])
  
  return (
    <>
    <ScrollToTop smooth />
      {Url===undefined?<div><img style={{marginLeft:"40vh"}} src={Error404} alt="Not Found" /></div>:<>{Url!==""?<section className="anime-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
             <h2 style={{ color: "white", fontFamily: "verdana" }}>
                {Data.animeTitle + " Ep "+ Data.episodeNum}
              </h2>
              <div className="embed-responsive embed-responsive-16by9" style={{overflowY:"hidden"}}>
                <iframe
                  allow="fullscreen"
                  width="1024px"
                  height="576px"
                  scrolling="no"
                    title="Stream Episodes"
                    src={Url}
                />
              </div>
            </div>
          </div>
        </div>
      </section>:""}</>}
    </>
  );
};

export default Stream1;
