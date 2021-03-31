import React, { Component } from "react";
import API from "../utils/API";

import EmployeeForm from "../components/EmployeeForm";
import EmployeeResults from "../components/EmployeeResults";


class Employee extends Component {
  state = {
    employees: [],
    filteredEmps: []
    
  };

  componentDidMount() {
    API.getEmployees().then((emps) => {
      console.log('data', emps)
      this.setState({employees: emps.data.results})
    })

  }

  handleTyping = (event) => {
    console.log('we r typing!!', event.target.value)

    var newFiltered = []

      this.state.employees.map((singleEmp) => {
        if (singleEmp.name.first.charAt(0) === event.target.value ) {
          
          newFiltered.push(singleEmp)
        }

        
      })

      console.log('New filted!!!', newFiltered)
      this.setState({filteredEmps: newFiltered})




    // what letter di they type ??
    // loop thru all employes and find ppl whos name starts with same letter
    // save the filtered sate with only ppl we wwant to keep
    // .charAt(0)
  }



  render() {
    console.log('this is our state!!!', this.state)

    var pplTodDisplay = this.state.employees

    if(this.state.filteredEmps.length > 0) {
      pplTodDisplay = this.state.filteredEmps
    }


    return (
      <div>
        
          <h1 className="text-center">Employee Tracker</h1>
          <input onChange={this.handleTyping}></input>
          
  
        {pplTodDisplay.map((singleEmp) =>{
          return (
            <EmployeeResults emp={singleEmp} />
          )
        })}

        
      </div>
    );
  }
}

export default Employee;
