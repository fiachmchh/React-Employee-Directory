import axios from "axios";

// Export an object containing methods we'll use for accessing the Employee.Ceo API

export default {
    getEmployees: function () {
        return axios.get("https://randomuser.me/api/?inc=gender,name,nat,email,picture");
    }
};