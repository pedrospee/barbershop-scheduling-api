import { schedulesDay } from "../schedules/load.js";

// Select input date.
const selectedDate = document.getElementById('date');

// Reload hours list when the date changes.
selectedDate.onchange = () => {
    schedulesDay();
}