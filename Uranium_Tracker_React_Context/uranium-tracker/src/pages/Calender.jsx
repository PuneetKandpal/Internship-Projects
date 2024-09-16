import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader"; // Loader component
import YearCalendar from "../components/YearCalendar"; // Yearly Calendar Component
import { CalendarContext } from "../context/CalendarContext";
import { useContext } from "react";

const Calendar = () => {
  const { data, loading, error } = useContext(CalendarContext); // Changed homeData to data

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <Navbar />
      <div className="container px-6 md:px-20 mt-6">
        <YearCalendar calendarData={data.event_data} />
      </div>
      <Footer />
    </>
  );
};

export default Calendar;
