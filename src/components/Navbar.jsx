// import Registration
// import Login

import { Link } from "react-router";

const Navbar = () => {
    return (
        <header className="fixed bg-transparent border-none w-screen h-20 z-20 mx-auto" >
            <nav className="max-w-screen flex flex-wrap items-center justify-around mx-auto p-4">
            <div>
            <h1 className=" text-[#150046] text-[2.5rem]">EventBeat</h1>
            </div>
            <div className="flex gap-5">
            <Link to='/registraion' >
			<button className='mt-4 border-2 border-gray-600 p-3 rounded-full'>Sign up</button>
			</Link>
             <Link to='/login'
                className="flex hover:bg-blue-950 transition duration-200 align-bottom"
            > Already registerd? Log in here
            </Link>
            </div>
            </nav>
        </header>
    );
};

export default Navbar;