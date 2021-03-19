import React, {FC, useEffect} from "react"
import {useTypedSelector} from "../hooks/useTypedSelector"
import {fetchUsers} from "../../state/dispathcers/user"
import {useDispatch} from "react-redux"

const UserList: FC = () => {
  const {users, error, isLoading} = useTypedSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (isLoading) return <div>Загрузка...</div>

  return (
    <div>
      {error.length
        ? error
        : users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  )
}

export default UserList