import { FormEvent } from "react";
import { login } from "../services/userApi";
import { useSetAtom } from "jotai";
import { userAtom } from "../store";
import { useNavigate } from "react-router-dom";

function Login() {
  const setUser = useSetAtom(userAtom);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    try {
      const user = await login(username, password);
      setUser(user);
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
