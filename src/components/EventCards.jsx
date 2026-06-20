import { useEvent } from "../context/EventContext"; 
import { Link } from "react-router";

const EventCards = ({ id, title, date, location}) => {

    const { setSelectedId } = useEvent();

    return (
        <Link to={`/events/${id}`} onClick={() => setSelectedId(id)} >
        <div className="border rounded-xl p-4 w-64 hover:cursor-pointer shadow-sm">
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
      <p className="text-sm">{location}</p>
    </div>
    </Link>
    );
};

export default EventCards;
