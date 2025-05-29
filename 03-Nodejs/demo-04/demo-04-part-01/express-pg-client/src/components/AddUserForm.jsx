import React, { useState } from 'react';

const AddUserForm = ({onAdd}) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleAddSubmit = (e) =>{
        e.preventDefault();
        onAdd({name,age});
        setName("");
        setAge("");
    }


    return (
        <form onSubmit={handleAddSubmit} style={{ marginBottom: "20px" }}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} style={{ marginLeft: "10px" }} />
            <button type="submit" style={{ marginLeft: "10px" }}>Add User</button>
        </form>
    );
}

export default AddUserForm;
