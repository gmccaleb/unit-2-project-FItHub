import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function NavMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  }
  return (
    <div className="nav-menu">

      <Link className="link" to="/about">
        About
      </Link>

      <Link className="link" to="/exercise-library">
        Exercise Library
      </Link>

      {user && (
        <>
          <Link className="link" to={`/${user.username}/log-workout`}>
            Log Workout
          </Link>

          <Link className="link" to={`/${user.username}/workout-history`}>
            Workout History
          </Link>
        </>
      )}

      {!user ? (
        <>
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/register">Register</Link>
        </>
      ) : (
        <button className="link" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}

export default NavMenu;