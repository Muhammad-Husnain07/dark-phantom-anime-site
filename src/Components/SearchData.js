import React from "react";
import ScrollToTop from "./ScrollToTop";

export const SearchData = ({ SData, Showdetail,Search,P4,SName,NoResult,Error404 }) => {
  let i=P4;

  return (
    <>
    <ScrollToTop smooth />
      {SData.length===undefined?<div><img style={{marginLeft:"40vh"}} src={Error404} alt="Not Found" /></div>:<div className="container pt-md-5 mt-md-5" style={{marginTop:"5vh"}}>
        <div className="row">
          <div className="col-lg-12">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Search {SName}</h4>
                  </div>
                </div>
              </div>
              {SData.length!==0?<div className="row">
                {SData.map((Data) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="product__item">
                          <div className="product__item__pic set-bg">
                            <img
                              className="product__item__pic set-bg"
                              alt="Not Found"
                              src={Data.animeImg}
                            />
                            <div className="ep">{Data.status}</div>
                          </div>
                          <div className="product__item__text">
                            <h5>
                              <button
                                onClick={() => {
                                  Showdetail(Data.animeId);
                                }}
                              
                              >
                                {Data.animeTitle}
                              </button>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>:<div><img style={{marginLeft:"40vh"}} src={NoResult} alt="Not Found" /></div>}
            </div>
          </div>
          {i!==1?<button className='GButton' onClick={()=>{i--;Search(SName,i)}}>Page {P4-1}</button>:""}
          {SData.length!==0?<button className='GButton' onClick={()=>{i++;Search(SName,i)}}>Page {P4+1}</button>:""}
        </div>
      </div>}
    </>
  );
};
