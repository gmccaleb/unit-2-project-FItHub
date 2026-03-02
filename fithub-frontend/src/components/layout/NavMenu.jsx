import { Link } from "react-router";

function NavMenu() {
  return (
    <div className="nav-menu">
      <Link className="link" to="/About">
        About
      </Link>
      <Link className="link" to="/Exercise-Library ">
        Exercise Library
      </Link>
      <Link className="link" to="/Log-Workout ">
        Log Workout
      </Link>
      <Link className="link" to="/Workout-History ">
        Workout History
      </Link>
    </div>
  );
}

export default NavMenu;
