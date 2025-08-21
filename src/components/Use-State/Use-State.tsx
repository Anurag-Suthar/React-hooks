import React, { useCallback, useState } from 'react'

export const UseState: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  const increment = useCallback(() => setCount(prev => prev + 1), [])
  const decrement = useCallback(() => setCount(prev => prev - 1), [])
  const reset = () => setCount(0)

  return (
    <div className='space-y-5'>
      <h1>useState Example</h1>
      <p>Count: {count}</p>
      <div className='flex  items-center justify-center gap-2 w-full'>
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
