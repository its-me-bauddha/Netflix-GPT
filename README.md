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
