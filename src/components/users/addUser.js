import React, { Fragment, useRef, useState } from "react";
import Button from "../UI/button";
import Card from "../UI/card";
import ErrorModal from "../UI/errorModal";
import classes from "./addUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    //trim delete all white spaces
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age (non-empty values)!",
      });
      return;
    }
    // + symbol force cast enteredAge type (string) to number
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age!",
        message: "Please enter a valid  age (>0)!",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
