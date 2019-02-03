import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/actions';
import styled from 'styled-components';

const StyledTodo = styled.div`
	border-color: lightgrey;
	border-width: 1px;
	border-style: solid;
	padding: 2px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const IdContainer = styled.div`
	border-color: lightgrey;
	border-width: 0px;
	border-style: solid;
	font-size: 10px;
	color: seagreen;
`;

const TextContainer = styled.div`
	padding: 5px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const Todo = ({ todo, removeTodo }) => {
	const [isDone, setIsDone] = useState(todo.isDone);

	const handleChange = e => {
		setIsDone(e.target.checked);
	};

	const handleClick = id => {
		removeTodo(id);
	};

	return (
		<StyledTodo>
			<IdContainer>{todo.id}</IdContainer>
			<TextContainer style={{ textDecoration: isDone ? 'line-through' : '' }}>
				{todo.text}
				<input type="checkbox" checked={isDone} onChange={handleChange} />
			</TextContainer>
			<button onClick={id => handleClick(todo.id)}>remove</button>
		</StyledTodo>
	);
};

const mapDispatchToProps = dispatch => ({
	removeTodo: id => dispatch(removeTodo(id))
});

export default connect(
	null,
	mapDispatchToProps
)(Todo);
