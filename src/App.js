import React, { useState } from "react";
import "./App.css";
import UsernameForm from "./pages/summary/userNameForm";

function App() {
  const [name, setName] = useState("sree");
  return (
    <div className="App">
      <UsernameForm updateUsername={setName} />
    </div>
  );
}

export default App;
