# Audience Screen SPA (React + Vite)

This project is a **Single Page Application** built with **React** and **Vite**. It displays an interactive audience screen that changes state when the button is clicked.

## Project Idea

The app simulates a simple screen system with 3 states:

- `Idle`
- `Active`
- `Error`

When the **Change State** button is clicked, the state cycles through:

`Idle → Active → Error → Idle`

Each state updates the screen appearance (color and text effects) without reloading the page.

## Features

- Full-screen layout (`100vh`)
- Centered content (title + current state + button)
- Instant state switching on click
- Clear separation between UI and state logic
- Neon-style visual effects based on the current state

## Project Structure

- `src/components/AudienceScreen.jsx`  
	Responsible for rendering the UI and connecting the button to state changes.

- `src/hooks/useScreenState.js`  
	Contains state management logic and the `changeState` function.

- `src/App.jsx`  
	Renders the `AudienceScreen` component.

## Tech Stack

- React 18
- Vite 5
- JavaScript (ES Modules)
- ESLint

## Run Locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Useful Commands

```bash
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Run lint checks
```

## Note

This project is suitable as a practice app to understand:

- State management in React
- Building a simple SPA
- Organizing code between `components` and `hooks`