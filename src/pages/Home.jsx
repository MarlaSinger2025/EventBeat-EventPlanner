//Home page
import EventCards from '../components/EventCards';
import { useEvent } from '../context/EventContext';

const Home = () => {

    const { events, dataIsLoaded, error } = useEvent();

    const sortedEvents = [...events].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
     );

    if (!dataIsLoaded) return <p>Loading events...</p>;
    if (error) return <p>Something went wrong: {error} </p>;

    return (
 <div className="flex flex-wrap gap-6 p-4 justify-start">
            {sortedEvents.map((event) => (
                <EventCards key={event.date} {...event} />
            ))}
</div>
    );
};

export default Home;