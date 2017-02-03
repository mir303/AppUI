import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED,
       PASSWORD_CHANGED,
       LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL } from './Types';

export const emailChanged = (text) => {
  return {
          type: EMAIL_CHANGED,
           payload: text
        };
};
 export const passwordChanged = (text) => {
   return {
     type: PASSWORD_CHANGED,
     payload: text
   };
   };
export const loginUser = ({ email, password }) => {
  return (dispatch) => {

};
  };

  const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

try {
  const value = AsyncStorage.getItem('@MySuperStore:key');
  if (value !== null) {
    // We have data!!
    console.log(value);
  }
} catch (error) {
  // Error retrieving data
}
