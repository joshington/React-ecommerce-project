//simplest flux flow
//1. Stores subscribe to asubset of actions
//2. an action is sent to the dispatcher
//3. dispatcher notifies subscribed stores of the action
//4.stores update their state based on the action
//5.the view updates according to the new state in the stores
//6.next action can then be processed
//7.in redux, the store passes the actions to state-changing functions called reducers,
//===note in middleware every action will be first passed through alist of middleware, unlike reducers,
//middleware can modify,stop, or add more actions==examples includealogging middleware,
//an authorization middleware that checks if user has permissions to run the action,
//API middleware that sends something to the server

//==============structure of redux=====
//asingle store to control the state, actions to describe the changes we want to make, 
//reducers(services in our example) that know how to mutate the state based on the requested action
//middleware to handle the housekeeping tasks

//specialthing about redux is that reducers never change the state(in this case the recipe book) since its
//immutable. instead, the reducers must create anew copy of the book, make the needed changes to the copy
//and return the new, modified book to the store.this approach allows  redux and the view laayers to 
//easilydo change detection

//====the whole application state is kept in asingle location, the store having asingle source of data 
//provides enormous benefits during debugging, serialization, and devt

{/*actions and Action creators*/}
//onlyway for an application to change the state is by processing actions
//actions in redux are js objects passed to the store that hold all the info needed for the store to be
//able to modify the state

//===example of action object
{
	type:  'INCREMENT',
	payload: {
		counterId: 'main',
		amount: -10
	}
}//since these objects have some logic and be used in multiple places in an applcn, they are commonly 
//wrapped in afunction that can generate the objects based on aparameter
{/*function that creates an action object*/}
function incrementAction(counterId, amount){
	return {
		type: 'INCREMENT',
		payload: {
			counterId,
			amount
		}
	}
}//since they create action objects, they are named action creators

{/*=====reducers=====*/}
//once an action is sent to the store, the store needs to figure out how to change the state accordingly
//to do so it calls afunction, passing it the current statte and the received action

{/*===example of function that calculates the next state====*/}
function calculateNextState(currentState, action) {
	return nextState
}//this function is called areducer. in real redux applications there will be one root reducer function
//that will call additional reducer functions to calculate the nested state


//====simple reducer implementation====
function rootReducer(state, action){
	switch(action.type){
		case 'INCREMENT':
			return {...state,counter: state.counter + action.payload.amount}
		default:
			return state;
	}
}//reducers never modify the state they always create anew copy with the needed modifications
{/*middleware */}
//these act like interceptors for actions before they reach the store; they can modify the actions, 
//create more actions, surpress actions, and much more
//since middleware have access to the actions, teh dispatch() function and the store, they are the most 
//versatile and powerful entities in redux

{/*===the Store===*/}
//redux has asingle store that holds the application info but nouser logic. the role of store is to 
//receiveactions, pass them through all the registered middleware, and then use reducers to calculate 
//anew state and save it

//when it receives an action that causes  achange to the state, the store will notfiy all the registered
//listenerd that achnage to the state has been made.this will allow various parts of the system like the UI 
//to update themselves according to the new state

{/*example of apure function===*/}
function square(x) {
	return x*x;
}
Math.sin(y);
arr.map((item) => item.id);
{/*exampel of impure function*/}
function getUser(userId){
	return UsersModel.fetch(userId).then((result) => result);
}
Math.random();
arr.map((item) => calculate(item))
//in order to use redux in react use == react-redux

//simple reducer for INC and DEC actions
//the reducer functioncreates anew state based on the action passed
function reducer(state, action){
	switch(action) {
		case 'INC':
			return {...state, counter: state.counter + 1};
		case 'DEC':
			return  {...state, counter: state.counter -1};
		default:
			return state;
	}
}//important thing to note is that reducers must always return anew, modified copy of the state,
//they shouldnt mutate the existing state
//===implementation of the dispatch API ===
let state  = null;
function dispatch(action){
	const newState = reducer(state, action);
	if (newState !== state) {
		state = newState;

		listeners.forEach(listener => listener());
	}
}
{/*Adding Redux to aproject*/}
<script src="https://cdnjs.cloudfare.com/ajax/libs/redux/3.6.0/redux.min.js" />
const initialState = {
	counter: 3
};
///now using it to create aredux store
const store = Redux.createStore(reducer, initialState);
//reducer code 
switch(action.type)
//sice subscribe() doesnot pass the state to callbck, we will need to access it via store.getState()
//update view by getting the state out of the store

//update view by getting the state out of the store
function updateView(){
	document.querySelector('#counter').innerText = store.getState().counter
}
store.subscribe(updateView)