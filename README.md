# Netflix GPT

- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented Sign Out Feature
- Update Profile API
- BugFix: Sign up userName and displayProfile picture update
- BugFix: If the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribe to the onAuthStateChanged callback
- Add hardcoded values to the constant file
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies list API
- Custom hook for Now Playing Movies
- Create movieSlice
- Update store with movies Data
- Planning for MainContainer & SecondaryContainer
- Fetch data for trailer video
- Update store with Trailer Video Data
- Embedded the Youtube Video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Creating Movie Suggestion List
- Custom Hooks for Popular, Top Rated & Upcoming Movies List.
- GPT Search Feature.

## Features

- Login/ Sign up
  - Sign In / Sign up Form
  - Redirect to Browse Page
- Browse (After Authentication)

  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - MovieSuggestions
      - MoviesList \* N

- Netflix GPT
  - Search Bar
  - Movie Suggestions

## Steps for Deployment

0. Install firebase CLI - `npm install -g firebase-tools`
1. Firebase Login - `firebase login`
2. Initialize Firebase - `firebase init` , then select Hosting
3. Deploy command a `firebase deploy`
