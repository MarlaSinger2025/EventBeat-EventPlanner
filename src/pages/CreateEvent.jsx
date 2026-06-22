import { useState } from "react";
import { useEvent } from "../context/EventContext";

const initialData = {
  title: "",
  description: "",
  date: "",
  location: "",
  latitude: 0,
  longitude: 0,
};
const CreateEvent = () => {
  const [eventData, setEventData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const { addEvent } = useEvent();

  const authToken = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validate = () => {
    const newErrors = {};
    if (!authToken) {
      alert("Please login to add new event");
    }
    if (!eventData.title) {
      newErrors.title = "Please enter a valid title";
    }
    if (!eventData.description) {
      newErrors.description = "Please enter a valid description";
    }
    if (!eventData.date) {
      newErrors.date = "Please enter a valid date";
    }
    if (!eventData.location) {
      newErrors.location = "Please enter a valid location";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // stop here, don't accept the submission
    }
    //console.log(eventData);
    addEvent(eventData, authToken);
    setEventData(initialData);
  };

  return (
    <div className="max-w-200 mx-auto mt-30 p-5 pl-10 border-[3px] border-black font-sans rounded-2xl">
      <div className="">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold text-3xl mb-5">Add Event Form</h1>

          <label>
            Title:
            <br />
            <input
              type="text"
              name="title"
              placeholder="Give your event a title..."
              value={eventData.title}
              onChange={handleChange}
              className="w-full h-9 mt-1 border border-black"
            ></input>
          </label>
          {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
          <br />
          <label>
            Description:
            <br />
            <textarea
              type="text"
              name="description"
              value={eventData.description}
              onChange={handleChange}
              className="w-full mt-1 border border-black"
            />
          </label>
          {errors.description && (
            <p style={{ color: "red" }}>{errors.description}</p>
          )}
          <br />
          <label>
            Date :
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="w-full h-9 border border-black"
            />
          </label>
          {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
          <br />
          <label>
            Location:
            <br />
            <input
              type="text"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              className="w-full h-9 mt-1 border border-black"
            ></input>
          </label>
          {errors.location && <p style={{ color: "red" }}>{errors.location}</p>}
          <br />
          <label>
            latitude:
            <br />
            <input
              type="number"
              name="latitude"
              value={eventData.latitude}
              onChange={handleChange}
              className="w-full h-9 mt-1 border border-black"
            ></input>
          </label>
          {errors.latitude && <p style={{ color: "red" }}>{errors.latitude}</p>}
          <br />
          <label>
            longitude:
            <br />
            <input
              type="number"
              name="longitude"
              value={eventData.longitude}
              onChange={handleChange}
              className="w-full h-9 mt-1 border border-black"
            ></input>
          </label>
          {errors.longitude && (
            <p style={{ color: "red" }}>{errors.longitude}</p>
          )}
          <br />
          <br />
          <button
            type="submit"
            className="w-25 py-2 bg-gray-800 text-white hover:bg-gray-400 rounded"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
