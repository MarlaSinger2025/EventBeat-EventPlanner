import "./App.css";
import { Routes, Route } from 'react-router';
import Home from "./pages/Home";
// import EventDetails from './pages/EventDetails';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            
        </Routes>
    )
}

export default App;

{/* <Route path="/events/:id" element={<EventDetails />} /> */}