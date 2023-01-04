import React, { useState } from "react";
import Button from "../UI/button";
import Card from "../UI/card";
import classes from './addUser.module.css'


const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = event =>{
        event.preventDefault();
        console.log(enteredUsername ,enteredAge)
    }
    const changeEntredUsername = event =>{
        setEnteredUsername(event.target.value)
    }
    const changeEntredAge = event =>{
        setEnteredAge(event.target.value)
    }
    return(
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={changeEntredUsername}/>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" onChange={changeEntredAge}/>
            <Button type="submit">Add user</Button>
        </form>
        </Card>
    );
}

export default AddUser;