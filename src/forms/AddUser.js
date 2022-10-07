import React, {useState} from 'react';

const AddUsers = (props) => {
    const initialFormState = {id: null, name: '', username: ''};
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    };
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (!user.name || !user.username) return;
            props.addUser(user)
            setUser(initialFormState)
        }}>
            <label>First name</label>
            <input type="text" name="fname" value={user.fname} onChange={handleInputChange}/>
            <label>Middle name</label>
            <input type="text" name="mname" value={user.mname} onChange={handleInputChange}/>
            <label>Last name</label>
            <input type="text" name="lname" value={user.lname} onChange={handleInputChange}/>
            <label>SOC</label>
            <input type="text" name="soc" value={user.soc} onChange={handleInputChange}/>
            <label>Hire date</label>
            <input type="date" name="date" value={user.hiredate} onChange={handleInputChange}/>
            <label>Salary</label>
            <input type="text" name="salary" value={user.salary} onChange={handleInputChange}/>
            <label>Commission PCT</label>
            <input type="text" name="commission" value={user.cpct} onChange={handleInputChange}/>
            <label>Department code</label>
            <input type="text" name="dcode" value={user.dcode} onChange={handleInputChange}/>
            <label>Job code</label>
            <input type="text" name="jcode" value={user.jcode} onChange={handleInputChange}/>
            <label>Manager ID</label>
            <input type="text" name="mid" value={user.mid} onChange={handleInputChange}/>
            <button>Add new user</button>
        </form>
    )
};

export default AddUsers
