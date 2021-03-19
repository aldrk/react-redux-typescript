import React, {FC} from "react"
import {useTypedSelector} from "../hooks/useTypedSelector"

const UserList: FC = () => {
  const {users} = useTypedSelector(state => state.user)

  return (
    <div>
      {users}
    </div>
  )
}

export default UserList