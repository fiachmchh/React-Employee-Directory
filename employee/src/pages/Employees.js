import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeResults from "../components/EmployeeResults";
import Alert from "../components/Alert";

class Employee extends Component {
  state = {
    Employee: "",
    breeds: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ Employee: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.Employee)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Employee By Breed!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <EmployeeForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <EmployeeResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Employee;
