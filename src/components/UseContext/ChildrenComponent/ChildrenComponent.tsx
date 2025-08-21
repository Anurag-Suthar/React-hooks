import { useContext } from 'react'
import { AuthContext } from '../UseContext'

export const ChildrenComponent = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <h2>This is the ChildrenComponent</h2>
      <h3>{user.name}</h3>
    </div>
  )
}
