# Quiz App

An interactive, gamified quiz application built with Next.js and React. The app fetches quiz data from a remote API and provides a smooth user experience with features such as a countdown timer, live score display, confetti effects for correct answers, and a detailed results summary.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Images & Videos](#images--videos)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

Quiz App is designed to challenge users with interactive quizzes while engaging them with gamification elements. The application:
- Fetches real-time quiz data from an external API.
- Displays questions with clickable, well‑styled options.
- Integrates a countdown timer and live score display.
- Celebrates correct answers with a confetti effect.
- Provides a summary of results, including total points scored, questions answered, and percentage achieved.

## Features

- **Clean & Intuitive UI:** Modern design with a user-friendly interface.
- **Dynamic Quiz Data:** Seamless integration with a remote API for fetching quiz content.
- **Gamification Elements:** Includes a timer, live score display, and confetti animations for positive feedback.
- **Results Summary:** Displays total points, questions answered, and performance percentage.
- **Modular Architecture:** Easy-to-read, maintainable, and well‑documented code.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) (v6 or above) or [yarn](https://yarnpkg.com/)

### Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd quiz-app


2.Install Dependencies:

Using npm:

npm install 
if any issues faced due to react19 use npm install --legacy-peer-deps


Using yarn:

yarn install

3. Start the Development Server:
npm run dev


4. Open your browser and navigate to http://localhost:3000 to view the application.

Project Structure
quiz-app/
├── app/
│   ├── layout.js         # Global layout and metadata
│   ├── page.js           # Home page
│   ├── quiz/
│   │   ├── page.js       # Main quiz page with questions, timer, and score display
│   │   ├── loading.js    # Loading component for the quiz route
│   │   └── error.js      # Error component for the quiz route
│   └── results/
│       └── page.js       # Results summary page
├── components/
│   ├── ui/               # UI components (button, card, progress, toast)
│   ├── quiz/             # Quiz-specific components (question-card, progress-bar, timer, score-display)
│   └── shared/           # Shared components (loading-spinner, error-message)
├── lib/
│   ├── api.js            # API integration and data fetching logic
│   └── utils.js          # Utility functions (time formatting, etc.)
├── store/
│   └── quiz-store.js     # Global state management using Zustand
└── public/
    └── assets/           # Folder for images, videos, and other public assets


IMAGES AND VIDEOS
ALL THE PHOTOS VIDEOS ARE IN PUBLIC FOLDER 
![alt text](<Screenshot (696).png>)

![](<Screenshot (697).png>)

![alt text](<Screenshot (698).png>)
![alt text](<Screenshot (698)-1.png>)

<video controls src="quiz.mp4" title="Title"></video>



---

This `README.md` provides an in‑depth overview of your project, including setup instructions, a detailed project structure, and dedicated sections for images and videos. Adjust any sections (e.g., repository URL, contact details) as needed for your project.



