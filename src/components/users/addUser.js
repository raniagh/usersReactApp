import React from "react";

const AddUser = props => {

    const addUserHandler = event =>{
        event.preventDefault();
    }
    return(
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="age">Age</label>
            <input type="number" id="age" />
            <button type="submit">Add user</button>
        </form>
    );
}

export default AddUser;