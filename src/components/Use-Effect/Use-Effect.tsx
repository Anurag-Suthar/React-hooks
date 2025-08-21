import { useEffect, useState } from 'react'

export const UseEffect = () => {
  const [users, setUsers] = useState<{ name: string }[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      console.log('Component mounted — fetching users...')
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data)
      setIsLoading(false)
    }
    fetchUsers()
  }, [])

  if (isLoading) {
    return <div>Loading....</div>
  }

  return (
    <div className='space-y-2'>
      <h1>Use Effect</h1>
      <p>
        Use Effect Hook allow you to perform sid effect in your function
        component. which commonly use for async tasks like data fetching ,
        subscription , events DOM updates
      </p>
      <hr />
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{`${index + 1}   ${user.name} `}</li>
        })}
      </ul>
    </div>
  )
}
