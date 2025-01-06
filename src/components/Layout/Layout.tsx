import { Link, Outlet } from "react-router-dom";
import "./layout.css";

function Layout() {
  console.log("layout rendered");

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
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
