import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_UP:
      return {...state, ...action.signUpData};
    case types.ADITIONAL_DATA:
      return {...state, ...action.aditionalData};
    case types.DEFAULT_DATA:
      return action.data; // we need to replace whats in our state with what we receive as default data
    default:
      return state;
  }
}
