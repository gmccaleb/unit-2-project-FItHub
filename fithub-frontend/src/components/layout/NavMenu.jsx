import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Button from "../reusable/Button";

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
          <span className="nav-divider"></span>
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/register">Register</Link>
        </>
      ) : (
        <>
          <span className="nav-divider"></span>
        <Button type="button" onClick={handleLogout} className="logout" text="Logout" />
        </>
      )}
    </div>
  );
}

export default NavMenu;