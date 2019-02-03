// types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// creators
export const addTodo = todoText => ({
	type: ADD_TODO,
	todoText
});

export const removeTodo = id => ({
	type: REMOVE_TODO,
	id
});
