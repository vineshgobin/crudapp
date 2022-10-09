import React, { useState } from "react";

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Modal = ({ employee, deleteEmployee, hideModal }) => {
  return (
    <div className="modal show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Delete Employee</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure that you want delete employee <b>{employee.first_name} {employee.last_name}</b></p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={hideModal}
            >
              Close
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                console.log({ employee });
                deleteEmployee(employee.employee_id)
                hideModal()
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const UserTable = ({ employees, deleteEmployee, editRow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleOnDelete = (employee) => {
    showModal()
    setCurrentEmployee(employee)
  }

  return (
    <div
      style={{
        height: '80vh',
        overflow: 'scroll',
      }}
    >
      <table className="table table-striped">
        <thead
          style={{
            position: 'sticky',
            background: 'white',
            top: 0,
          }}
        >
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">First name</th>
            <th className="text-center">Middle Name</th>
            <th className="text-center">Last Name</th>
            <th className="text-center">SOC</th>
            <th className="text-center">Hire date</th>
            <th className="text-center">Salary</th>
            <th className="text-center">Commission PCT</th>
            <th className="text-center">Dept Code</th>
            <th className="text-center">Job Code</th>
            <th className="text-center">Manager ID</th>
            <th className="text-center">Operations</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr key={`${emp.employee_id}-${idx}`}>
              <td className="align-middle">{emp.employee_id || '-'} </td>
              <td className="align-middle">{emp.first_name || '-'}</td>
              <td className="align-middle">{emp.middle_initial || '-'}</td>
              <td className="align-middle">{emp.last_name || '-'}</td>
              <td className="align-middle">{emp.soc_sec_no || '-'}</td>
              <td className="align-middle">{emp.hire_date || '-'}</td>
              <td className="align-middle">{emp.salary || '-'}</td>
              <td className="align-middle">{emp.commission_pct || '-'}</td>
              <td className="align-middle">{emp.department_code || '-'}</td>
              <td className="align-middle">{emp.job_code || '-'}</td>
              <td className="align-middle">{emp.manager_id || '-'}</td>
              <td className="d-flex align-middle">
                <button
                  className="btn btn-info mr-2"
                  onClick={() => {
                    editRow(emp);
                    goToTop();
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleOnDelete(employees[idx])}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {
        isOpen && (
          <Modal
            employee={currentEmployee}
            hideModal={hideModal}
            deleteEmployee={deleteEmployee}
          />
        )
      }
    </div>
  );
};

export default UserTable;
