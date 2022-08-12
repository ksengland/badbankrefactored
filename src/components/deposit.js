import React from "react";
import Card from "./context";
import { useState } from "react";
import { UserContext } from "./context";

function Deposit() {
  const [deposit, setDeposit] = React.useState("");
  const [balance, setBalance] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);
  let userBalance = JSON.stringify(ctx.users[ctx.users.length - 1].balance);

  function validate(number) {
    if (isNaN(number)) {
      alert("Error: Please enter a valid number");
      setStatus("Please enter a valid number");
      return false;
    }
    return true;
  }

  function handleDeposit(amount) {
    if (!validate(amount)) return;
    setBalance(userBalance + amount);
    setStatus("");

    ctx.users[ctx.users.length - 1].balance += Number(amount);
    setShow(false);
  }

  function clearForm() {
    setDeposit("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Make a Deposit"
      status={status}
      body={
        show ? (
          <>
            Current Balance: ${userBalance}
            <br />
            <br />
            Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter an amount"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={() => handleDeposit(deposit)}
            >
              Deposit Amount
            </button>
          </>
        ) : (
          <>
            <h5>Success!</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Make Another Deposit
            </button>
          </>
        )
      }
    />
  );
}

export default Deposit;
