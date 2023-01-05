import React from "react";
import Card from "../UI/card";
import classes from "./usersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
