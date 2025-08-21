import React from 'react'
import { useCallback, useState } from 'react'

const ChildButton = React.memo(
  ({ handleClick }: { handleClick: () => void }) => {
    console.log('ChildButton rendered')
    return <button onClick={handleClick}>Increment</button>
  }
)

export const UseCallBack: React.FC = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  //  Memoized function: will not be recreated on every render
  const increment = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])
  return (
    <div>
      <h3>Use CallBack</h3>
      <p>
        It is a React Hook that use in functional component that means return a
        memorized version of a callback function that only change if one of the
        dependencies has change. so that it don't get recreated on every render.
        its especially useful when passing function as props to memorized child
        component. for Example
      </p>
      <div>
        <p>Count: {count}</p>
        <input
          type='text'
          value={text}
          placeholder='Type something...'
          onChange={e => setText(e.target.value)}
        />
        <ChildButton handleClick={increment} />
      </div>
    </div>
  )
}
