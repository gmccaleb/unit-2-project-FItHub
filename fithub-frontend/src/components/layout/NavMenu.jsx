import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

function NavMenu() {
  const { user, logout } = useAuth();

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
          <Link className="link" to="/log-workout">
            Log Workout
          </Link>

          <Link className="link" to="/workout-history">
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
        <button className="link" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
}

export default NavMenu;