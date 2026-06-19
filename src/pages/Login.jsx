import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const auth = useAuth();
  //console.log(auth);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.email !== "" && input.password !== "") {
      auth.loginAction(input);
    } else {
      alert("please provide a valid input");
    }
  };

  return (
    <div
      style={{
        maxWidth: "300px",
        margin: "50px auto",
        padding: "20px",
        paddingLeft: "40px",
        fontFamily: "system-ui, sans-serif",
        border: "3px solid black",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Email:
          <br />
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            style={{ height: "25px" }}
          ></input>
        </label>
        <br />
        <br />
        <label>
          Password:
          <br />
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            style={{ height: "25px" }}
          ></input>
        </label>
        <br />
        <br />
        <button type="submit" style={{ width: "100px" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
