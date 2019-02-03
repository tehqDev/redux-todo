import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import styled from 'styled-components';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

const StyledApp = styled.div`
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	font-family: Montserrat
`;

const App = ({ todos }) => {
	return (
		<StyledApp>
			<Header title="redux todo" />
			<TodoInput />
			<TodoList />
			<Footer />
		</StyledApp>
	);
};

const mapStateToProps = state => ({
	todos: state
});

export default connect(mapStateToProps)(App);
