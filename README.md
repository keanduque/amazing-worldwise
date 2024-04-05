# My Amazing Worldwise

this app is a Worldwise app created in Vite + React,
this app has a following feature below :

-   Single Page Application
-   it has Routing to navigate to Cities and Countries
    -   it has nested routes and index route
-   implement the cities list and countries list
-   with city fake api data inside
-   storing the state in the url
-   dynamic routes with url parameters
-   reading and setting a query string
-   use the useNavigate in imparative and declarative way
-   Programmatic Navigation with useNavigate
-   Programmatic Navigation with <Navigate />
-   Creating and Providing a Context and Consuming the value
-   Advanced Pattern: Custom Provider and Hook
-   Displaying Map using Leaflet based on position, countries and cities
-   Displaying city markers on Map
-   Interactding with the Map
-   Setting map Position with Geolocation
-   Fetching City data in the form
-   Creating a New City
-   Deleting a City
-   Advanced State management System: Context + useReducer
-   Implementing User Authentication using Fake Authentication:
    1.  Setting up context Login, get users email and pass then check those credentials
    2.  Redirect the user to the main Application
    3.  Protecting a Route for unAuthorize access, for users not currently log-in
-   Apply Performance Optimization
    -   Apply memoization (memo, useMemo and useCallback)
    -   Optimizing Context Re-renders
    -   Optimizing the bundle size with lazy code-splitting and Suspense API

## Other Info:

Node version : v18.16.0

In the project directory, you can run:

## React Features:

-   useReducer, useEffect, Context API pattern

## Other Tools & 3rd party Library

-   ReactRouter
-   FakeAPI
-   use of CSSModules
-   React Leaflet
-   React DatePicker

to add router on react https://reactrouter.com/en/main

```node
npm i react-router-dom
```

for Fake API data/cities.json

```node
npm i json-server

# add this line under the scripts under package.json
"scripts": {
    "...",
    "server": "json-server --watch data/cities.json --port 8000"
},

http://localhost:8000/cities
```

biggest library to implement map https://react-leaflet.js.org/
https://leafletjs.com/examples/quick-start/

```node
npm i react-leaflet leaflet
```

React Date Picker https://www.npmjs.com/package/react-datepicker

```node
npm i react-datepicker
```

### `npm run dev`

VITE v4.5.2

➜ Local: http://localhost:5173/
➜ Network: use --host to expose
➜ press h to show help

### `npm run server` to run fake API

data/cities.json

Index:
http://localhost:8000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:8000/cities

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
