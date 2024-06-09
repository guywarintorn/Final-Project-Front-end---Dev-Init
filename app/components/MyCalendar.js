import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Calendar() {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleAddEvent = () => {
    const title = prompt('Enter event title');
    if (!title) {
      alert('Please enter your event.');
      return;
    }

    const dateStr = prompt('Enter a date in YYYY-MM-DD format');
    const date = new Date(dateStr + 'T00:00:00');

    if (!isNaN(date.valueOf())) {
      const newEvent = {
        title: title,
        start: date,
        allDay: true
      };
      setEvents([...events, newEvent]);
      alert('Great. Now, update your database...');
    } else {
      alert('Invalid date.');
    }
  };

  const handleClearEvents = () => {
    setEvents([]);
    alert('Cleared events');
  };

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        initialView={'dayGridMonth'}
        headerToolbar={{
          start: isMobile ? 'prev,next today' : 'clearEventsButton prev,next today',
          center: 'title',
          end: isMobile ? 'addEventButton clearEventsButton' : 'dayGridMonth,timeGridWeek,timeGridDay addEventButton'
        }}
        customButtons={{
          addEventButton: {
            text: 'add event...',
            click: handleAddEvent
          },
          clearEventsButton: {
            text: 'Clear Events',
            click: handleClearEvents
          }
        }}
        height={'90vh'}
        events={events}
      />
    </>
  )
}
