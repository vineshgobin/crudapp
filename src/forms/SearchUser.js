import React, {useState} from 'react';

const SearchUser = (props) => {
    const initialFormState = {id : ''};
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    };
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (!user.id) return;
            props.deleteUser(user.id)
            setUser(initialFormState)
        }}>
            <label>Enter ID</label>
            <input type="text" name="id" value={user.id} onChange={handleInputChange}/>
            <button>Search</button>
        </form>
    )
};

export default SearchUser
