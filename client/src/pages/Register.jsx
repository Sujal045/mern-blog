import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function register(ev) {
    ev.preventDefault();

    const response = await axios.post("http://localhost:4000/register", {
      username,
      password,
    });
    if (response.status !== 200) {
      alert("registration failed");
    } else {
      alert("Registration successful");
    }
  }

  return (
    <div>
      <form action="" className="register" onSubmit={register}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
