import React, { useState } from "react";
import moment from 'moment';

const initialFormState = {
  first_name: '',
  middle_initial: '',
  last_name: '',
  soc_sec_no: 0,
  hire_date: '',
  salary: '',
  commission_pct: '',
  department_code: '',
  job_code: '',
  manager_id: 0,
}

const AddEmployee = ({ addEmployee }) => {
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    const sanitizeValue = (name, value) => {
      if (name === 'soc_sec_no' || name === 'manager_id')
        return Number(value)

      if (name === 'hire_date')
        return moment(value).format('MM/DD/YYYY').toString()

      return value
    }
    setUser({ ...user, [name]: sanitizeValue(name, value) });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!user.first_name || !user.middle_initial) return; // Here we can add some validations
    addEmployee(user)
    setUser(initialFormState)
  }

  return (
    <form>
      <label>First name</label>
      <input type="text" name="first_name" value={user.first_name} onChange={handleInputChange} />

      <label>Middle name</label>
      <input type="text" name="middle_initial" value={user.middle_initial} onChange={handleInputChange} />

      <label>Last name</label>
      <input type="text" name="last_name" value={user.last_name} onChange={handleInputChange} />

      <label>SOC</label>
      <input type="text" name="soc_sec_no" value={user.soc_sec_no} onChange={handleInputChange} />

      <label>Hire date</label>
      <input type="date" name="hire_date" value={user.hire_date} onChange={handleInputChange} />

      <label>Salary</label>
      <input type="text" name="salary" value={user.salary} onChange={handleInputChange} />

      <label>Commission PCT</label>
      <input type="text" name="commission_pct" value={user.commission_pct} onChange={handleInputChange} />

      <label>Department code</label>
      <input type="text" name="department_code" value={user.department_code} onChange={handleInputChange} />

      <label>Job code</label>
      <input type="text" name="job_code" value={user.job_code} onChange={handleInputChange} />

      <label>Manager ID</label>
      <input type="text" name="manager_id" value={user.manager_id} onChange={handleInputChange} />

      <button
        onClick={handleOnSubmit}
      >Add new user</button>
    </form>
  );
};

export default AddEmployee;
