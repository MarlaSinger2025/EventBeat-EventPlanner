//Home page
import EventCards from '../components/EventCards';
import { useEvent } from '../context/EventContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';


const Home = () => {

    const { events = [], dataIsLoaded, error } = useEvent();

      const sortedEvents = [...events].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
     );

    if (!dataIsLoaded) return <p>Loading events...</p>;
    if (error) return <p>Something went wrong: {error} </p>;

    return (
        <>
        <Navbar />
          <Hero />
            <div className="flex flex-wrap gap-6 p-4 justify-start">
                {sortedEvents.map((event) => (
                <EventCards key={event.id} {...event} />
                ))}
            </div>
        </>
    );
};

export default Home;


  