# Startup
CS260 Startup Application project

## Elevator Pitch
I love creative writing, but I almost never have time for it anymore. That is, I never make time for it anymore, and I don't want to bite off more than I can chew, so I hold myself back from starting on anything. That's where Promptr comes in. Everyday at 9:00 am a new prompt is put up that every user gets, or they can choose to "free-write". Users can see each other's work, and you can keep yourself accountable for writing every day!

### Key Features
- Profile creation and Login
- Viewing your profile with everything you have written on the site
- Viewing what other users have written using the site
- Selecting whether to write based on a prompt or free-write
- Time related update from the server to change to a new prompt every day

### Technologies
- __HTML__: Using correct HTML for application. Four pages: one for login, viewing previously written projects in a profile, viewing what others have submitted in a feed, and one to write and submit
- __CSS__: Dynamic sizing, good whitespace, and general color theme
- __JavaScript__: Login, Navigation Bar, displaying information, updating prompts
- __Service__: Backend service with endpoints for: 
    1. Login
    2. Retrieving submissions
    3. Submitting
- __DB/Login__: Store users, and submissions in database. Register and login users. Credentials securely stored in database. Can't submit or view feed unless authenticated.
- __WebSocket__: As users make submissions, make them viewable to other users on the feed and to themselves on their profiles
- __React__: Port application to use the React framework