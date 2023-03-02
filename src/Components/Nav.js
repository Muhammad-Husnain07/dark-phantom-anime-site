import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export const Nav = ({Logo,Search}) => {
    const [Asearch, setAsearch] = useState("")
  return (
    <>
    <ScrollToTop smooth />
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "black"}}>
          <div className="container">
            <Link className="navbar-brand" to="/"><img
                src={Logo} alt="Not Found"
                draggable="false" width="90px" height="auto"/></Link>

                <ul className="navbar-nav ms-3" >
                    <li className="nav-item me-3">
                      <Link className="nav-link d-flex align-items-center user-select-auto" style={{color: "white"}} to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link d-flex align-items-center me-3 user-select-auto" style={{color: "white"}} to="/category">Genre
                      </Link>
                  </li>
                  <li className="nav-item" style={{width: "65px"}}>
                      <Link className="nav-link d-flex align-items-center user-select-auto" style={{color: "white"}} to="/about">About</Link>
                  </li>
              </ul>
              <div className="row">
                  <div className="col-md-12 col-lg-12">
                      <div className="container h-100">
                          <div className="d-flex justify-content-center h-100">
                            <div className="searchbar">
                              <input value={Asearch} onChange={(e)=>{setAsearch(e.target.value)}} className="search_input" type="text" name="" placeholder="Search..."/>
                              <Link to="/Search" onClick={()=>{Search(Asearch,1);}} className="search_icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </nav>
    </>
  )
}
