export function hoursClick() {
    const hours = document.querySelectorAll(".hour-available");

    hours.forEach(( available ) => {
        available.addEventListener("click", (selected) => {
            // Remove the "hour-selected" class from all hours and add it to the selected hour.
            hours.forEach((hour) => 
                hour.classList.remove("hour-selected"));
            // Add the "hour-selected" class to the clicked hour and remove it from the others.
            selected.target.classList.add("hour-selected");
        });
        
    });
}