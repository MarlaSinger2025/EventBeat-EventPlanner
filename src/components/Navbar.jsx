// import Registration
import { Link } from "react-router";

const Navbar = () => {
    return (
        <header className="fixed bg-transparent border-none w-screen h-20 z-20 mx-auto" >
            <nav class="max-w-screen flex flex-wrap items-center justify-around mx-auto p-4">
            <div>
            <h1 className=" text-[#150046] text-[2.5rem]">EventBeat</h1>
            </div>
            <Link to='/registraion' >
			<button className='mt-4 border-2 border-gray-600 p-3 rounded-full'>Sign up</button>
			</Link>
            </nav>
        </header>
    );
};

export default Navbar;