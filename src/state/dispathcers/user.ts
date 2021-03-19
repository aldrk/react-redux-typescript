import {Dispatch} from "redux"
import axios from "axios"
import {UserActionsType} from "../interfaces/user"
import {UserActions} from "../actions/user";

export const fetchUsers = () => (dispatch: Dispatch<UserActions>) => {
  dispatch({type: UserActionsType.FETCH_USERS_REQUEST})

  axios.get("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      dispatch({
        type: UserActionsType.FETCH_USERS_SUCCESS,
        payload: data.data
      })
    })
    .catch(() => {
      dispatch({
        type: UserActionsType.FETCH_USERS_FAIL,
        payload: "Ошибка"
      })
    })
}