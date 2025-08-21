import type React from 'react'
import { useMemo, useState } from 'react'

export const UseMemo: React.FC = () => {
  const [search, setSearch] = useState('')
  const users = [
    'Anurag',
    'Rohit',
    'Sneha',
    'Karan',
    'Priya',
    'Amit',
    'Neha',
    'Vikram',
    'Pooja',
    'Rahul'
  ] // imagine this list has thousands of users

  // Memoized filtering
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...')
    return users.filter(user =>
      user.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, users]) // runs only when search or users change

  return (
    <div>
      <h3>Use Memo</h3>
      <p>
        It is a React Hook that use in functional Component what memorize the
        result of the computation. It return a cache value and only re-render
        computes it when one of its dependencies Change.
      </p>
      <div>
        <h2>User List</h2>
        <input
          type='text'
          placeholder='Search user...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <ul>
          {filteredUsers.length > 0
            ? filteredUsers.map((user, index) => <li key={index}>{user}</li>)
            : 'No user Found'}
        </ul>
      </div>
    </div>
  )
}
