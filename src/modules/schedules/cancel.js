import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll('.period');

// Generate a click event on each list. (Manhã, Tarde and Noite).
periods.forEach((period) => {
    // Capture the click event on list items.
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            // Obtain the li element of item clicked.
            const item = event.target.closest("li");
            // Get the appointment ID to remove from database.
            const { id } = item.dataset;

            // Confirm if the ID was selected.
            if (id) {
                // Confirm if the user really wants to cancel the appointment.
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar este agendamento?"
                );
                if (isConfirm) {
                    await scheduleCancel({ id });
                    schedulesDay();
                }
            }
        }
    })
});