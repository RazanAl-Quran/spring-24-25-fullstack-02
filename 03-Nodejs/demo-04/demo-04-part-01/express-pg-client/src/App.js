import { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const allusers = await fetch('http://localhost:3001/api/users/');
    const allusers2 = await allusers.json();
    console.log(allusers2);
    setUsers(allusers2);
  }

  const deleteUser = async (id) => {
    await fetch(`http://localhost:3001/api/users/${id}`, {
      method: 'DELETE'
    });
    fetchUsers();
  }

  const addUser = async (user) => {
    await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    fetchUsers(); // refresh the list
  };

  return (
    <>
      <AddUserForm onAdd={addUser} />
      <UserTable users={users} onDelete={deleteUser} />
    </>
  );
}

export default App;
