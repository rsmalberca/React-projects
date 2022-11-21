import styles from "./Form.module.css";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div>
      <label>Username: </label>
      <input type="text" name="username" />
      <label>Password: </label>
      <input type="password" name="password" />
      <button>Login</button>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
}

export default Form;
