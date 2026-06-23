import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

const Hero = () => {

    const { isAuthenticated } = useAuth();

    return (
        <div className="relative bg-center bg-[url(./img/pexels-annamw-1047442.jpg)] h-screen bg-no-repeat bg-cover">
            <div className="relative z-40 text-center pt-[150px]">
                <h1  className="text-5xl md:text-6xl text-white font-bold"> Welcome to EventBeat</h1>
                <h2 className="text-3xl md:text-4xl  text-white font-semibold"> You can look for cool events or post an event yourself</h2>

            <div> { isAuthenticated? (
                 <Link to='/createevent' >
			<button className='mt-4 border-2 border-white p-3 text-pink-500 font-semibold rounded-full hover:bg-white transition duration-200 '>Create Event</button>
			</Link> ) : (
                <>
            <Link to='/registration' >
			<button className='mt-4 border-2 border-white p-3 text-pink-500 font-semibold rounded-full hover:bg-white transition duration-200 '>Sign up</button>
			</Link>
            <Link to='/createevent' >
			<button className='mt-4 border-2 border-white p-3 text-pink-500 font-semibold rounded-full hover:bg-white transition duration-200 '>Create Event</button>
			</Link>
            </>
            )}
            </div>
            </div>
        </div>
    );
};

export default Hero;