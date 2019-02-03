import { ADD_TODO, REMOVE_TODO } from '../actions/actions';

// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
const uuidv4 = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (Math.random() * 16) | 0,
			v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

const initialState = [
	{ id: uuidv4(), text: 'add redux', isDone: true },
	{ id: uuidv4(), text: 'explore hooks', isDone: true },
	{ id: uuidv4(), text: 'make some  attempt at css :)', isDone: false }
];

const rootReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case ADD_TODO:
			console.log('adding');
			return state.concat({ id: uuidv4(), text: action.todoText });
		case REMOVE_TODO:
			const newState = state.filter(todo => todo.id != action.id);
			return newState;
		default:
			return state;
	}
};

export default rootReducer;
