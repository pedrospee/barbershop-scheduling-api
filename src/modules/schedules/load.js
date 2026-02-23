
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"; 
import { schedulesShow } from "./show.js";
import { hoursLoad } from "../form/hours-load.js";


 // Select date input.
export async function schedulesDay() {
  const selectedDate = document.getElementById("date");
  const date = selectedDate.value;

  // Search for appointments in the API.
  const dailySchedules = await scheduleFetchByDay({ date });

  //Show the appointments found for the selected date.
  schedulesShow({ dailySchedules });

  // Render the available hours for the selected date.
  hoursLoad({ date, dailySchedules });
}