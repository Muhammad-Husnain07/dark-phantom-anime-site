import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export const Main = ({ RData, PData, MData, Showdetail,Rfunc }) => {
  return (
    <>
    <ScrollToTop smooth />
      <div className="container pt-md-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Recently Added</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="btn__all">
                    <Link to="/recently-added" className="primary-btn">
                      View All <span className="arrow_right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
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
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Popular</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="btn__all">
                    <Link to="/popular-anime" className="primary-btn">
                      View All <span className="arrow_right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                {PData.map((Data) => {
                  return (
                    <>
                      <div key={1} className="col-lg-3 col-md-6 col-sm-6">
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
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Movies</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="btn__all">
                    <Link to="/anime-movies" className="primary-btn">
                      View All <span className="arrow_right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                {MData.map((Data) => {
                  return (
                    <>
                      <div key={1} className="col-lg-3 col-md-6 col-sm-6">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
