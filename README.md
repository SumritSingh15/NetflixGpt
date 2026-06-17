🎬 Netflix-GPT (React + Vite)

A Netflix-inspired web application built with React + Vite that provides movie browsing experience with Firebase Authentication, Redux state management, TMDB movie API, and AI-powered movie recommendations using Grok AI.

🚀 Tech Stack
- React + Vite
- Tailwind CSS
- Firebase Authentication
- Redux Toolkit
- React Router DOM
- TMDB API
- Grok AI (Movie Recommendation Engine)

✨ Features
- 🔐 Authentication
- User Sign Up & Sign In
- Form validation using useRef
- Firebase authentication integration
Protected routes
Sign Out functionality
Update user profile
User state managed using Redux (userSlice)

🏠 Browse Page (After Authentication)
Netflix-style Header
Main Movie Section
Background trailer video
Movie title & description
Movie Suggestions Carousel
Movies fetched from TMDB API

🎥 Movie Categories

Trending Movies

Popular Movies

Top Rated Movies

Upcoming Movies
(All categories fetched dynamically from TMDB API)

🤖 Netflix-GPT (AI Movie Recommendation)
Search bar for movie queries
AI-powered movie suggestions using Grok AI
Displays recommended movies based on user input
Integrated with TMDB movie data

🔄 Routing

/ → Login / Signup Page
/browse → Browse Page (Protected Route)
/gpt → Netflix-GPT AI Search Page

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/netflix-gpt.git
cd netflix-gpt

2️⃣ Install dependencies
npm install

3️⃣ Environment Variables

Create a .env file in root and add:

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_GROK_API_KEY=your_grok_api_key

4️⃣ Run the project
npm run dev

🛠 Key Concepts Implemented
React Hooks (useState, useEffect, useRef)
Firebase Authentication (Sign Up / Sign In / Sign Out)
Redux Toolkit (Global user state)
Protected Routes
API integration (TMDB & Grok AI)
Tailwind CSS responsive UI
Dynamic movie categories


🌱 Future Enhancements
Add Watchlist feature
Add movie details page
Add trailer modal popup
Multi-language support
Dark/Light theme toggle
Pagination & infinite scroll
Improve AI recommendation accuracy

👨‍💻 Author
Sumrit Singh
Frontend Developer (React, JavaScript, Tailwind CSS)

📜 License
This project is created for learning and educational purposes only.
