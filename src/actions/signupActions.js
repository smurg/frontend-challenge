import * as types from './actionTypes';
import initialState from '../reducers/initialState';

/* this action will be called at end of first step. 
    signUpData: { userName, email, password }
 */
export function signUp(signUpData) {
  return { type: types.SIGN_UP, signUpData }; 
}

/* this action will be called at end of second step. 
    aditionalData: { favoriteColour, termsAndConditions }
 */
export function aditionalInfo(aditionalData) {
  return { type: types.ADITIONAL_DATA, aditionalData }; 
}

/* this action will be called to reset state. There is no need to pass data */ 
export function setDefaultData(data = initialState) {
  return { type: types.DEFAULT_DATA, data }; 
}


