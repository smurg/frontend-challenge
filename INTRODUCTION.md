### Introduction

This project was done using `yarn` and in order to be not too much development time consuming, I will be using the create-react-app configurations from `react-scripts`, so no `webpack` or `babel` configuration needed.

### Dependencies

The dependencies needed to create this solution detailed under `package.json` file are:
	- `redux & react-redux`: to handle centralized state.
	- `react-router`: we will have each step of the form in different urls.
	- `Enzime`: test utility to be used with Jest testing framework.
	- `semantic-ui-css & semantic-ui-react`: these packages are used to build the UI of the app. I used the React version of Semantic UI, that fits pretty well and provides me with clean, responsive styling without having to put too much time into rolling my own CSS. prebuilt 

### File Structure

```
frontend-challenge
└── src
    ├── App.js
    ├── App.test.js
    ├── index.js
    ├── Components
            └── components grouped by feature/routes in folders. 
    ├── store
    ├── reducers
    └── actions
```

Under Components we have all components of the app grouped by routes. Under `common` we have a all common components that are reused.
The folders `store` `reducers` & `actions` we have the files related with redux. 

### Comments about the solution

**The challenge consists of building a multiple step form to collect basic user data. Each step should have its own route.** 
My idea is to create a routable wizard form. As each step of the wizard will have a different `route`, each step will be an independant piece of the app and have a single responsability of getting the data it needs to get from the user. 

We will have a complex `data-flow` (components in different routes will change/display same state) because there is a communication between components without parent/child relationship (step 1 and 2 change data, confirmation step will read it),that's why we use `redux` in order to handle a centralized/shared store. 

- Inside `RoutableWizzardForm.js` component we define different routes that the wizard will have. **NOTE: As a matter of simplicity we don't validate redirections if user enter a route by url and didn't load the previous step yet.**
- Inside each `Components` we have the Container component `{ComponentName}Page` that will connect with Redux, subscribing to redux-state and dispatching redux actions from it's events. Other components inside the folder will be just `presentational or dumb` components that receive data and events as props and render the UI of the component. 
- As the intention is to create reusable components, inside `common` folder I added one Higher Order Component (HOC) in charge of doing the redirections. Each form of each step is in charge of just getting data from user input. We rely on another component (`RoutableComponentFormHOC`) to do the redirection. 
- When Submitting the data to the backend we will receive a `success` or `error` message. We need to display the corresponding message and allow the user to restart the process, reseting the app `state` before that. As both pages do the same task (the only difference is the message displayed) I realized we can have one single Component `SubmitMessagePage` in charge of the reset of the `app state` and deppending on the url we can render `error` or `success` message. those components will be just presentational components (`ErrorMessage` & `SuccessMessage`).
- On this challenge we will have to do just two api calls. To fetch the list of colors and to POST the data.  React’s ecosystem is a flexible framework, we can use a library such us `axios` (that uses promises and works on all browsers). But for the sake of simplicity, on this solution I will use the native `fetch` API that comes with the browser. **NOTE: beware this fetch api is not implemented in IE11. If we need to give a full cross-browsing solution, we need to use a library like axios or another**
- As we have 2 different api calls, and they can take some time to succeed, we have a spinner using the `Form -> loading prop` from `semantic-UI` components.  
- Forms: all fields are required. This is implemented by not allowing the user to continue unless all fields are completed. On the first step, we have also a validation of email well formatted, it's a simple regex checking implementation, but if you add an email without `@` it will throw a validation error, that will be removed when user start to typing back.

### Tests
I implemented a bunch of tests but just for the presentational components in order to keep it short. In a more in-production app, it's recommended to create tests for each component you create. 
For these tests, I used `Jest` that is preconfigured inside `react-scripts` but also added `Enzyme` a Javascript testing utility created by `airbnb` that makes it easier to assert, manipulate, and traverse React Components' output.
