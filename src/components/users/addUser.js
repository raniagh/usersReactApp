import React, { useState } from "react";
import Button from "../UI/button";
import Card from "../UI/card";
import classes from './addUser.module.css'


const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = event =>{
        event.preventDefault();
        //trim delete all white spaces
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        // + symbol force cast enteredAge type (string) to number
        if(+enteredAge < 1){
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
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
            <input type="text" id="username" value={enteredUsername} onChange={changeEntredUsername}/>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" value={enteredAge} onChange={changeEntredAge}/>
            <Button type="submit">Add user</Button>
        </form>
        </Card>
    );
}

export default AddUser;