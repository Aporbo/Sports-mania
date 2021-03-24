import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Male from './Rectangle.png'
import Female from './female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faFlag,faFutbol,faMars } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons";
import './LeagueDetail.css'
const LeagueDetail = () => {
    const { idLeague} = useParams();
  const [league, setLeague] = useState([]);

 useEffect(()=>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setLeague(data.leagues[0]))
  }, [idLeague])
  const {strLeague,intFormedYear,strFanart1,strTrophy,strSport,strCountry,strBadge,strGender,strBanner,strDescriptionEN,strDescriptionFR}=league;
  let genderImage;
  if(league.strGender==='Female'){
    genderImage=Female;
  }
  else{
      genderImage=Male;
  }
  return (      
        <div>
            <div className="banner-badge">
            <div className="banner-dynamic">
            <img  alt="image" src={strBadge} ></img>
            <img id="fanart" src={strFanart1} alt=""/>
                <img id="trophy" src={strTrophy} alt=""/>
   
    </div>
               <div className="banner-dynamic"  style={{ 
      backgroundImage: `url(${strBanner})` 
    }}>
    {/* <img  alt="image" src={strBadge} ></img> */}
    </div>
            </div>
              
{/* <div className="dynamic-banner" >
<img alt="image" src={strBanner} ></img>
</div> */}
      <div className="main-div" >
<div className="explore-details" >
<div className="top-detail">
    <div className="details" >
            <h3>{strLeague}</h3>
            <p> <FontAwesomeIcon icon={faThumbtack}/> Founded: {intFormedYear}</p>
            <p> <FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</p>
            <p> <FontAwesomeIcon icon={faFutbol}/> Sport type:{strSport}</p> 
            <p> <FontAwesomeIcon icon={faMars}/> Gender:{strGender}</p>
</div>  
            <div  > 
            <img alt="" className="genderImage" src={genderImage} ></img>
            </div>   
        </div>
        <div className="description">
        <p>{strDescriptionEN}</p>
        <p>{strDescriptionFR}</p>
        </div>     
        </div>
        <div className="icons" >
            <div className="icon-sizing" >
            <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitterSquare}/></a>           
            </div>
            <div className="icon-sizing">
            <a href="https://www.youtube.com/"> <FontAwesomeIcon icon={faYoutube}/></a>
            </div>
            <div className="icon-sizing">
            <a href="https://www.facebook.com/"> <FontAwesomeIcon icon={faFacebook}/></a>
            </div>      
        </div>
</div>
        </div>      
    );
};

export default LeagueDetail;