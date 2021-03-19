import React, {FC} from "react"
import {useSelector} from "react-redux"
import {UserState} from "../../state/interfaces/user"

const UserList: FC = () => {
  const users = useSelector((state: UserState) => state.users)

  return (
    <div>
      {users}
    </div>
  )
}

export default UserList