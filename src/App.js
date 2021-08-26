import React, { Component } from 'react';
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div class = "container">
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

        <div class = "visitors">
          <h2>Website Visitors</h2>
          <h1>821</h1>
        </div>

        <div class = "empty"></div>
        
      </div>
    );
  }
}