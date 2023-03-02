import React from 'react'
import { Redirect} from "react-router-dom";
import { useState} from "react";
import ScrollToTop from "./ScrollToTop";

export const Details = ({DData,Error404}) => {
    const [flag, setflag] = useState(false);
    
  return (
    <>
    <ScrollToTop smooth />
    {DData===undefined?<div><img style={{marginLeft:"40vh"}} src={Error404} alt="Not Found" /></div>:<><div className="container col-md-12 mt-md-5 p-md-5">
                    <div className="anime__details__content">
                <div className="row">
                    <div className="col-lg-3">
                        <img className="anime__details__pic set-bg" alt='Not Found' src={DData.animeImg}/>
                    </div>
                    <div className="col-lg-9">
                        <div className="anime__details__text">
                            <div className="anime__details__title">
                                <h3>{DData.animeTitle}</h3>
                                <span>{DData.othernames}</span>
                            </div>
                            <p>{DData.synopsis}</p>
                            <div className="anime__details__widget">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <ul>
                                            <li><span>Type:</span>{DData.type}</li>
                                            <li><span>Release Year:</span>{DData.releasedDate}</li>
                                            <li><span>Status:</span>{DData.status}</li>
                                            <li><span>Genre:</span>{DData.genres.map((DData)=>{
                                                return <>{DData} {" "}</>;
                                            })}</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <ul>
                                            
                                            <li><span>Total Episodes:</span>{DData.totalEpisodes!=="0"?DData.totalEpisodes:<span style={{color:"white"}}>?</span>}</li>
                                            <li><span>Quality:</span> HD</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="anime__details__btn">
                                <button className="btn" onClick={()=>{
                                    setflag(true)
                                }}>Watch Now</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {flag===true?<Redirect to='/streaming'/>:""}</>}
    </>
  )
}
