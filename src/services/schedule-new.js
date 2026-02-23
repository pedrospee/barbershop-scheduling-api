import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when}) {
    try {
        // Send a POST request to the API to create a new schedule.
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                name,
                when,
            }),
        });
        // Alert the user that the appointment was successfully created.
        alert('Agendamento realizado com sucesso!');
    }
    catch (error) {
        alert('Não foi possível realizar o agendamento. Tente novamente mais tarde.');
        console.log(error);
    }
    
}