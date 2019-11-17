import React, {Component} from 'react';
class Clock extends Component {
	render(){
		const currentTime = new Date(),
			hours = currentTime.getHours(),
			minutes = currentTime.getMinutes(),
			seconds = currentTime.getSeconds(),
			ampm = hours >= 12 ? 'pm' : 'am';

		return (
			<div className="clock">
				{
					hours == 0? 12 : 
						(hours > 12) ?
							hours - 12: hours
				}:{
					minutes > 9 ? minutes : `0${minutes}`
				}:{
					seconds > 9 ? seconds : `0${seconds}`
				} {ampm}
			</div>
		)
	}
}
{/*use componentWillReceiveProps() to ask the component to reload its data, this is mostly used with
refresh buttonswhere uwant to refresh the state of cpt with new data*/}

class Content extends React.Component{
	componentWillReceiveProps(nextProps){
		//check to see if the requestRefresh prop has changed
		if (nextProps.requestRefresh !== this.props.requestRefresh) {
			this.setState({loading:true}, this.updateData)
		}
	}
}

{/*using propTypes in react */}
Clock.propTypes = {
	title: PropTypes.string,
	count: PropTypes.number,
	isOn: PropTypes.bool,
	onDisplay: PropTypes.func,
	symbol:PropTypes.symbol,
	user: PropTypes.object,
	name: PropTypes.node
}
{/*when we want to communicate from parent component to child component we use props, but incase we
want to communicate from achild component to aparent component we use afunction, incase we want to 
manipulate aparent component from achild*/}

//showing or hiding the input as user is typing....
class SearchForm extends React.Component {
	updateSearchInput(e) {
		const val = e.target.value;
		this.setState({
			searchText: val
		});
	}
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
		searchVisible: PropTypes.bool
	}
	submitForm(e){
		e.preventDefault();
		const {searchText} = this.state;
		this.props.onSubmit(this.state.searchText);
	}
	render(){
		const {searchVisible} = this.props;
		let searchClasses = ['searchInput']
		if (searchVisible){
			searchClasses.push('active')
		}
		return (
			<form onSubmit={this.submitForm.bind(this)}>
				<input 
					type="search" 
					className={searchClasses.join(' ')}
				 	onChange={this.updateSearchInput.bind(this)}
				 	placeholder="Search ..." />
			</form>
		)
	}
}

//handling the value that the user types in the input

class Panel extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			searchFilter: '',{/*searchFilter string will be the searching value*/}
			activities: []
		}
	}
	handleSearch(val){
		this.setState({
			searchFilter: val,
			loading:true
		})
	}
	render(){
		const {loading, filtered} = this.state;
		return (
			<div>
				<Header
					onSubmit={this.handleSearch}
					title="Github activity" />
				<div className="Content">
					<div className="line"></div>
					{/*show loding message if loading*/}
					{loading && <div>Loading</div>}
					{/*timeline item*/}
					{filtered.map((activity) => (
						<ActivityItem
							key={activity.id}
							activity={activity} />
					))}
				</div>
			</div>
		)
	}
}

{/*updating our updateData() function to take search into account*/}
class  SearchableContent extedns React.Component{
	this.setState({loading:true}, this.updateData);
}

{/*now full component*/}///fulll watch the magic going on here================
class Clock extends React.Component{
	state={
		currentTime: new Date()
	}
	componentDidMount(){
		this.setState({
			currentTime: new Date()
		}, this.updateTime);
	}
	componentWillUnmount(){
		if (this.timerId){
			clearTimeout(this.timerId)//clearing the timer for another rendering
		}
	}
	updateTime =e => {
		this.timerId = setTimeout(() => {
			this.setState({
				currentTime: new Date()
			}, this.updateTime);//on assigning the state the currentTime, we  pass acall back function
//to updateTime of the state
		})
	}
	render(){
		const {currentTime } =  this.state;
		const hour = currentTime.getHours();
		const minute = currentTime.getMinutes();
		const second = currentTime.getSeconds();

		return(
			<div className="clock">
				<Formatter 
					{...this.props}
					state={this.state} 
					hours={hour}
					minutes={minute}
					seconds={second}
					/>
			</div>
		)

	}
}

{/*in order to install the library in our appwe previously created*/}
//install the whatwg-fetch library
// == npm install --save whatwg-fetch
{/*A promise object is simply awrapper around avalue that may or may not be known when the object is 
instantiated and provides amethod for handling the value after it is known*/}

//what if there is an error with the rest, how do we catch the error and define a retry or error state?

function getCurrentTime(onSuccess, onFail){
	//Get the current 'global' time from an API
	return setTimeout(function(){
		//randomly decide if the date is retrieved or not
		var didSucceed = Math.random() >= 0.5;
		if (didSucceed){
			var currentTime = new Date();
			onSuccess(currentTime);
		}else{
			onFail('Unknown error');
		}
	}, 2000);
}
getCurrentTime(function(currentTime){
	console.log('The current time is: '+ currentTime);
})
<select 
	onChange={this._changeTimezone}
	defaultValue={tz}>
	{timezones.map(t => {
		return (<option key={t} value={t}>{t}</option>)
	})}
</select>
<input 
	type="text" placeholder="A chronic string message (such as 7 hours from now)"
	onChange={this._changeMsg} />
	<input  type="submit" value="Update request" />
</form>

export default TimeForm;

//fetching data using the fetch method in react
//making fetchCurrentTime() method to fetch the current time from the remote server.,we use the 
//.json() method on the response object to turn the body of the rsponse from a JSON object into 
//javascript object and then update our cpt by setting the response value of the 

class App extends React.Component{
	fetchCurrentTime(){
		fetch(this.getApiUrl())
			.then(resp => resp.json())
			.then(resp => {
				const currentTime = resp.dateString;
				this.setState({currentTime})//keeping track of the options the form allows the user to 
	//manipulate
			})
	}
}
//npm install --save react-router

//render prop allows us to render whatever we want in asubroute,which incudes rendering other routes

const Home = () =>(<div><h1>Welcome home</h1><Link to="/about">Go to about</Link></div>)
const About = ({name}) => (<div><h1>About {name} </h1></div>)

class App  extends React.Component{
	render(){
		return (
			<Router>
				<Switch>
					<Route 
						path="/about" 
						render={(renderProps) => (
							<div>
								<Link to="/about/ari">Ari</Link>
								<Link to="/about/nate">Nate</Link>
								<Route 
									path="/about/:name"
									render={(renderProps) => (
										<div>
											<About name={renderProps.match.params.name} />
											<Link to="/">Go home</Link>
										</div>
									)}>

								</Route>
							</div>
						)}
					</Route>
					<Route path="/" render={(renderProps) => (
							<div>
								Home is underneath me
								<Home {...this.props} {...renderProps} />

							</div>
						)} />
				</Switch>
			</Router>
		)
	}
}

//trying to implement react-redux
import React from 'react';
import App from './App'

const Root  = (props) => {
	return (
		<App />
	)
}
export default Root;

//now changing our index.js
import 	React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import './index.css';

ReactDOM.render(
	<Root />,document.getElementById('root')
);

//Adding in Redux 
//steps needed to add in redux include=====
//1=== write a root reducer
//2=== write actionCreators
//3===Configure the store with the rootReducer, the store, and the app
//4===connect the vies to the actionCreators
//=====example of the implementation===

//Initial state
//==building the rootReducer=====
const initialState = {
	currentTime: new Date().toString()
}
//our root reducer starts with the initial State
//and must return a representation of the next state
const rootReducer = (state = initialState, action) => {
	return state;
}

export default rootReducer
//in the function, we're defining the first argument to start out as the initial state(the first time it
//runs, the rootReducer is called with no arguments, so itwill always return the initialState on the 
//first run)
//===as it standsright now, the state always will be the same value as the initialState.this means our
//data tree has asingle key of currentTime


//====Action======
//the second argument here is the action that gets dispatched from the store
//an action must include a**type** key. the type key can be any value we want, but it must be present
//forinstance, in our application, we'll occassionally dispatch an action that we want to tell the store
//to get the new current time. we might call this action a string value of FETCH_NEW_TIME.

//===action looks like this====
{
	type: 'FETCH_NEW_TIME'
}

export const rootReducer = (state = initialState, action) => {
	Switch(action.type){
		case types.FETCH_NEW_TIME:
			return {...state, currentTime: action.payload}
		default:
			return state;
//remember the reducers must return astate, so in the default case, make sure to return the current 
///state at the very  minimum
	}
}
//hooking up the store to the view, react-redux package exports acomponent called Provider.The 
//Provider component makes the store available to all of our container components in our application
//without needing for us to need to pass it in

import {createStore} from 'redux';
export const configureStore = () => {

}
export default configureStore;
//now here we dont actually return anything in our store quite yet, so lets actually create the redux
//store using the createStore function we imported from redux.
import {createStore} from 'redux';
export const configureStore = () => {
	const store = createStore()

	return store;

}
export default configureStore;
//how to implement the provider in redux
const Root = (props) => {
	const store = configureStore();

	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

//connecting the view
//one more convenience that redux offers is away to bind pieces  of the state tree to different cpts
//using the connect() function exported by the react-redux package 
//connect() functionexpects us to pass in atleast one argument to the function. first argument it expects
//is a function that will get called with the state and expects an object in return that connects data
//to the view, so hence here we are going to use the  **mapStateToProps** function its responsibility is
//**mapStateToProps**  ==  this maps the state to an object which is merged with the component's
//original props,
//===an action is asimple object that must include atype value

//==actions can be any object value that has the type key== we can send data along with our action
//we will pass extra data along as the payload of an action


//==the actionCreators function in actions=====
import {fetchNewTime} from '../../redux/actionCreators';

const mapDispatchToProps = dispatch => ({
	updateTime: () => dispatch(fetchNewTime())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
//now updateTime() function will be passes in as aprop and will call dispatch() when we fire the button
)(Home);
//now lets update our <Home /> component so the user can press abutton to update the time

const Home = (props) => {
	return (
		<div className="home">
			<h1>Welcome home!</h1>
			<p>Current time: {props.currentTime}</p>
			<button onClick={props.updateTime}>update Time</button>
		</div>
	)
}
///===try to understand this clear implementation of redux=====
import * as types from './types'

export const initialState = {
	user: {},
	loggedIn: false
}

export const reducer = (state = initialState, action) => {
	switch (action.type){
		case types.LOGIN:
			return {
				...state, user: action.payload, loggedIn: true
			}
		case types.LOGOUT:
			return {
				...state, user: {}, loggedIn: false
			}
		default:
			return state;
	}
}
//middleware gives us the ability to handle fetching remote data from within our app and still use the 
//power of Redux to keep our data , middlewae sits between action and the reducer. it can listen for all
//dispatches and execute code with the details of the actions and the current states

//==updating the configureStore function to pull the rootREDUCER and initial state from the file
//middleware is basically afunction that accepts the store, which isexpected to return afunction that 
//accepts the next function, which is expected to return afunction which accepts an action

///==making our custom middleware=====
const loggingMiddleware = (store) => (next) => (action) => {

}
import {createStore, applyMiddleware} from 'redux';
//to apply middleware, we can call this applyMiddleware() function in the createStore() method. In our
//src/redux/configureStore.js file, lets update the store creation by adding acall to applyMiddleware()

const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(
		apiMiddleware,
		loggingMiddleware,
	)
)
//middleware gives us the ability to insert afunction in our redux action call chain, inside the funcion
//we have access to the action,state and we can dispatch other actions, 
// we want to write amiddleware function that can handl API requests.we can write amiddleware function
//that listens only to actions correspondingto API requests, 
//====our middleware can watch for actions that have aspecil marker. forexample ameta object on the 
//action with atype of 'api'. we use this to ensure our middleware doesnot handle any actions that are 
//not related to API requests.

{/*==1.make the request, 2. convert the request to javascript object 3.respond back to redux/user*/}

//first, to pull off the URL and create the fetchOPtions to pass to fetch()
const apiMiddleware = store => next => action => {
	if (!action.meta || action.meta.type !== 'api'){
		return next(action);
	}
	//this is an api request
	//findthe request URL and compose request options from meta 
	const {url} = action.meta;
	const fetchOPtions = Object.assign({}, action.meta);
	fetch(url, fetchOPtions)
		//convert response to json
		.then(resp => resp.json())
		.then(json => {
			//respond back to the user by dispatching the original action without meta object
			let newAction = Object.assign({}, action, {
				payload: json.dateString
			});
			delete newAction.meta;
			store.dispatch(newAction);
		})


}
export default apiMiddleware

//==now adding the apiMiddleware to our chain by updating it in the configureStore() function

import {createStore, applyMiddleware} from 'redux';
import {rootReducer, initialState} from './reducers';

import loggingMiddleware from  './loggingMiddleware';
import apiMiddleware from  './apiMiddleware';

export const configureStore = ()  => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(
			apiMiddleware,
			loggingMiddleware,
		)
	);
	return store;
}
export default configureStore;

//======testing in react ======
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Timeline from '../Timeline';

describe('Timeline', () => {
	it('wraps content in a div with .notificationsFrame class', () => {
		const wrapper = TestUtils.renderIntoDocument(<Timeline />);
		const node = TestUtils.findRenderedDOMComponentWithClass(wrapper, 'notificationsFrame');
	})
})

//now doing shallow rendering with react enzyme
import React from 'react';
import {shallow,mount} from 'enzyme';
import Timeline from '../Timeline';

describe('Timeline', () => {
	let wrapper;

	it('wraps content in adiv with .notificationsFrame class', () => {
		wrapper = shallow(<Timeline />);
		expect(wrapper.find('.notificationsFrame').length).toEqual(1);
	});
	it('has a title of Timeline', () => {
		wrapper = mount(<Timeline />)
		expect(wrapper.find('.title').text()).toBe("Timeline")
	})

	describe('search button', () => {
		let search;
		beforeEach(() => wrapper = mount(<Timeline />))
		beforeEach(() => search = wrapper.find('input.searchInput'))

		it('starts out hidden', () => {
			expect(search.hasClass('active')).toBeFalsy()
		})
		it('becomes visible after being clicked on', () => {
			const icon = wrapper.find('.searchIcon')
			icon.simulate('click')
			expect(search.hasClass('active')).toBeTruthy()
		})
	})
	describe('status updates', () => {
		it('has 4 status updates at minimum', () => {
			wrapper = shallow(<Timeline />)
			expect (
				wrapper.find('ActivityItem').length
			).toBeGreaterThan(3)
		})
	})
})

import React from 'react';
import {shallow} from 'enzyme';

import Timeline from '../Timeline';

describe('Timeline', () => {
	let wrapper;
	it('wraps content in adiv with .notificationsFrame class', () => {
		wrapper =shallow(<Timeline />);
		expect(wrapper.find('.notificationsFrame').length).toEqual(1);
	});
	it('has atitle of  Timeline')
	describe('search button', () => {
		it('starts out hidden')
		it('becomes visible after being clicked on')
	})
	describe('status updates', () => {
		it('has 4 status updates at minimum')
	} )
})