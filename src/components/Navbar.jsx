// import Registration
// import Login
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";

const Navbar = () => {

    const { isAuthenticated, logOut } = useAuth();
    const navigate = useNavigate();
    const handleCreateEvent = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/createevent");
    } else {
      alert("Please login to create an event.");
    }
  };
  return (
    <header className="absolute top-0 bg-transparent w-full h-20 z-50 mx-auto">
      <nav className="max-w-screen flex items-end justify-around mx-auto p-4">
        <Link to="/" className="flex flex-row gap-3">
          <img
            className="w-10"
            src="src/img/heartbeat_logo.png"
            alt="logo of a heartbeat pulse in a cirle"
          />
          <span className=" text-[#150046] text-3xl font-bold tracking-tight">
            EventBeat
          </span>
        </Link>
        <button
            onClick={handleCreateEvent}
            className="mt-4 border-2 border-gray-600 p-3 rounded-full"
          >
            Create Event
          </button>
        <div className="flex items-end gap-5">
            { isAuthenticated? (
                <button className="mt-4 border-2 border-gray-600 p-3 rounded-full" onClick={logOut} >Log out</button>
            ) : (
                <>
        <Link to="/registration">
            <button className="mt-4 border-2 border-gray-600 p-3 rounded-full">
              Sign up
            </button>
          </Link>
          <Link
            to="/login"
            className=" hover:text-white hover:underline transition duration-200 pb-2"
          >
            {" "}
            Already registerd? Log in here
          </Link>
          </>
            )} 
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
