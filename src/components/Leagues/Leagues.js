import React, { useEffect, useState } from 'react';
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
 import './Leagues.css'
 import { Link } from 'react-router-dom';

const Leagues = (props) => {
    const {strLeague,strSport,idLeague }=props.leagues;
    const [league, setLeague] = useState([]);
 
    useEffect(()=>{
       const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
       fetch(url)
       .then(res=>res.json())
       .then(data=>setLeague(data.leagues[0]))
     }, [idLeague])
    const {strLogo}=league;
    return (
        <div>       
              
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={strLogo} />
  <Card.Body>
    <Card.Title>{strLeague }</Card.Title>
    <Card.Text>
      Sports type:{strSport} 
    </Card.Text>
    <Button variant="outline-success">  <Link to={`/leagues/${idLeague}`}>Explore <FontAwesomeIcon icon={faArrowRight}/></Link>  </Button>

  </Card.Body>
</Card>

        </div>
        
    );
};

export default Leagues;