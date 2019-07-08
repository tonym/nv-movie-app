This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Installation

1. npm install
2. npm start
3. It should open the landing page in a browser, but, if it doesn't, navigate to localhost:3000

### The stack

1. Typescript (https://www.typescriptlang.org/)
2. React (Create React App) (https://facebook.github.io/create-react-app/)
3. Redux (https://redux.js.org/)
4. redux-thunk (https://github.com/reduxjs/redux-thunk)
5. Material-UI (https://material-ui.com/)
6. Jest (https://jestjs.io/en/)
7. Enzyme (https://airbnb.io/enzyme/)
8. Some other packages to mock async requests for testing. They can be found in package.js

### Notes

The .env file contains the API connection stuff (URL, and API key).
This file should NEVER be in a respository, however, since this is a pretend app, I put it there to make installation easier.
In production, however, this is poor practice.

To run tests, run the test script:
1. npm run test

To see test coverage (which is less than 100%), run:
1. npm run test -- --coverage
(Notice the -- in the middle? It's not a typo.)

For the login page, enter whatever you want.
Auth isn't a thing in this app, it just uses what you give it, but it's a nice way to collect a user name, and display it in the app bar.

The initial page is a search form.
The search form may also be accessed in the app bar.
Once the inital search is complete, empty state is represented by a no results message, and the search form in the app bar may again be used.

The UI is responsive.
You can use it on a phone, however, it does follow the overflow (side scrolling) pattern for large tables.
While the UI here uses the layout and components from Material-UI, other data display components (such as react-virtualized) are more suited to mobile.
