import React, { useEffect, useState } from "react";
import UserTable from "./tables/UserTable";
import AddEmployeeForm from "./forms/AddEmployee";
import EditEmployeeForm from "./forms/EditEmployee";
import "./App.css";

import {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployeeConst,
} from "./api/EmployeeService";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(false);
  const [employee, setEmployee] = useState([]);

  // Get employees
  useEffect(async () => {
    const employees = await getEmployees();
    setEmployees(employees);
  }, []);

  // Allows us to edit an employee
  const editRow = (employee) => {
    setEditing(true);
    setEmployee(employee);
  };

  // Add employee
  const addEmployee = (employee) => {
    console.log({ employee });
    employee.id = employees.length + 1;
    setEmployees([...employees, employee]);
    createEmployee({ body: employee });
  };

  // Delete employee
  const delEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
    deleteEmployee(id);
  };

  // Update employee
  const updateEmployee = (id, updatedEmployee) => {
    setEditing(false);
    setEmployee(
      employees.map((employee) =>
        employee.id === id ? updatedEmployee : employee
      )
    );
    updateEmployeeConst({ id: id, body: updatedEmployee });
  };

  return (
    <div className="px-5">
      <h1 className="text-center text-info">CRUD App - Oracle Databse</h1>
      <div className="d-flex">
        <div className="w-25">
          {editing ? (
            <div>
              <h2 className="text-secondary">Edit Employee</h2>
              <EditEmployeeForm
                editing={editing}
                setEditing={setEditing}
                employee={employee}
                updateEmployee={updateEmployee}
              />
            </div>
          ) : (
            <div>
              <h2>Add Employee</h2>
              <AddEmployeeForm addEmployee={addEmployee} />
            </div>
          )}
        </div>
        <div className="px-5">
          <h2>View Employees</h2>
          <UserTable
            employees={employees}
            editRow={editRow}
            deleteEmployee={delEmployee}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
