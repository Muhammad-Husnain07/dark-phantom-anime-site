import React from 'react'
import { Link} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export const PopularAnime = ({PData,Showdetail,Popular,P1,Error404,NoResult}) => {
    let i=P1
  return (<>
  <ScrollToTop smooth />
            {PData.length===undefined?<div><img style={{marginLeft:"40vh"}} src={Error404} alt="Not Found" /></div>:<div className="container pt-md-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Popular</h4>
                  </div>
                </div>
              </div>
              {PData.length!==0?<div className="row">
                {PData.map((Data) => {
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
          {i!==1?<button className='GButton' onClick={()=>{i--;Popular(i)}}>Page {P1-1}</button>:""}
          {PData.length!==0?<button className='GButton' onClick={()=>{i++;Popular(i)}}>Page {P1+1}</button>:""}
        </div>
      </div>}
  </>  
  )
}
