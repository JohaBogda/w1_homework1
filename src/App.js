import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Bottombar from "./Bottombar"
import "./App.css"

export default class App extends Component {
  render() {
    return (
<div class = "container">
<Sidebar/>
<Topbar/>
<Bottombar/>
</div>


        
    );
  }
}