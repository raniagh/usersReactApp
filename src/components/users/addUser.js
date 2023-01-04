import React from "react";
import Card from "../UI/card";
import classes from './addUser.module.css'


const AddUser = props => {

    const addUserHandler = event =>{
        event.preventDefault();
    }
    return(
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="age">Age</label>
            <input type="number" id="age" />
            <button type="submit">Add user</button>
        </form>
        </Card>
    );
}

export default AddUser;