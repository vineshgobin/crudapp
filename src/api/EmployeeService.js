import axios from 'axios'
import API_URL from '../../Constants'

class EmployeeService {

    retrieveEmployees() {
        //console.log('executed service')
        return axios.get(`${API_URL}/employees`);
    }

    createEmployee(firstname, middlename, lastname, soc, hiredate, salary, commissionpct, departmentcode, jodcode, managerid) {
        //console.log('executed service')
        return axios.post(`${API_URL}/employee`);
    }

    deleteEmployee(id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/employee/${id}`);
    }

    updateEmployee(firstname, middlename, lastname, soc, hiredate, salary, commissionpct, departmentcode, jodcode, managerid) {
        //console.log('executed service')
        return axios.put(`${API_URL}/employee/${id}`);
    }

}

export default new EmployeeService()