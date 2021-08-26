import React, { Component } from 'react';

class Topbar extends Component {
    render() {
        return (
            <div class= "topbar">
            <div class = "reviews">
            <h2>Reviews</h2>
            <h1>1,281</h1>
          </div>
  
          <div class = "average">
            <h2>Average Rating</h2>
            <h1>4.6</h1>
          </div>
  
          <div class = "analysis">
            <h2>Sentiment Analysis</h2>
            <h1>960</h1>
            <h1>122</h1>
            <h1>321</h1>
          </div>
          </div>
  
        );
    }
}

export default Topbar;