import styles from "./Form.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validate } from "./validation";

function Form({ onClick }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onClick(userData);
  };

  const handleInputChange = (e) => {
    setUserData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });

    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  console.log(userData);
  console.log(errors);

  return (
    <div className={styles.container}>
      <form onSubmit={handleOnSubmit}>
        <div className={styles.inputs}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          {!errors.username ? null : (
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.username}
            </p>
          )}
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {!errors.password ? null : (
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.password}
            </p>
          )}
        </div>
        <button>Login</button>
        <Link to="/">
          <button>Go back</button>
        </Link>
      </form>
    </div>
  );
}

export default Form;
