import React, { useState } from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

const getDaysInMonth = (year, month) => {
  const daysInMonth = dayjs(`${year}-${month + 1}`).daysInMonth();
  const startDay = dayjs(`${year}-${month + 1}-01`).day();

  return [
    ...new Array(startDay).fill(null),
    ...new Array(daysInMonth).fill(null).map((_, i) => i + 1),
  ];
};

const isDateInRange = (eventDate, date) => {
  const rangePattern = /(\w+ \d+)-(\d+), (\d+)/;
  const singlePattern = /(\w+ \d+), (\d+)/;

  if (rangePattern.test(eventDate)) {
    const [, startMonthDay, endDay, year] = eventDate.match(rangePattern);
    const startDate = dayjs(`${startMonthDay}, ${year}`);
    const endDate = dayjs(`${startMonthDay.split(" ")[0]} ${endDay}, ${year}`);
    return date.isBetween(startDate, endDate, "day", "[]");
  } else if (singlePattern.test(eventDate)) {
    return dayjs(eventDate).isSame(date, "day");
  }

  return false;
};

const formatEventDate = (eventDate) => {
  const rangePattern = /(\w+ \d+)-(\d+), (\d+)/;
  const singlePattern = /(\w+ \d+), (\d+)/;

  if (rangePattern.test(eventDate)) {
    const [, startMonthDay, endDay, year] = eventDate.match(rangePattern);
    return `${startMonthDay} - ${endDay}, ${year}`;
  } else if (singlePattern.test(eventDate)) {
    return eventDate;
  }

  return "";
};

const YearCalendar = ({ events }) => {
  const currentYear = dayjs().year();
  const [hoveredDate, setHoveredDate] = useState(null);

  const eventColors = [
    "bg-[#bc7ebc]",
    "bg-[#d88e9b]",
    "bg-[#71b571]",
    "bg-[#7abde1]",
  ];

  return (
    <div className="mx-auto px-4 py-8 mt-24">
      <h2 className="text-3xl font-bold mb-12 text-center text-white frank">
        {currentYear} Yearly Calendar
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-1">
        {Array.from({ length: 12 }).map((_, month) => (
          <div
            key={month}
            className="bg-zinc-800/20 shadow-md rounded-sm p-4 relative"
          >
            <h3 className="text-lg font-medium mb-4 text-center text-white ">
              {dayjs().month(month).format("MMMM")}
            </h3>
            <div className="grid grid-cols-7 gap-1 text-center text-[13px] text-white">
              {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                <div key={day} className="w-6 h-6 text-[13px]">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 mt-2 text-[13px] relative">
              {getDaysInMonth(currentYear, month).map((day, idx) => {
                const date = day
                  ? dayjs(`${currentYear}-${month + 1}-${day}`)
                  : null;
                const event =
                  day &&
                  events.find((event) => isDateInRange(event.date, date));
                const eventColor = event
                  ? eventColors[events.indexOf(event) % eventColors.length]
                  : "bg-zinc-800/70";
                const textColor = event ? "text-black1" : "text-white";

                return (
                  <div
                    key={idx}
                    className={`w-6 h-6 flex items-center justify-center cursor-pointer transition-colors
        ${day ? `${eventColor} ${textColor}` : ""} relative`}
                    onMouseEnter={() => setHoveredDate(date)}
                    onMouseLeave={() => setHoveredDate(null)}
                  >
                    <span>{day}</span>
                    {event && hoveredDate?.isSame(date, "day") && (
                      <div className="absolute z-50 left-full ml-1 overflow-auto top-1/2 transform -translate-y-1/2 whitespace-nowrap">
                        <div className="bg-yellow-300 text-wrap text-black text-sm rounded-md px-2 py-1 flex items-center">
                          <span className="mr-1">*</span>
                          <span>{event.title}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-zinc-800/20 text-white p-6 rounded-sm shadow-lg flex flex-col md:flex-row overflow-hidden"
          >
            {/* Date column */}
            <div className="flex flex-col items-center justify-center pr-6 border-b md:border-r border-white/5 md:border-b-0 mb-4 md:mb-0">
              <span className="text-lg font-bold pb-3 md:pb-0">
                {formatEventDate(event.date)}
              </span>
            </div>

            {/* Event details column */}
            <div className="flex-grow pl-0 md:pl-6">
              <h3 className="text-xl font-semibold text-lime1 mb-3 frank">
                {event.title}
              </h3>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold mr-2">Location:</span>
                  <a
                    href={event.location_link}
                    className="hover:text-blue-400 transition-colors text-white/60"
                  >
                    {event.location}
                  </a>
                </p>
                <p>
                  <span className="font-semibold mr-2">Sponsor:</span>
                  <a
                    href={event.sponsor_link}
                    className="hover:text-blue-400 transition-colors text-white/60"
                  >
                    {event.sponsor}
                  </a>
                </p>
                {event.contact !== "N/A" && (
                  <p>
                    <span className="font-semibold mr-2">Contact:</span>
                    <span className="text-white/60">{event.contact}</span>
                  </p>
                )}
                <p className="mt-3 text-white/60">{event.description}</p>
                <div className="mt-4">
                  <a
                    href={event.link}
                    className="inline-flex items-center py-1 text-white/40 hover:text-lime2 text-[11px] md:text-[14px]"
                  >
                    View More
                    <i className="ri-arrow-right-s-line ml-1 text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearCalendar;
