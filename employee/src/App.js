import React, { Component } from "react";
import Employee from "./pages/Employees";

class App extends Component {
    render() {
        return (
            <div>
                <h2>Employee List</h2>
               
                <Employee/>
            
            </div>
        );
    }
}

export default App;
