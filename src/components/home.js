import React from "react";
import Card from "./context";
function Home() {
  return (
    <Card
      bgcolor="light"
      txtcolor="dark"
      header="BadBank"
      title="Welcome to BadBank -- the bank with zero security"
      text="Click on 'Create Account' to get started."
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  );
}

export default Home;
