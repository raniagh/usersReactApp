import { useState } from "react";
import "./App.css";
import Wrapper from "./components/helpers/Wrapper";
import AddUser from "./components/users/addUser";
import UsersList from "./components/users/usersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { id: Math.random().toString(), username: uName, age: uAge },
    ]);
  };
  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Wrapper>
  );
}

export default App;
