import axios from 'axios';

export function addUser(user) {
  return (dispatch) => {
    axios.post('http://localhost:3000/User/', user)
      .then((response) => {
        dispatch({ type: 'ADD_USER_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'ADD_USER_ERROR', payload: error.message });
      });
  };
}

export function updateUser(user) {
  return (dispatch) => {
    axios.put(`http://localhost:3000/User/${user.id}`, user)
      .then((response) => {
        dispatch({ type: 'UPDATE_USER_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_USER_ERROR', payload: error.message });
      });
  };
}

export function login(user) {
  
  return (dispatch) => {

    axios.post('http://localhost:3000/User/Login/', user)
      .then((response) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
        console.log("succes")
      })
      .catch((error) => {
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
        console.log("bad")
      });
  };
}
export function fetchInitialData() {
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
  export function fetchUsers() {
    return (dispatch) => {
      axios.get('http://localhost:3000/User/')
        .then((response) => {
          dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: 'FETCH_USERS_ERROR', payload: error.message });
        });
    };
  }
  export function deleteUser(id) {
    return (dispatch) => {
      axios.delete(`http://localhost:3000/User/${id}`)
        .then(() => {
          dispatch({ type: 'DELETE_USER_SUCCESS', payload: id });
        })
        .catch((error) => {
          dispatch({ type: 'DELETE_USER_ERROR', payload: error.message });
        });
    };
  }
 