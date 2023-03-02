import React from "react";
import { GenreData } from "./GenreData";
import ScrollToTop from "./ScrollToTop";

export const Category = ({Genre,GData,Showdetail,Gflag,Name,show,changePage,P,Error404,NoResult}) => {
  return (
    <>
    <ScrollToTop smooth />
      <div id="container" style={{marginTop:"15vh"}}>
        <div className="row">
			<div className="col-md-1"></div>
          <div className="col-md-10" style={{color:"white",opacity:"0.8",fontSize:"30px",fontFamily:"sans-serif",border:"1px solid white",borderRadius:"12px"}}>
            <strong>Genre</strong>
            <div className="col-md-10 pt-md-1 pb-md-4 ml-md-5">
              <form>
                <div className="GButton" onClick={()=>{Genre("action",1);show("Action")}} >
                  Action
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("adventure",1);show("Adventure")}} >
                  Adventure
                </div>

                <div className="GButton" onClick={()=>{Genre("cars",1);show("Cars")}} >
                  Cars
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("comedy",1);show("Comedy")}} >
                  Comedy
                </div>

                <div className="GButton" onClick={()=>{Genre("crime",1);show("Crime")}} >
                  Crime
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("dementia",1);show("Dementia")}} >
                  Demantia
                </div>

                <div className="GButton" onClick={()=>{Genre("demons",1);show("Demons")}} >
                  Demons
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("drama",1);show("Drama")}} >
                  Drama
                </div>

                <div className="GButton" onClick={()=>{Genre("ecchi",1);show("Ecchi")}} >
                  Ecchi
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("dub",1);show("Dub")}} >
                  Dub
                </div>

                <div className="GButton" onClick={()=>{Genre("family",1);show("Family")}} >
                  Family
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("fantasy",1);show("Fantasy")}} >
                  Fantasy
                </div>

                <div className="GButton" onClick={()=>{Genre("game",1);show("Game")}} >
                  Game
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("gourmet",1);show("Gourmet")}} >
                  Gourmet
                </div>

                <div className="GButton" onClick={()=>{Genre("harem",1);show("Harem")}} >
                  Harem
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("historical",1);show("Historical")}} >
                  Historical
                </div>

                <div className="GButton" onClick={()=>{Genre("horror",1);show("Horror")}} >
                  Horror
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("josei",1);show("Josei")}} >
                  Josei
                </div>

                <div className="GButton" onClick={()=>{Genre("kids",1);show("Kids")}} >
                  Kids
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("magic",1);show("Magic")}} >
                  Magic
                </div>

                <div className="GButton" onClick={()=>{Genre("martial-arts",1);show("Martial Arts")}} >
                  Martial Arts
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("mecha",1);show("Mecha")}} >
                  Mecha
                </div>

                <div className="GButton" onClick={()=>{Genre("military",1);show("Military")}} >
                  Military
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("mystery",1);show("Mystery")}} >
                  Mystery
                </div>

                <div className="GButton" onClick={()=>{Genre("parody",1);show("Parody")}} >
                  Parody
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("police",1);show("Police")}} >
                  Police
                </div>

                <div className="GButton" onClick={()=>{Genre("psychological",1);show("Psychological")}} >
                  Psychological
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("romance",1);show("Romance")}} >
                  Romance
                </div>

                <div className="GButton" onClick={()=>{Genre("samurai",1);show("Samurai")}} >
                  Samurai
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("school",1);show("School")}} >
                  School
                </div>

                <div className="GButton" onClick={()=>{Genre("sci-fi",1);show("Sci-fi")}} >
                  Sci-fi
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("seinen",1);show("Seinen")}} >
                  Seinen
                </div>

                <div className="GButton" onClick={()=>{Genre("shoujo",1);show("Shoujo")}} >
                  Shoujo
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("shoujo-ai",1);show("Shoujo AI")}} >
                  Shoujo AI
                </div>

                <div className="GButton" onClick={()=>{Genre("shounen",1);show("Shounen")}} >
                  Shounen
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("shounen-ai",1);show("Shounen AI")}} >
                  Shounen AI
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("space",1);show("Space")}} >
                  Space
                </div>

                <div className="GButton" onClick={()=>{Genre("sports",1);show("Sports")}} >
                  Sports
                </div>

                <div className="GButton m-md-1" onClick={()=>{Genre("super-power",1);show("Super Power")}} >
                  Super Power
                </div>

                <div className="GButton" onClick={()=>{Genre("supernatural",1);show("Super Natural")}} >
                  Super Natural
                </div>
                <div className="GButton m-md-1" onClick={()=>{Genre("suspense",1);show("Suspense")}} >
                  Suspense
                </div>
				<div className="GButton" onClick={()=>{Genre("thriller",1);show("Thriller")}} >
                  Thriller
                </div>
				<div className="GButton m-md-1" onClick={()=>{Genre("vampire",1);show("Vampire")}} >
                  Vampire
                </div>
				<div className="GButton" onClick={()=>{Genre("yaoi",1);show("Yaoi")}} >
                  Yaoi
                </div>
				<div className="GButton m-md-1" onClick={()=>{Genre("yuri",1);show("Yuri")}} >
                  Yuri
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
	  {Gflag===true?<GenreData P={P} Error404={Error404} NoResult={NoResult} changePage={changePage} Name={Name} GData={GData} Showdetail={Showdetail}/>:""}
    </>
  );
};
