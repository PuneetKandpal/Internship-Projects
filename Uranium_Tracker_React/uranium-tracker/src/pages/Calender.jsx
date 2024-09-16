import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchCalendarData } from "../store/slices/apiSlice";
import { useEffect, useState } from "react";
import Loader from "../components/Loader"; // Loader component
import YearCalendar from "../components/YearCalendar"; // Yearly Calendar Component

const Calendar = () => {
  const dispatch = useDispatch();
  const calendarData = useSelector((state) => state.api.calendar);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCalendarData());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === "succeeded") {
      setIsLoading(false);
    }
  }, [status]);

  return (
    <>
      <Navbar />
      <div className=" px-6 md:px-20 mt-6">
        {isLoading ? (
          <Loader /> // Show Loader while fetching data
        ) : (
          <YearCalendar events={calendarData.event_data} /> // Pass event data to YearCalendar component
        )}
      </div>
      <Footer />
    </>
  );
};

export default Calendar;
