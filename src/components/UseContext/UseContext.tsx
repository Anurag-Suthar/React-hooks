import React, { useState } from 'react'
import { ChildrenComponent } from './ChildrenComponent'

export const AuthContext = React.createContext({
  user: { name: '' },
  setUser: (user: { name: string }) => {}
})

export const UseContext: React.FC = () => {
  const [user, setUser] = useState({ name: 'Anurag' })

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div>
        <h3>Use CallBack</h3>
        <p>
          It is a React Hook that allow you to access a global state or value
          throughout your component tree without having to pass pros down
          manually at every level. We use it mainly to avoid prop drilling and
          for simple global state like theme, or authentication the main
          difference from Redux is that use Context is simpler and good for
          small app while redux is more powerful as suited for large application
        </p>
      </div>
      <ChildrenComponent />
    </AuthContext.Provider>
  )
}
