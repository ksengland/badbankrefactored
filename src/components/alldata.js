import React from "react";
import { UserContext } from "./context";

function AllData() {
  const ctx = React.useContext(UserContext);

  const displayUsers = ctx.users.map((user) => {
    return (
      <tr key={user}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.balance}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>{displayUsers}</tbody>
      </table>
    </div>
  );
}

export default AllData;
