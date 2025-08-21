import { Link } from 'react-router-dom'

export const MainPage = () => {
  return (
    <div className='space-y-6'>
      <h1>Main pages</h1>
      <div className='grid gap-4 grid-cols-3'>
        <Link to={'use-state'}>
          <button>Use State</button>
        </Link>
        <Link to={'use-effect'}>
          <button>Use Effect</button>
        </Link>
        <Link to={'use-ref'}>
          <button>Use Ref</button>
        </Link>
        <Link to={'use-memo'}>
          <button>Use Memo</button>
        </Link>
        <Link to={'use-context'}>
          <button>Use Context</button>
        </Link>
        <Link to={'use-callback'}>
          <button>Use Call Back</button>
        </Link>
        <Link to={'performance'}>
          <button>Performance</button>
        </Link>
      </div>
    </div>
  )
}
