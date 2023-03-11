## Getting Started with Redux

0. **What is Redux?**
Redux is a predictable state container for JavaScript apps based on the Flux design pattern. Redux can be used together with ReactJS, or with any other view library. It is small and has no dependencies.

1. **Redux Thunk:-**
Redux Thunk is a middleware that allows you to call the action creators that return a function(thunk) which takes the store's dispatch method as the argument and which is afterwards used to dispatch the synchronous action after the API or side effects has been finished.

2. **Redux Middleware:-** 
Redux middleware is a snippet of code that provides a third-party extension point between dispatching an action and the moment it reaches the reducers

3. **What is middleware used for?**
 Middleware is software which lies between an operating system and the applications running on it. Essentially functioning as hidden translation layer, middleware enables communication and data management for distributed applications.

4. **Redux Logger:-** 
This library logs actions in developer console, giving traceable stack of user actions.

5. **What is the difference between Redux thunk and Redux saga?**
 Saga works like a separate thread or a background process that is solely responsible for making your side effects or API calls unlike redux-thunk, which uses callbacks which may lead to situations like 'callback hell' in some cases. However, with the async/await system, this problem can be minimized in redux-thunk.

6. **What problem does Redux solve?**
 <b>*Plug Any Data Into Any Component*</b> This is the problem that Redux solves. It gives components direct access to the data they need. Using the connect function that comes with Redux, you can plug any component into Redux's data store, and the component can pull out the data it requires.

7. **Do you need to keepIs all component states in Redux store?** 
You need to keep your application state as small as possible. You don't have to push everything in there. Only do it makes a lot of sense to keep something there Or if it makes your life easier when using Dev Tools. But we shouldn't overload its importance too much.

8. **How to add multiple middlewares to Redux?**
You can use applyMiddleware where you can pass each piece of middleware as a new argument. So you just need to pass each piece of middleware you'd like. For example, you can add Redux Thunk and logger middlewares as an argument as below,
``` js
import { createStore, applyMiddleware } from 'redux'
const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);
```

9. **What are the core principles of Redux?**
There are three core principles that Redux follows:

* Single source of truth: The global state of your app is put away in an object tree inside a single store.
* The state is read-only: State can only be changed by emitting an action, an object that explains what has happened.
* Changes are made with pure functions: This is to define how the state tree is being transformed by the actions, you have to write pure reducers.
-----------------------------------------------------------------------------------------------

10. **What is Redux DevTools?**
Redux DevTools is a live-editing time travel environment for redux with hot reloading, action replay, and customizable UI. If you don’t want to bother with installing Redux DevTools and integrating it into your project, consider using Redux DevTools Extension for Chrome and Firefox.
----------------------------------------------------------------------------------------------------

11. **How to set initial state in Redux?**
You need to pass initial state as second argument to createStore
```js
const rootReducer = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

const initialState = {
  todos: [{id:1, name:'Athul', completed: false}]
};

const store = createStore(
  rootReducer,
  initialState
);
```
12. **How to structure Redux top level directories?**
Most of the applications has several top-level directories as below
 * Components Used for “dumb” React components unaware of Redux.
 * Containers Used for “smart” React components connected to Redux.
 * Actions Used for all action creators, where file name corresponds to part of the app.
 * Reducers Used for all reducers, where file name corresponds to state key.
 * Store Used for store initialization This structure works well for small and mid-level size apps.
-----------------------------------------------------------------------------------------------

13. **What are Redux selectors and Why to use them?**
Selectors are functions that take Redux state as an argument and return some data to pass to the component. For example, to get user details from the state:
```js
const getUserData = state => state.user.data;
```
14. **What are reducers in redux?**
The reducer is a pure function that takes the previous state and an action, and returns the next state.
```js
(previousState, action) => newState
```
It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue). It's very important that the reducer stays pure. Things you should never do inside a reducer:
* Mutate its arguments;
* Perform side effects like API calls and routing transitions;
* Call non-pure functions, e.g. Date.now() or Math.random().

15. What is the difference between mapStateToProps() and mapDispatchToProps()?

mapStateToProps() | mapDispatchToProps()
--- | ---
It is a function that is used to provide the stored data to the component. | It is a function that is used to provide the action creators with props to the component.
All the results of mapStateToProps() should be the plain object that will later be merged into the component’s prop. | By mapDispatchToProps(), all the action creators are wrapped in the dispatcher call so that they may be called upon directly and will be merged into the component’s prop.
It is used to connect the redux state to the props of the react component. | It is used to connect redux actions to the react props.

16. **What is an action in Redux?**
Actions are the plain JavaScript objects which contain a type field. Action can be considered as an event that can describe something that has happened in the application.
Always remember actions should contain a small amount of information that is needed to mention what has happened.
```js
const addTodoAction = {
      type: 'ADD',
      payload: 'Buy-milk'
}
```

17. **What is “store” in redux?**
The Redux “store” carries together all the states, reducers, and actions that create the app. The store has multiple responsibilities:

* It holds the state of the current application from inside
* With the help of store.getState(); it allows access to the current state.
* With the help of the store.dispatch(action); it allows the state to be updated.
* With the help of the store.subscriber(listener); it allows to register listener callbacks.
**Store Methods**
***getState()***
***dispatch(action)***
***subscribe(listener)***
***replaceReducer(nextReducer)***
```js
import { createStore } from 'redux'

const store = createStore(todos, ['Use Redux'])



function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}
store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))
```
18. **What is the difference between React context and React redux?**
React Context | React Redux
--- | ---
This can be used in the application directly and best for passing the data to the deeply nested components. | To use this in the application, you need to code it separately and then need to merge them.
Context API doesn’t provide a large number of features. | Redux is much more powerful and provides a large number of features

19. **How to access redux stores outside a react component?**
To access the redux stores outside a react component, you need to export the store from the module where it has been created with createStore.
```js
store = createStore(myReducer);
export default store;
```

20. **What are the advantages of using Redux?**
*Redux provides extremely easy state transfer between the components.*
* The states are always predictable in Redux and its maintenance is relatively easy.
* Debugging and testing code in Redux is simple through logging behaviour and status.
* Redux provides great performance. It might occur to us that keeping the application's state global would result in bad performance. However, usually, that is not the case as React Redux implements a lot of performance optimizations internally so that our own connected component only re-renders when it actually needs to.
* Redux also offers state persistence by storing the application's state to local storage and restoring it after a refresh.

21. **Is it true that Redux can only be used with React?**
No, it is not true that Redux can only be used with React. Redux is being used as a data store for lots of UI layers. There are bindings available in Redux for React, Angular, Vue, etc

22. **Show using code how constants can be used in Redux.**
First of all, we can store all the constants in a single file in our project named constants.js or something else as follows:
```js
export const ADDING_TODO = 'ADDING_TODO';
export const DELETING_TODO = 'DELETING_TODO';
export const EDITING_TODO = 'EDITING_TODO';
export const COMPLETING_TODO = 'COMPLETING_TODO';
export const COMPLETING_ALL = 'COMPLETING_ALL';
export const CLEARING_COMPLETED = 'CLEARING_COMPLETED';
```
*After storing the constants in one place, we can use them in two ways in our project:*
*During actions creation (in actions.js file of our project):*
```js
import { DELETING_TODO } from './constants';

export function deletingTodo(text) {
  return { type: DELETING_TODO, text };
}
```
*In Reducers (in reducer.js file of our project):*
```js
import { EDITING_TODO } from './constants';
export default (state = [], action) => {
    switch (action.type) {
        case EDITING_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state
    }
};
```
23. **Show with an example how reducers are used in Redux.**
An example of how reducers are used in Redux is given below:
```js
const initial_state = { value: 0 }
function countReducer(state = initial_state, action) {
 // Checking to see if the reducer cares about this action
 if (action.type === 'counter/incremented') {
   // If the action is of type "counter" or "incremented", we make a copy of `state`
   return {
     ...state,
     // We also update the copy with the new value
     value: state.value + 1
   }
 }
 // If not, we return the original state unchanged
 return state
}
```

## Getting Started with @redux/toolkit

- ```configureStore()``` : wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, add whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

- ```createReducer()```: lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.

- ```createAction()```: generates an action creator function for the given action type string. The function itself has toString() defined, so that it can be used in place of the type constant.

- ```createSlice()```: combines createReducer() + createAction(). Accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

- ```createListenerMiddleware()```: lets you define "listener" entries that contain an "effect" callback with additional logic, and a way to specify when that callback should run based on dispatched actions or state changes. A lightweight alternative to Redux async middleware like sagas and observables.

- ```createAsyncThunk()```: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/resolved/rejected action types based on that promise

- ```createEntityAdapter()```: generates a set of reusable reducers and selectors to manage normalized data in the store

- ```The createSelector()``` utility from the [Reselect](https://github.com/reduxjs/reselect) library re-exported for ease of use.