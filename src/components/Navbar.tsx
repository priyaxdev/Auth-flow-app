import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate, NavLink } from "react-router";
import { ScanEye } from 'lucide-react';

const Navbar = () => {
  const auth = useContext(AuthContext);
  if (!auth) return null;
  const { isLoggedIn } = auth;
  const { logout } = auth;
  const navigate = useNavigate();
  // handleLogout function banao
  const handleLogout=()=>{
    logout();
    navigate("/")
  }
  return (
    <div className="bg-bg-surface border-b border-border-default flex justify-between items-center px-6 py-4">
        <span className="text-text-accent font-bold text-2xl flex flex-row justify-center items-center "><ScanEye className="text-text-accent w-8 h-8 m-1"/> AuthApp</span>
        
        {isLoggedIn ? (
            <div className="flex gap-6 items-center">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? "text-text-accent" : "text-text-secondary hover:text-text-primary"
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? "text-text-accent" : "text-text-secondary hover:text-text-primary"
                    }
                >
                    Profile
                </NavLink>
                <button
                    onClick={handleLogout}
                    className="border border-purple-border text-text-accent hover:bg-purple-soft px-4 py-1 rounded-lg"
                >
                    Logout
                </button>
            </div>
        ) : null}
    </div>
);
};

export default Navbar;
