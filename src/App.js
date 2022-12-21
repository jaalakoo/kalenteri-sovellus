import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
//import { filterEventStoreDefs } from "fullcalendar";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { isDOMComponent } from "react-dom/test-utils";
import "./App.css";

const locales = {
  "fi": require("date-fns/locale/fi"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events =[
 /* {
    title: "Tapaaminen",
    allDay: true,
    start: new Date(2022,11,6),
    end: new Date(2022,11,7),
  },
  {
    title: "Loma",
    start: new Date(2022,11,22),
    end: new Date(2023,0,9),
  },*/

];

function App() {

  const  [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const  [allEvents, setAllEvents] = useState(events)
  
function handleAddEvent(){
  setAllEvents([...allEvents, newEvent])
}

  return (
    <div className="App">
      <h1>Eevan ja Jaanan kalenteri</h1>
      <h2>Lisää uusi tapahtuma</h2>
      <div>
       <input type ="text" placeholder="Lisää tapahtuman otsikko" style={{width: "20%", marginRight: "10px)"}}
          value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
          />
          <DatePicker placeholderText="Alku" style={{marginRight: "10px"}}
          selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}/>
          <DatePicker placeholderText="Loppu" style={{marginRight: "10px"}}
          selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}/>
          <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Lisää tapahtuma</button>
      </div>
      <Calendar 
        localizer={localizer}
        events={allEvents}
        startAccessor="start" 
        endAccessor="end" 
        style={{height:500, margin: "50 px"}}/>
    </div>
  );
};

export default App;
