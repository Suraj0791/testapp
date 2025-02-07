# Quiz Application

A modern, gamified quiz application built with Next.js 13+ App Router that provides an engaging learning experience.

## Features

- 📱 Responsive modern UI with beautiful animations
- 🎮 Gamification elements (points, progress tracking, achievements)
- 📊 Detailed quiz results and performance analytics
- ⚡ Real-time feedback and scoring
- 🔄 Seamless API integration
- 🎨 Clean and intuitive design

## Tech Stack

- Next.js 13+ (App Router)
- Tailwind CSS
- Shadcn/ui Components
- Zustand (for complex state management)
- Server Actions for API integration

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/quiz-app.git
\`\`\`

2. Install dependencies:
\`\`\`bash
cd quiz-app
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

\`\`\`
quiz-app/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── quiz/
│   │   ├── page.js
│   │   ├── loading.js
│   │   └── error.js
│   └── results/
│       └── page.js
├── components/
│   ├── ui/
│   ├── quiz/
│   │   ├── question-card.js
│   │   ├── progress-bar.js
│   │   ├── timer.js
│   │   └── score-display.js
│   └── shared/
│       ├── loading-spinner.js
│       └── error-message.js
├── lib/
│   ├── api.js
│   └── utils.js
├── store/
│   └── quiz-store.js
└── public/
    └── assets/
\`\`\`

## API Integration

The application fetches quiz data from the provided API endpoint. Error handling and data validation are implemented to ensure robust performance.

## Gamification Features

- Point scoring system
- Progress tracking
- Achievement badges
- Leaderboard
- Time-based challenges
- Streak counting

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

