import {UserActionsType, UserState} from "../interfaces/user"
import {UserActions} from "../actions/user"

const defaultState: UserState = {
  users: [],
  isLoading: false,
  error: ""
}

export const userReducer = (state = defaultState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionsType.FETCH_USERS_REQUEST: {
      return {...state, isLoading: true, error: ""}
    }

    case UserActionsType.FETCH_USERS_SUCCESS: {
      return {...state, isLoading: false, users: action.payload}
    }

    case UserActionsType.FETCH_USERS_FAIL: {
      return {...state, isLoading: false, error: action.payload}
    }

    default: return state
  }
}