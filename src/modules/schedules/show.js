import dayjs from "dayjs";

// Select the sections Manhã, Tarde and Noite.
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
    try {

        // Clean the sections Manhã, Tarde and Noite before showing the appointments for the selected date.
        periodMorning.innerHTML = "";
        periodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        // Render the appointments for the selected date.
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li");
            const time = document.createElement("strong");
            const name = document.createElement("span");

            // Add appointement ID.
            item.setAttribute("data-id", schedule.id);

            time.textContent = dayjs(schedule.when).format("HH:mm");
            name.textContent = schedule.name;

            // Create appointment cancel icon.
            const cancelIcon = document.createElement("img");
            cancelIcon.classList.add("cancel-icon");
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
            cancelIcon.setAttribute("alt", "Cancelar agendamento");

            // Add time, name and item icon.
            item.append(time, name, cancelIcon);

            // Get only the hour.
            const hour = dayjs(schedule.when).hour();

            // Render the appointments in the correct period.
            if (hour < 12) {
                periodMorning.appendChild(item);
            } else if (hour >= 12 && hour < 18) {
                periodAfternoon.appendChild(item);
            } else {
                periodNight.appendChild(item);
            }
       });
        
    } catch (error) {
        alert('Não foi possível carregar os agendamentos. Tente novamente mais tarde.');
        console.log(error);
    }
}