import { createStore } from 'redux';
import signupReducer from '../reducers/signupReducers';

export default function configureStore(initialState) {
  return createStore(
    signupReducer,
    initialState
  );
}