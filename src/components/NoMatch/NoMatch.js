import React from 'react';
import './NoMatch.css'
const NoMatch = () => {
    return (
        <div className="error" >
            <h2>opps!</h2>
            <h3>Something went wrong</h3>
            <p>please try again</p>
        </div>
    );
};

export default NoMatch;