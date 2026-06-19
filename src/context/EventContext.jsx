import { createContext, useState, useEffect, useContext } from "react";

const EventContext = createContext();

export const EventProvider = ({children}) => {

    const [ events, setEvents] = useState([]);
    const [eventDetail, setEventDetail] = useState(null);
    const [ dataIsLoaded, setDataIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [selectedId, setSelectedId] = useState(null);

    // Fetch all events
    useEffect(() => {

        const fetchData = async() => {
            try {

            const response = await fetch('http://localhost:3001/api/events?page=1&limit=20');

            if (!response.ok) {
                throw new Error(`Error status: ${response.status}`);
            }

            const result = await response.json()
            setEvents(result);
            setDataIsLoaded(true);

            } catch (err) {
                setError(err.message);
                setDataIsLoaded(true);
            }
        };
            
        fetchData()
        
}, []);


//Fetch event details with selected ID
useEffect(() => {
    if(!selectedId) return; //skips the whole function if no ID is selected yet

    const fetchEventDetail = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/events/${selectedId}`);
            if (!response.ok) throw new Error(`Error status: ${response.status}`);

            const result = await response.json();
            setEventDetail(result);
        } catch (err) {
            setError(err.message);
        }
    };
    fetchEventDetail();
}, [selectedId]); 

return (
        <EventContext.Provider 
        value={{ events, eventDetail, dataIsLoaded, error, setSelectedId }}
        >
            {children}
            </EventContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useEvent() {
return useContext(EventContext);

};