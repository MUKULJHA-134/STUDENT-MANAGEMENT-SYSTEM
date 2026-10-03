import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {

    e.preventDefault();

    if (username === "admin" && password === "1234") {

      localStorage.setItem("isLoggedIn", "true");

      navigate("/");

    } else {

      alert("Invalid username or password");

    }
  }

  return (
    <div className="container">

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>


    </div>
  );
}

export default Login;