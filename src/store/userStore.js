import produce from "immer"
import axios from 'axios';

function fetchInitialData() {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/User');
      dispatch({
        type: 'SAVE_USERS',
        payload: response.data
      });
    } catch (error) {
      debugger;
      console.log(error);
      return { users: [], currentUser: { id: -1, name: "-1", password: "-1", email: "rr@rr.com" }, manager: { id: -1, name: "-1", password: "-1", email: "rr@rr.com" }, isManager: false, error: error.message };
    }
  };
}
// const initialState = fetchInitialData();
const initialState = {
  users: [],
  currentUser: { id: -1, name: "-1", password: "-1" },
  manager: { id: 1, name: "dan", password: "111" },
  isManager: false,
  error: null,
  
};


const userReducer = produce((state = initialState, action) => {
  // debugger
  switch (action.type) {
    case 'FETCH_INITIAL_DATA_SUCCESS':
    //case '@@redux/INITm.j.m.c.d.u':
      // return {
      //   ...state,
      //   users: action.payload.users,
      //   currentUser: action.payload.currentUser,
      //   manager: action.payload.manager,
      //   isManager: false,
      //   error: null,
      // };
      return fetchInitialData();
    case 'SAVE_USERS':
      console.log('kkkk');
      return { ...state, users: action.payload }
    case 'FETCH_INITIAL_DATA_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        error: null,
      };

    case 'FETCH_USERS_ERROR':
      return {
        ...state,
        error: action.payload,
      };


    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        users: [...state.users, action.payload],
        currentUser: action.payload,
        isManager: false,
        error: null,
      };

    case 'ADD_USER_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'LOGIN_SUCCESS':
      if (
        action.payload.name === state.manager.name &&
        action.payload.password === state.manager.password && action.payload.email === state.manager.email
      ) {
        return { ...state, currentUser: state.manager, isManager: true, error: null };
      } else {
        {
          return {
            ...state,
            currentUser: {
              id: action.payload.id,
              name: action.payload.name,
              password: action.payload.password,
              email: action.payload.email,
            },
            isManager: false,
            error: null,
          };

        }
      }

    case 'LOGIN_ERROR':
      return {
        ...state,
        error: action.payload,
      };


    case 'UPDATE_USER_SUCCESS':
      state.users.forEach((a) => {
        if (a.id === action.payload.id) {
          a.name = action.payload.name;
          a.password = action.payload.password;
          a.email = action.payload.email;
        }
      });
      state.currentUser = action.payload;
      state.error = null;
      break;

    case 'UPDATE_USER_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'DELETE_USER_SUCCESS':
      const updatedUsers = state.users.filter(user => user.id !== action.payload);
      return {
        ...state,
        users: updatedUsers,
        error: null,
      };

    case 'DELETE_USER_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    default: return state;


  }
}, initialState)

export default userReducer;

