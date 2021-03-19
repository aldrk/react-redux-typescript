import {UserActionsType} from "../interfaces/user"

interface FetchUserAction {
  type: UserActionsType.FETCH_USERS_REQUEST
}

interface FetchUserSuccessAction {
  type: UserActionsType.FETCH_USERS_SUCCESS
  payload: any[]
}

interface FetchUserSuccessFail {
  type: UserActionsType.FETCH_USERS_FAIL
  payload: string
}

export type UserActions = FetchUserAction | FetchUserSuccessAction | FetchUserSuccessFail