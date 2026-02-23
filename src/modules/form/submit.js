import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector('form');
const clientName = document.getElementById('client');
const selectDate = document.getElementById('date');

// Input Date Config.
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

// Set the minimum date and value.
selectDate.value = inputToday;
selectDate.min = inputToday;

form.onsubmit = async (event) => {
    // Prevent form submission for demonstration purposes.
    event.preventDefault();

    try {
        // Getting client name.
        const name = clientName.value.trim();
        if (!name) {
            return alert('Informe o nome do cliente.');
        }
        // Getting selected time.
        const hourSelected = document.querySelector(".hour-selected");

        if (!hourSelected) {
        return alert("Selecione um horário para o agendamento.");
        }

        // Recover only hour from the selected time.
        const [hourStr] = hourSelected.innerText.split(":");
        const hour = Number(hourStr);
        // Insert the hour in the date selected.
        const when = dayjs(selectDate.value).add(hour, 'hour');

        // Generate a random ID for the appointment.
        const id = String(new Date().getTime());
        // Save the appointment in the API.
        await scheduleNew({
            id,
            name,
            when,
        })
        // Refresh the appointments shown for the selected date.
        await schedulesDay();
        // Clear the customer name form.
        clientName.value = "";
    }
    catch (error) {
        alert('Não foi possível realizar o agendamento. Tente novamente mais tarde.');
        console.log(error);
    }
};