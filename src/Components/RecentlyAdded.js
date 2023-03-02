import React from 'react'
import { Link} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export const RecentlyAdded = ({RData,Rfunc,Recent,P2,NoResult,Error404}) => {
    let i=P2;
  return (<>
  <ScrollToTop smooth />
            {RData.length===undefined?<div><img style={{marginLeft:"40vh"}} src={Error404} alt="Not Found" /></div>:<div className="container pt-md-5">
            <div className="row">
          <div className="col-lg-12">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Recently</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                </div>
              </div>
              {RData.length!==0?<div className="row">
                {RData.map((Data) => {
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
                            <div className="ep">Ep{Data.episodeNum}</div>
                          </div>
                          <div className="product__item__text">
                            <h5>
                              <Link
                              to='/anime-streaming'
                              onClick={() => {
                                Rfunc(Data)
                              }}
                              >{Data.animeTitle}</Link>
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
          {i!==1?<button className='GButton' onClick={()=>{i--;Recent(i)}}>Page {P2-1}</button>:""}
          {RData.length!==0?<button className='GButton' onClick={()=>{i++;Recent(i)}}>Page {P2+1}</button>:""}
        </div>
      </div>}
  </>  
  )
}
