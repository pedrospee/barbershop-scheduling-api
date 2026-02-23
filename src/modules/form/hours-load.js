import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad( { date, dailySchedules } ) {
    // Catch the unavailable hours for the selected date.
    const unavailableHours = dailySchedules.map((schedule) => 
        dayjs(schedule.when).format("HH:mm")
    );

    const opening = openingHours.map((hour) => {
        // Recover only the hour number.
        const [scheduleHour] = hour.split(":");

        // Add hour to date and check if it's in the past.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

        const available = !unavailableHours.includes(hour) && !isHourPast;

         // Define if the hour is available or not.
        return {
            hour,
            available,
        }
    });
    // Render hours.
    hours.innerHTML = "";
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li");
        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");
        li.textContent = hour;
        

        if (hour === "9:00") {
            hourHeaderAdd("Manhã", "morning");
            } else if (hour === "13:00") {
            hourHeaderAdd("Tarde", "afternoon");
            } else if (hour === "18:00") {
            hourHeaderAdd("Noite", "night");
        }

        hours.append(li);
    });

    // Add click event to hours.
    hoursClick();
}

function hourHeaderAdd(title, period) {
  const li = document.createElement("li");
  li.classList.add("hour-period");
  if (period) li.dataset.period = period;
  li.textContent = title;

  hours.append(li);
}