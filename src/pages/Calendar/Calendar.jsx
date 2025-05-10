import React, {useState} from 'react'
import  './Calendar.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

const Calendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [events, setEvents] = useState([]);
  

  // Open modal when clicking on a date
  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setModalIsOpen(true);
  };

  // Add event to calendar
  const handleAddEvent = () => {
    if (eventTitle.trim() !== '') {
      const newEvent = {
        id: String(new Date().getTime()),  // Converts the number Id to a string to give unique ID for each event and avaoid duplication of ID's
        title: eventTitle,
        start: selectedDate,  // To add starting date and time of an event in calendar.
      };
  
      setEvents([...events, newEvent]);
      setEventTitle('');
      setModalIsOpen(false);
    }
    
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete "${clickInfo.event.title}"?`)) {
      clickInfo.event.remove();  // Deletes event from FullCalendar
      setEvents((prevEvents) => prevEvents.filter(event => event.id !== clickInfo.event.id));
    }
  };
  
  return (
    
    
    <div className='calendar-container'>

      <FullCalendar plugins={[dayGridPlugin,interactionPlugin,timeGridPlugin]}
      headerToolbar={{
        left:'prev, next today',
        center: "title",
        right:"dayGridMonth, timeGridWeek, timeGridDay"
      }}
      allDaySlot={false}
      initialView="timeGridWeek"
      slotDuration={"01:30:00"}
      height={"auto"}
      editable={true}
      selectable={true}
      selectMirror={true}
      weekends={true}
      nowIndicator={true}
      dayMaxEvents={true}
      events={events}
      dateClick={handleDateClick}
      eventClick={handleEventClick}


      
      />
      {modalIsOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Event</h2>
            <input
              type="text"
              placeholder="Event Title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleAddEvent}>Add Event</button>
              <button onClick={() => setModalIsOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      
  
    </div>
    
  )
}

export default Calendar