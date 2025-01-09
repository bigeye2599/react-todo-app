import { Link, Outlet } from "react-router-dom";
import "./layout.css";
import { useAtomValue } from "jotai";
import { userAtom } from "../../store";

function Layout() {
  console.log("layout rendered");
  const user = useAtomValue(userAtom);

  return (
    <div className="layout__container">
      <div className="layout__gnb">
        <h1 className="layout__title">Todo app</h1>
        <div>
          <Link className="layout__link" to="/">
            Home
          </Link>
          <Link className="layout__link" to="/about">
            About
          </Link>
          {user ? (
            <Link className="layout__link" to="/protected">
              {user.username}
            </Link>
          ) : (
            <Link className="layout__link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
