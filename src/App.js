import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "./IMG/Logo.png";
import NoResult from "./IMG/No_Result.png"
import Error404 from "./IMG/404.png"
import "./css/style.css";
import ScrollToTop from "./Components/ScrollToTop";
import { Home } from "./Components/Home.js";
import { Stream } from "./Components/Stream.js";
import { Stream1 } from "./Components/Stream1.js";
import { Main } from "./Components/Main.js";
import { Details } from "./Components/Details.js";
import { SearchData } from "./Components/SearchData.js";
import { Category } from "./Components/Category.js";
import { BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import { PopularAnime } from "./Components/PopularAnime";
import { RecentlyAdded } from "./Components/RecentlyAdded";
import { AnimeMovies } from "./Components/AnimeMovies";
import { Nav } from "./Components/Nav";
import { About } from "./Components/About";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  const [Dflag, setDflag] = useState(false);
  const [Gflag, setGflag] = useState(false);
  const [RData, setRData] = useState([
    {
      episodeId: "",
      animeTitle: "",
      episodeNum: "",
      subOrDub: "",
      animeImg: "",
      episodeUrl: "",
    },
  ]);

  const [GData, setGData] = useState([
    {
      animeId: "",
      animeTitle: "",
      animeImg: "",
      releasedDate: "",
      animeUrl: ""
  },
  ]);

  const [PData, setPData] = useState([
    {
      animeId: "",
      animeTitle: "",
      animeImg: "",
      releasedDate: "",
      animeUrl: "",
    },
  ]);

  const [SData, setSData] = useState([{
    animeId: "",
    animeTitle: "",
    animeUrl: "",
    animeImg: "",
    status: ""
}]);

  const [MData, setMData] = useState([
    {
      animeTitle: "",
      imgUrl: "",
      animeId: "",
      status: "",
    },
  ]);

  const [DData, setDData] = useState("")
  useEffect(() => {
    setDflag(false);
  }, [DData])

  const [P2, setP2] = useState(1)

  async function Recent(p) {
    setP2(p)
     axios
      .get(`https://gogoanime.consumet.org/recent-release?page=${p===1||p===undefined?()=>"1":p}`)
      .then((response) => {
        setRData(response.data);
      });
  }
  const [P1, setP1] = useState(1)
    
  async function Popular(p) {
    setP1(p)
     axios
      .get(`https://gogoanime.consumet.org/popular?page=${p===1||p===undefined?()=>"1":p}`)
      .then((response) => {
        setPData(response.data);
      });
  }
  const [SName,setSName]=useState("")
  const [P4, setP4] = useState(1)
  async function Search(e,p) {
    setP4(p);
    setSName(e);
     axios
      .get(`https://gogoanime.consumet.org/search?keyw=${e}&page=${p===1||p===undefined?()=>"1":p}`)
      .then((response) => {
        setSData(response.data);
      });
  }
  const [P, setP] = useState(1)
  async function Genre(e,p) {
    setP(p);
    axios
     .get(`https://gogoanime.consumet.org/genre/${e}?page=${p===1||p===undefined?()=>"1":p}`)
     .then((response) => {
      
       setGData(response.data);
       setGflag(true);
     })
 }
 const changePage=(e,p)=>
 {
    Genre(e,p)
 }
 const [Name, setName] = useState("")
 function show(e)
 {
  setName(e);
 }
 
 const [P3, setP3] = useState(1)
  async function Movies(p) {
    setP3(p);
     axios
      .get(`https://gogoanime.consumet.org/anime-movies?page=${p===1||p===undefined?()=>"1":p}`)
      .then((response) => {
        setMData(response.data);
      });
  }

  async function Detail(e) {
    let res = await axios.get(`https://gogoanime.consumet.org/anime-details/${e}`)
         if(res.data!==DData || DData===undefined){
          setDData(res.data);
         setDflag(true);
        } 
  }
  const [R_Ep, setR_Ep] = useState("")
  const Rfunc=(Data)=>{
    setR_Ep(Data);
  }
  
  useEffect(() => {
    let p=1
    Movies(p);
    Recent(p);
    Popular(p);
  }, [])

  const Showdetail=(e)=>{
          Detail(e);    
  }

  useEffect(() => {
    setLoading(true)
    spinner.style.display="flex"
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = "none";
        setLoading(false);
      }, 3000);
    }
  }, [GData,SData,DData,RData,MData,PData,R_Ep])

  return ( loading !== true ?<>
      <Router>
      {Dflag===true?<Redirect to="/detail" />:""}
      <ScrollToTop smooth setLoading={setLoading}/>
        <Nav Logo={Logo} Search={Search}/>
        <Switch>
          <Route exact path="/" component={()=><Home Logo={Logo} Search={Search}/> }/>
          <Route exact path="/home" component={()=><Main RData={RData} PData={PData} MData={MData} Recent={Recent} Showdetail={Showdetail} Search={Search} Rfunc={Rfunc}/>}/>
          <Route exact path="/detail" component={()=><Details Error404={Error404} DData={DData} />}/>
          <Route exact path="/search" component={()=><SearchData Error404={Error404} NoResult={NoResult} SData={SData} SName={SName} Showdetail={Showdetail} A Search={Search} P4={P4}/>}/>
          <Route exact path="/category" component={()=><Category Error404={Error404} NoResult={NoResult} P={P} changePage={changePage} show={show} Name={Name} GData={GData} Genre={Genre} Gflag={Gflag} Showdetail={Showdetail}/>}/>
          <Route exact path="/streaming" component={()=><Stream DData={DData} Error404={Error404}/> }/>
          <Route exact path="/anime-streaming" component={()=><Stream1 Data={R_Ep} Error404={Error404}/>}/>
          <Route exact path="/popular-anime" component={()=><PopularAnime Error404={Error404} NoResult={NoResult} Popular={Popular} Showdetail={Showdetail} PData={PData} P1={P1}/>}/>
          <Route exact path="/recently-added" component={()=><RecentlyAdded Error404={Error404} NoResult={NoResult} Recent={Recent}  RData={RData} P2={P2}/>}/>
          <Route exact path="/anime-movies" component={()=><AnimeMovies Error404={Error404} NoResult={NoResult} Movies={Movies} Showdetail={Showdetail} MData={MData} P3={P3}/>}/>
          <Route exact path="/about" component={()=><About/>}/>
        </Switch>
        <div className="myfooter">© Dark Phantom | Project Origin Lite v1.0&nbsp;(2022)</div>
      </Router></>:""
  );
}

export default App;
