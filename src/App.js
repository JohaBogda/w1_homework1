import React, { Component } from 'react';
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div id = "container">
        <div class= "sidebar">
          <ul>
            <li>Dashboard</li>
            <li>Widget</li>
            <li>Reviews</li>
            <li>Customers</li>
            <li>Online Analysis</li>
            <li>Settings</li>
          </ul>
        </div>

        <div class = "reviews">Reviews</div>
        <div class = "average">Average Rating</div>
        <div class = "analysis">Sentiment Analysis</div>
        <div class = "visitors">Website Visiors</div>
        <div class = "empty"></div>
        
      </div>
    );
  }
}