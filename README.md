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

##  GIthub link 
https://github.com/Suraj0791/testapp




### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) (v6 or above) or [yarn](https://yarnpkg.com/)

### Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Suraj0791/testapp.git
   cd testapp


2.Install Dependencies:

Using npm:

npm install 
if any issues faced due to react19 use npm install --legacy-peer-deps


Using yarn:

yarn install

3. Start the Development Server:
npm run dev


4. Open your browser and navigate to http://localhost:3000 to view the application.

## Project Structure

```plaintext
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

https://github.com/user-attachments/assets/9c49e1e1-d34a-4c48-b62e-781804ba3ba0

![Image](https://github.com/user-attachments/assets/548cac35-9ecb-4de5-a255-963ce5524778)

![Image](https://github.com/user-attachments/assets/0445f15f-4018-4b91-afc4-af6e37378559)

![Image](https://github.com/user-attachments/assets/9c683538-937f-4841-ba0d-69615f414146)

![Image](https://github.com/user-attachments/assets/915b72e0-6550-457a-be12-720862f65a73)

https://github.com/user-attachments/assets/61fa84d3-015d-4541-877e-b7ec23370967





---

This `README.md` provides an in‑depth overview of your project, including setup instructions, a detailed project structure, and dedicated sections for images and videos. Adjust any sections (e.g., repository URL, contact details) as needed for your project.



