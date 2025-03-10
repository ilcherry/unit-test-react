import React, { useEffect, useState } from "react";

const mockUsers = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(mockUsers);
    }, 2000);
  });

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
