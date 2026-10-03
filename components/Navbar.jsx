import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <nav className="navbar">

      <h2>Student Management</h2>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-student">Add Student</NavLink>
        <NavLink to="/students">Students</NavLink>

        <button onClick={logout}>
          Logout
        </button>
      </div>

    </nav>
  );
}

export default Navbar;