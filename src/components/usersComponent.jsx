import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions/user'
import Card from './cardComponents'

const Users = () => {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  console.log(users, "users")

  useEffect((() => {
    dispatch(getUsers([{
      id: 1,
      name: 'farhan ahmed',
      company: {
        name: 'ms',
        catchPhrase: 'runle'
      }
    }]))
  }), [dispatch])

  return (
    <div>
      {users.length > 0 && users.map((user) => {
        console.log(user)
        return (<Card user={users} key={user.id} />)
      })}

      {users.length === 0 && <p>user doesnt exist</p>}

    </div>
  )
}

export default Users