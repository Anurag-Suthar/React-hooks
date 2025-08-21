import type React from 'react'
import { useCallback, useState } from 'react'
import { Header } from './header'

export const Performance: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const addCount = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <div>
      <Header />
      <h3 className='text-5xl'>{count}</h3>
      <button
        onClick={addCount}
        className='!bg-white
       '
      >
        Add
      </button>
    </div>
  )
}
