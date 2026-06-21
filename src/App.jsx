import "./App.css";
import { Routes, Route } from 'react-router';
import Home from "./pages/Home";
// import EventDetails from './pages/EventDetails';
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthContext";
import EventDetails from "./pages/EventDetails";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div>
            <AuthProvider>
                <Navbar />       
                <Routes>
                    <Route path="/" element={<Home />} />   
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/events/:id" element={<EventDetails />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </div>
    )
}

export default App;

{/* <Route path="/events/:id" element={<EventDetails />} /> */}