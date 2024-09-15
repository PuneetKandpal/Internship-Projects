import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { fetchCalendarData } from "../store/slices/apiSlice";
import Loader from "../components/Loader"; // Import your loader component
import { useEffect, useState } from "react";

const Calender = () => {
  const dispatch = useDispatch();
  const calendarData = useSelector((state) => state.api.calendar);
  console.log(calendarData);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading state

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCalendarData());
    }
  }, [status, dispatch]); // Removed isLoading from dependency array

  useEffect(() => {
    if (status === "succeeded") {
      setIsLoading(false); // Set loading to false when data is fetched
    }
  }, [status]); // Separate useEffect to handle loading state

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Calender;
