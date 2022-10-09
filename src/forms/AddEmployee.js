import React, { useState } from "react";

const initialFormState = {
  firstName: "",
  middle: "",
  lastName: "",
  soc: 0,
  hireDate: "",
  salary: "",
  commissionPCT: "",
  departmentCode: "",
  jobCode: "",
  managerId: 0,
};

const AddEmployee = ({ addEmployee }) => {
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!user.firstName || !user.middle) return; // Here we can add some validations
    addEmployee(user);
    setUser(initialFormState);
  };

  return (
    <form>
      <label>First name</label>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleInputChange}
      />

      <label>Middle name</label>
      <input
        type="text"
        name="middle"
        value={user.middle}
        onChange={handleInputChange}
      />

      <label>Last name</label>
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleInputChange}
      />

      <label>SOC</label>
      <input
        type="text"
        name="soc"
        value={user.soc}
        onChange={handleInputChange}
      />

      <label>Hire date</label>
      <input
        type="date"
        name="hireDate"
        value={user.hireDate}
        onChange={handleInputChange}
      />

      <label>Salary</label>
      <input
        type="text"
        name="salary"
        value={user.salary}
        onChange={handleInputChange}
      />

      <label>Commission PCT</label>
      <input
        type="text"
        name="commissionPCT"
        value={user.commissionPCT}
        onChange={handleInputChange}
      />

      <label>Department code</label>
      <input
        type="text"
        name="departmentCode"
        value={user.departmentCode}
        onChange={handleInputChange}
      />

      <label>Job code</label>
      <input
        type="text"
        name="jobCode"
        value={user.jobCode}
        onChange={handleInputChange}
      />

      <label>Manager ID</label>
      <input
        type="text"
        name="managerId"
        value={user.managerId}
        onChange={handleInputChange}
      />

      <button onClick={handleOnSubmit}>Add new user</button>
    </form>
  );
};

export default AddEmployee;
