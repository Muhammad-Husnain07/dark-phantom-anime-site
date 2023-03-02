import React from 'react'
import { Link} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export const AnimeMovies = ({MData,Showdetail,Movies,P3,NoResult,Error404}) => {
    let i=P3
  return (<>
  <ScrollToTop smooth />
            {MData.length===undefined?<div><img style={{marginLeft:"40vh"}} src={Error404} alt="Not Found" /></div>:<div className="container pt-md-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Movies</h4>
                  </div>
                </div>
              </div>
              {MData.length!==0?<div className="row">
                {MData.map((Data) => {
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
                            <div className="ep">{Data.releasedDate}</div>
                          </div>
                          <div className="product__item__text">
                            <h5>
                              <Link
                                onClick={() => {
                                  Showdetail(Data.animeId);
                                }}
                              
                              >
                                {Data.animeTitle}
                              </Link>
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
          {i!==1?<button className='GButton' onClick={()=>{i--;Movies(i)}}>Page {P3-1}</button>:""}
          {MData.length!==0?<button className='GButton' onClick={()=>{i++;Movies(i)}}>Page {P3+1}</button>:""}
        </div>
      </div>}
  </>  
  )
}
