import { useState } from "react";

const initialData = {
  email: "",
  password: "",
};
const Registration = () => {
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const email = formData.email;
      const password = formData.password;

      if (!email) throw new Error("Email should not be blank ");
      if (!password) throw new Error("Password should not be blank ");

      const callApi = async () => {
        const response = await fetch("http://localhost:3001/api/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();

        if (response.ok) {
          alert("Registration successful!");
          console.log(data);
          //window.location.href = "/login";
        } else {
          alert(data.error || "Registration failed");
        }
      };
      callApi();
      setFormData(initialData);
    } catch (error) {
      setError(error);
      alert(error);
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
      <div className="">
        <form onSubmit={handleSubmit}>
          <h1>Registration Form</h1>

          <label>
            Email:
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
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
              value={formData.password}
              onChange={handleChange}
              style={{ height: "25px" }}
            ></input>
          </label>
          <br />
          <br />
          <button type="submit" style={{ width: "100px" }}>
            Submit
          </button>
        </form>
      </div>
      <div className="text-red-500 mt-2">{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Registration;
