import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
    try {
        // Request the schedules from the API for the specified date.
        const reponse = await fetch(`${apiConfig.baseURL}/schedules`);
        // Convert the response to JSON format.
        const data = await reponse.json();
        //Filter the schedules to return only those that match the specified date.
        return data.filter((schedule) =>
            dayjs(schedule.when).isSame(dayjs(date), "day")
        );
    }
    catch (error) {
        console.log(error);
        alert('Não foi possível carregar os agendamentos. Tente novamente mais tarde.');
    }
}