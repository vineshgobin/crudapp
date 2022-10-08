import React, { useState, useEffect } from "react";

const EditEmployeeForm = (props) => {
  const [employee, setEmployee] = useState(props.employee);

  useEffect(() => {
    setEmployee(props.employee);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateEmployee(employee.id, employee);
      }}
    >
      <label>First name</label>
      <input
        type="text"
        name="firstName"
        value={employee.first_name}
        onChange={handleInputChange}
      />

      <label>Middle name</label>
      <input
        type="text"
        name="middle"
        value={employee.middle_initial}
        onChange={handleInputChange}
      />

      <label>Last name</label>
      <input
        type="text"
        name="middle"
        value={employee.last_name}
        onChange={handleInputChange}
      />

      <label>SOC</label>
      <input
        type="text"
        name="soc"
        value={employee.soc_sec_no}
        onChange={handleInputChange}
      />

      <label>Hire date</label>
      <input
        type="date"
        name="hiredate"
        value={employee.hire_date}
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
        name="commissionPCT"
        value={employee.commission_pct}
        onChange={handleInputChange}
      />

      <label>Department code</label>
      <input
        type="text"
        name="departmentCode"
        value={employee.department_code}
        onChange={handleInputChange}
      />

      <label>Job code</label>
      <input
        type="text"
        name="jobCode"
        value={employee.job_code}
        onChange={handleInputChange}
      />

      <label>Manager ID</label>
      <input
        type="text"
        name="managerID"
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
