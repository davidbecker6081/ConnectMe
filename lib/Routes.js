import React, { Component } from 'react';
import { Route } from 'react-router';
// import firebase from 'firebase';
// import { signIn } from './firebase';
import FacebookContainer from './containers/FacebookContainer';
import MessageContainer from './containers/MessageContainer';
import NavHeaderContainer from './containers/NavHeaderContainer';
import LoginContainer from './containers/LoginContainer';
import HomepageContainer from './containers/HomepageContainer';

class Routes extends Component {
	render() {
		return (
			<div>
				<NavHeaderContainer />
				<Route exact path="/" component={HomepageContainer} />
				<Route exact path="/login" component={LoginContainer} />
				<Route exact path="/friends" component={FacebookContainer} />
				<Route exact path="/message" component={MessageContainer} />
			</div>
		);
	}
}

export default Routes;
