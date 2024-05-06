import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Dashboard</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Certificates">Certificates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Logout">Logout</Link>
            </li>
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/UserProfile">UserProfile</Link>
            </li>
          </ul>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
