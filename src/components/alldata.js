import React from "react";
import { UserContext } from "./context";

function AllData() {
  const ctx = React.useContext(UserContext);

  const userData = ctx.users.map((user) => {
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.balance}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>{userData}</tbody>
      </table>
    </div>
  );
}

export default AllData;
