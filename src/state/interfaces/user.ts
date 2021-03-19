export interface UserState {
  users: any[]
  isLoading: boolean
  error: string
}

export enum UserActionsType {
  FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAIL = "FETCH_USERS_FAIL"
}