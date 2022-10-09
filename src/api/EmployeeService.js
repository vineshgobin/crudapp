// import axios from 'axios'
// import API_URL from '../Constants'

export const getEmployees = async () => {
  try {
    const response = await fetch(
      "https://apex.oracle.com/pls/apex/hoangtuanmai/api/employees?limit=500"
    );
    // const response = await fetch(`${API_URL}/employees?limit=500`)

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.log({ error });
  }
};

export const createEmployee = async ({ body }) => {
  try {
    const response = await fetch(
      "https://apex.oracle.com/pls/apex/hoangtuanmai/api/employee",
      {
        // const response = await fetch(`${API_URL}/employee`, {
        method: "POST",
        body: JSON.stringify(body),
      }
    );
    return response;
  } catch (error) {
    console.log({ error });
  }
};

export const deleteEmployee = async (id) => {
  //console.log('executed service')
  // return axios.delete(`${API_URL}/employee/${id}`);
  try {
    const response = await fetch(
      `https://apex.oracle.com/pls/apex/hoangtuanmai/api/employee/${id}`,
      {
        // const response = await fetch(`${API_URL}/employee/${id}`, {
        method: "DELETE",
      }
    );
    return response;
  } catch (error) {
    console.log({ error });
  }
};

export const updateEmployeeConst = async ({ id, body }) => {
  try {
    const response = await fetch(
      `https://apex.oracle.com/pls/apex/hoangtuanmai/api/employee/${id}`,
      {
        // const response = await fetch(`${API_URL}/employee`, {
        method: "PUT",
        body: JSON.stringify(body),
      }
    );
    return response;
  } catch (error) {
    console.log({ error });
  }
};

// export const updateEmployee = (id, firstname, middlename, lastname, soc, hiredate, salary, commissionpct, departmentcode, jodcode, managerid) => {
//   //console.log('executed service')
//   return axios.put(`${API_URL}/employee/${id}`);
// }
