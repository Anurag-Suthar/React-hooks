import { useRef } from 'react'

export const UseRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  return (
    <div>
      <h2>Use Ref Hook</h2>
      <p>
        Use Ref is a React Hook which allow us to create mutable variable which
        will not re-render the Component
      </p>
      <hr />
      <div className='flex flex-col items-center gap-3 my-4'>
        <input
          className='bg-white text-gray-700 py-2 px-4 rounded-b-md focus:bg-red-500 focus:placeholder:text-white focus:text-white'
          placeholder='Type Something here .........'
          type='text'
          ref={inputRef}
        />
        <button onClick={handleFocus}>Focus the input </button>
      </div>
    </div>
  )
}
