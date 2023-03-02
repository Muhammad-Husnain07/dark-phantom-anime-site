import React from 'react'
import ScrollToTop from "./ScrollToTop";

export const About = () => {
  return (
    <>
    <ScrollToTop smooth />
    <section style={{marginTop: "80px"}}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="text-light text-center pl-md-1 ml-md-2">About the Site</h2>
                  <div className="col-md-12 text-center" style={{backgroundColor:"black",color: "white",padding: "50px",fontFamily: "sans-serif",borderRadius: "20px",border:"2px solid white"}}>
                    <h1>Built</h1>
                    <h4>Dark Phantom is designed to provide anime streaming in a faster and lighter environment with minimalistic design and raw backend.It uses JavaScript library React on the front-end (along with Material UI) and API.This is the 1st build of Dark Phantom. The predecessors were all coded using Bootstrap (a CSS framework).Dark Phantom primary purpose is to provide easiness. Episodes are always released here first before it's released on the main site.Thanks For Your Visit.</h4>
                  </div>
                </div>
              </div>
            </div>        
        </section>
    </>
  )
}
