import React, { useState, useEffect } from "react";
//import axios from 'axios'

import { API_URL } from "../Constants";
//import EmployeeService from '../api/EmployeeService.js'

const UserTable = (props) => {
  const [employees, setEmployees] = useState([]);

  // this.employees;
  /*
    static setEmployees(value) {
        this.employees = value
    }
    */

  useEffect(() => {
    fetch(`${API_URL}/employees`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEmployees(data.items);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>SOC</th>
            <th>Hire date</th>
            <th>Salary</th>
            <th>Commission PCT</th>
            <th>Dept Code</th>
            <th>Job Code</th>
            <th>Manager ID</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr key={`${emp.employee_id}-${idx}`}>
              <td>{emp.employee_id}</td>
              <td>{emp.first_name}</td>
              <td>{emp.middle_initial}</td>
              <td>{emp.last_name}</td>
              <td>{emp.soc_sec_no}</td>
              <td>{emp.hire_date}</td>
              <td>{emp.salary}</td>
              <td>{emp.commission_pct}</td>
              <td>{emp.department_code}</td>
              <td>{emp.job_code}</td>
              <td>{emp.manager_id}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => {
                    //props.editRow(user);
                  }}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  //onClick={() => props.deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
