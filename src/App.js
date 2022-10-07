import React, { useEffect, useState } from "react"
import UserTable from "./tables/UserTable"
import AddEmployeeForm from "./forms/AddEmployee"
import EditUserForm from "./forms/EditUser"
import "./App.css"

import { getEmployees, createEmployee, deleteEmployee } from './api/EmployeeService'

const App = () => {
  const initialFormState = { id: null, name: "", username: "" }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const [employees, setEmployees] = useState([])
  const [editing, setEditing] = useState(false)

  // Get employees
  useEffect(async () => {
    const employees = await getEmployees()
    setEmployees(employees)
  }, [])

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser(user)
  }

  const addEmployee = (employee) => {
    console.log({ employee })
    employee.id = employees.length + 1
    setEmployees([...employees, employee])
    createEmployee({ body: employee })
  }

  const delEmployee = (id) => {
    console.log({ id })
    setEmployees(employees.filter((employee) => employee.id !== id))
    deleteEmployee(id)
  }

  // const updateUser = (id, updatedUser) => {
  //   setEditing(false)
  //   setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  // }

  console.log({ editing });

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="d-flex">
        <div className="w-50">
          {editing ? (
            <div>
              <h2>Edit Employee</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
              // updateUser={updateUser}
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
  )
}

export default App
