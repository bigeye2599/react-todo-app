import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../slices/commonSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    try {
      dispatch(login({ username, password }));
      navigate("/");
    } catch {
      alert("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input id="username" type="text" name="username" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" type="text" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
