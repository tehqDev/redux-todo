import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';

const TodoList = ({ todos }) => {
	return (
		<div>
			{todos.map(todo => {
				return <Todo key={todo.id} todo={todo} />;
			})}
		</div>
	);
};

const mapStateToProps = state => ({
	todos: state
});

export default connect(mapStateToProps)(TodoList);
