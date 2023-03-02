import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export const Home = ({ Logo, Search }) => {
  const [Asearch, setAsearch] = useState("");
  return (<>
      <ScrollToTop smooth />
      <section style={{ marginTop: "200px"}}>
        <div className="searchPage">
          <div className="headingMainPage">
            <h1 style={{color:"white"}}>Dark Phantom</h1>
            <p style={{color:"white"}}>Project Origin Lite v2.0 Lighter and Faster</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-8">
                <div className="search">
                  <input
                    className="searchTerm"
                    value={Asearch}
                    onChange={(e) => {
                      setAsearch(e.target.value);
                    }}
                    placeholder="Search Here"
                  />
                  <Link
                    to="/search"
                    onClick={() => {
                      Search(Asearch,1);
                    }}
                    className="searchButton"
                  >
                    <i className="fa fa-search"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
            
            <div className="row pt-md-5 mt-md-5 pt-5 mt-5">
              <div className="col-md-5"></div>
              <div className="col-md-2">
              <Link to="/home">
        <button className="HButton-pushable">
          <span className="HButton-shadow"></span>
          <span className="HButton-edge"></span>
          <span className="HButton-front text">Home</span>
        </button>
      </Link>
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
