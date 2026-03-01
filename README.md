# Barbershop Scheduling API

Hair Day is a simple and modern appointment scheduling application built with vanilla JavaScript.

The project allows users to:

	- Select available hours
	- Schedule appointments
	- Load appointments by selected day
	- Cancel appointments
	- Persist data using a local API (JSON Server)

This project was created to practice modular architecture, API communication, DOM manipulation, and clean frontend structure without frameworks.

---

## Features

	- Dynamic hour loading based on selected date
	- Appointment creation (name + date + time)
	- Daily schedule filtering
	- Appointment cancellation
	- Real-time UI updates
	- Local API persistence (JSON Server)

---

## Project Structure
	src/
	├── assets/
	├── libs/
	├── modules/
	│   ├── form/
	│   └── schedules/
	├── services/
	├── styles/
	└── utils/

---

### Architecture Overview

	- **modules/** → UI logic and interactions
	- **services/** → API communication layer
	- **utils/** → helper data and utilities
	- **libs/** → third-party libraries (dayjs)
	- **styles/** → CSS files

---

## Tech Stack

	- Vanilla JavaScript (ES Modules)
	- Webpack
	- Day.js
	- JSON Server (mock API)
	- HTML + CSS

---

## API Endpoints

	GET    /schedules
	POST   /schedules
	DELETE /schedules/:id

---

## Learning Objectives

This project focuses on:

	•	Modular JavaScript architecture
	•	Separation of concerns
	•	Async workflows and API integration
	•	DOM event delegation
	•	Error handling and state synchronization
	•	Frontend ↔ backend communication without frameworks

  ---

  ## Development Notes

During development, several structural and visual issues were resolved, including:

	•	API integration flow
	•	Schedule rendering logic
	•	Correct DELETE handling
	•	Consistent ID management
	•	Frontend and backend synchronization
	•	UI stability and DOM updates

---

## 📁 Important Files

	•	server.json → local database used by JSON Server
	•	api-config.js → API base URL configuration
	•	services/ → API operations (fetch, create, delete)
	•	modules/schedules/ → schedule rendering and interactions
  
---

## Author

	Pedro
	Software Engineering student

---

## Future Improvements

	•	Edit existing appointments
	•	Loading states and animations
	•	Better error feedback UX
	•	Authentication layer
	•	Deployable backend instead of mock API
