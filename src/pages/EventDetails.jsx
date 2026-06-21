import { useEvent } from "../context/EventContext";
import { useParams } from "react-router";
import { useEffect } from "react";

const EventDetails = () => {
    const { id } = useParams();
    const { eventDetail, error, setSelectedId } = useEvent();

    useEffect(() => {
        setSelectedId(id);

        return () => {
            setSelectedId(null);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (error) return <p>Something went wrong: {error}</p>;
    if (!eventDetail) return <p>Loading event details...</p>;

    return (
        <div className="relative bg-blue-950 h-screen">
            <div className="text-center mt-50 pb-10 bg-white">
            <h1 className="text-2xl font-semibold text-pink-800">{eventDetail.title}</h1>
            <p className="text-sm font-semibold text-gray-600">{new Date(eventDetail.date).toLocaleDateString()}</p>
            <p>{eventDetail.description}</p>
            <p className="font-semibold">{eventDetail.location}</p>
            <p>latitude: {eventDetail.latitude} </p>
            <p>longitude: {eventDetail.longitude} </p>
            </div>
        </div>

    );
};

export default EventDetails;