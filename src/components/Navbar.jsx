//import { useAuth } from "../context/AuthContext";
import { Link } from "react-router";

const Navbar = () => {
 // const { isAuthenticated, logOut } = useAuth();
  return (
    <header className="absolute top-0 bg-transparent w-full h-20 z-50 mx-auto">
      <nav className="max-w-screen flex flex-col md:flex-row items-start md:items-end justify-around mx-auto p-4">
        <Link to="/" className="flex flex-row gap-3">
          <img
            className="w-10"
            src="./img/heartbeat_logo.png"
            alt="logo of a heartbeat pulse in a cirle"
          />
          <span className=" text-[#150046] text-3xl font-bold tracking-tight">
            EventBeat
          </span>
        </Link>
        <Link to="/createevent">
          <button className="mt-4 p-3 rounded-full bg-black font-semibold hover:bg-pink-500 text-white hover:cursor-pointer hover:shadow-xl">
            Create Event
          </button>
        </Link>

      </nav>
    </header>
  )
};


export default Navbar;
