import React, { useEffect, useState } from 'react';
import Leagues from '../../components/Leagues/Leagues';
import './Home.css'
const Home = () => {
    const [leagues,setLeagues]= useState([]);

  useEffect(()=>{
     fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
     .then (res =>res.json())
     .then(data=>setLeagues(data.leagues.slice(2,14)))
  },[])
    return (    
              <div >
                 <div className="banner" style={{ 
      backgroundImage: `url("http://www.f-covers.com/cover/european-football-facebook-cover-timeline-banner-for-fb.jpg")`
    }}>
     <h1>Know Football Leagues</h1>
    </div>
                <div className="home">
                {
       leagues.map(leagues=> <Leagues leagues={leagues}></Leagues>)
       }    
                </div>
             
        </div>
       
    );
};

export default Home;