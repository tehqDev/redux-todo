import React, { useState } from 'react';
import { addTodo } from '../actions/actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledTodoInput = styled.div`
	margin: 10px;
`;

const TodoInput = ({ addTodo }) => {
	const [inputText, setInputText] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		addTodo(inputText);
		setInputText('');
	};

	const handleChange = e => {
		e.preventDefault();

		setInputText(e.target.value);
	};

	return (
		<StyledTodoInput>
			<form onSubmit={handleSubmit}>
				<input
					placeholder=" Add todo"
					type="text"
					onChange={handleChange}
					value={inputText}
				/>
			</form>
		</StyledTodoInput>
	);
};

const mapDispatchToProps = dispatch => ({
	addTodo: todoText => dispatch(addTodo(todoText))
});

export default connect(
	null,
	mapDispatchToProps
)(TodoInput);
