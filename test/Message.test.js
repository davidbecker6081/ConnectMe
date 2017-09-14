import React from 'react';
import ReactDOM from 'react-dom';
import Message from '../lib/components/Message';
import { shallow, mount } from 'enzyme';

describe('Message', () => {
	let wrapper;
	let message;
	let loggedInUser;

	beforeEach(() => {
		message = {
			recipient: {
				name: 'David Becker',
				id: '0000000000',
			},
			sender: {
				name: 'David Becker2',
				id: '111111111',
			},
			message: 'Send a Message to Someone',
			date: '03 30 2017',
		};

		loggedInUser = {
			displayName: 'David Becker2',
			userName: 'dave',
			photo: 'url.com',
			location: 'Denver, Colorado',
		};

		wrapper = shallow(<Message key={1} {...message} loggedInUser={loggedInUser} />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should return an li with a classes of message-loggedInUser and message-individual', () => {
		const liElementLoggedIn = wrapper.find('li').at(0);

		expect(wrapper.find('li').length).toEqual(1);
		expect(liElementLoggedIn.props().className).toEqual('message-individual message-loggedInUser');
	});
  
});
