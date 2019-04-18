import { combineReducers } from 'redux';
import preferencesReducer from './preferencesReducer';
import tasksReducer from './tasksReducer';

// Combine our reducers into a root reducer
// We can map our reducer functions to a key, which will then become the key for our state
export default combineReducers({
	preferences: preferencesReducer,
	tasks: tasksReducer
})