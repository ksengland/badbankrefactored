import React from "react";
import Card from "./context";
import { UserContext } from "./context";
import { useContext } from "react";
import { useState } from "react";

function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");
  const [balance, setBalance] = React.useState([]);
  const ctx = React.useContext(UserContext);
  let userBalance = JSON.stringify(ctx.users[ctx.users.length - 1].balance);

  function validate(number) {
    if (isNaN(number)) {
      setStatus("Error: Please enter a valid number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  /* function overdraw(number){
    if(Number(number) > userBalance){
      setStatus('Withdrawal amount cannot be greater than your current balance')
      clearForm();
      return false
    }
    return true;
  } */

  function handleWithdrawal(amount) {
    if (!validate(amount)) return;
    setBalance(userBalance - amount);
    ctx.users[ctx.users.length - 1].balance -= Number(amount);
    setShow(false);
  }

  function clearForm() {
    setWithdraw("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Make a Withdrawal"
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
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleWithdrawal}
            >
              Withdraw Amount
            </button>
          </>
        ) : (
          <>
            <h5>Success!</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Make Another Withdrawal
            </button>
          </>
        )
      }
    />
  );
}

export default Withdraw;
