import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            
            <div class= "sidebar">
              <ul>
                <div class="center">
                <li>Dashboard</li>
                <li>Widget</li>
                <li>Reviews</li>
                <li>Customers</li>
                <li>Online Analysis</li>
                <li>Settings</li>
                </div>
              </ul>
            </div>
        );
    }
}

export default Sidebar;