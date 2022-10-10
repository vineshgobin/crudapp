import React, { useState, useEffect } from "react";
import moment from 'moment';

const EditEmployeeForm = (props) => {
  const [employee, setEmployee] = useState(props.employee);

  useEffect(() => {
    setEmployee(props.employee);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const sanitizeValue = (name, value) => {
      if (name === 'soc_sec_no' || name === 'manager_id')
        return Number(value)

      if (name === 'hire_date')
        return moment(value).format('MM/DD/YYYY')

      return value
    }

    setEmployee({ ...employee, [name]: sanitizeValue(name, value) });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateEmployee(employee.employee_id, employee);
        console.log(employee);
      }}
    >
      <label>First name</label>
      <input
        type="text"
        name="first_name"
        value={employee.first_name}
        onChange={handleInputChange}
      />

      <label>Middle name</label>
      <input
        type="text"
        name="middle_initial"
        value={employee.middle_initial}
        onChange={handleInputChange}
      />

      <label>Last name</label>
      <input
        type="text"
        name="last_name"
        value={employee.last_name}
        onChange={handleInputChange}
      />

      <label>SOC</label>
      <input
        type="text"
        name="soc_sec_no"
        value={employee.soc_sec_no}
        onChange={handleInputChange}
      />

      <label>Hire date</label>
      <input
        type="date"
        name="hire_date"
        defaultValue={employee.hire_date}
        onChange={handleInputChange}
      />

      <label>Salary</label>
      <input
        type="text"
        name="salary"
        value={employee.salary}
        onChange={handleInputChange}
      />

      <label>Commission PCT</label>
      <input
        type="text"
        name="commission_pct"
        value={employee.commission_pct}
        onChange={handleInputChange}
      />

      <label>Department code</label>
      <input
        type="text"
        name="department_code"
        value={employee.department_code}
        onChange={handleInputChange}
      />

      <label>Job code</label>
      <input
        type="text"
        name="job_code"
        value={employee.job_code}
        onChange={handleInputChange}
      />

      <label>Manager ID</label>
      <input
        type="text"
        name="manager_id"
        value={employee.manager_id}
        onChange={handleInputChange}
      />

      <button>Update employee</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditEmployeeForm;
