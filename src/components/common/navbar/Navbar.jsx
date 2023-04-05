import { Link } from "react-router-dom";
import { LogoutIcon, logo } from "../../../constant/icon";

const Navbar = () => {
  const isAdmin = true;

  return (
    <nav className="shadow-md">
      <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
        <Link to="/ ">
          <img className="h-10" src={logo} />
        </Link>

        <div className="flex items-center gap-3">
          <Link to="/leaderboard">Leaderboard</Link>
          {isAdmin && (
            <>
              <Link to="/admin">Dashboard</Link>
              <h2 className="font-bold">Admin</h2>
            </>
          )}
          {!isAdmin && <h2 className="font-bold">Saad Hasan</h2>}
          <button className="flex gap-2 border border-cyan items-center px-4 py-1 rounded-full text-sm transition-all hover:bg-cyan">
            <LogoutIcon />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
