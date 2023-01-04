import React from "react";
import Button from "../UI/button";
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
            <Button type="submit">Add user</Button>
        </form>
        </Card>
    );
}

export default AddUser;