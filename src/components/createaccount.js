import React from "react";
import Card from "./context";
import { UserContext } from "./context";
//import { useState } from "react";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus(
        `Your account could not be created, due to missing ${label}. Please try again.`
      );
      setTimeout(() => setStatus(""), 4000);
      return false;
    }
    return true;
  }

  function validPassword(password) {
    if (password.length < 8) {
      setStatus(
        `Password is too short. Password must be at least 8 characters long. Please try again.`
      );
      setTimeout(() => setStatus(""), 2000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validPassword(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    console.log(ctx);
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="dark"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-outline-dark"
              disabled={name === "" || email === "" || password === ""}
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-dark" onClick={clearForm}>
              Create another account
            </button>
          </>
        )
      }
    />
  );
}

export default CreateAccount;
