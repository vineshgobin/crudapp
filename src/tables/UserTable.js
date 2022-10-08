import React, { useState } from "react";

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const UserTable = ({ employees, deleteEmployee, editRow }) => {
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
                    editRow(emp);
                    goToTop();
                  }}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => {
                    deleteEmployee(emp.employee_id);
                    alert("User successfully deleted!");
                  }}
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
