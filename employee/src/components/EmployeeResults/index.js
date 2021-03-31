import React from "react";
import "./style.css";

function EmployeeResults(props) {
  console.log('MY PROPS!! in emplyoee reuts file', props)
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.emp.picture.thumbnail} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.emp.name.first}
          </li>
          <li>
            <strong>Nationality:</strong> {props.emp.nat}
          </li>
          <li>
            <strong>Email:</strong> {props.emp.email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeResults;