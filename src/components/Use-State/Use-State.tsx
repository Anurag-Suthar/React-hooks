import React, { useCallback, useState } from 'react'

export const UseState: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  const increment = useCallback(() => setCount(prev => prev + 1), [])
  const decrement = useCallback(() => setCount(prev => prev - 1), [])
  const reset = () => setCount(0)

  return (
    <div className='space-y-5'>
      <h1>useState Example</h1>
      <p>
        Use State is a React Hook that lets a function components manage their
        own state, enabling dynamic UI update by storing , accessing and
        updating values as needed{' '}
      </p>
      <div className='flex  items-center justify-center gap-2 w-full'>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count === 0}>
          Decrement
        </button>
        <button onClick={reset} disabled={count === 0}>
          Reset
        </button>
      </div>
    </div>
  )
}
