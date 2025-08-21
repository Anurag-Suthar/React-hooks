import { Route, Routes } from 'react-router-dom'
import {
  MainPage,
  NotFound,
  UseCallBack,
  UseContext,
  UseEffect,
  UseMemo,
  UseRef,
  UseState
} from './components'
import { Performance } from './components/Performance/Performance'

function App () {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<MainPage />} />
      <Route path='/use-state' element={<UseState />} />
      <Route path='use-effect' element={<UseEffect />} />
      <Route path='use-ref' element={<UseRef />} />
      <Route path='use-memo' element={<UseMemo />} />
      <Route path='use-context' element={<UseContext />} />
      <Route path='use-callback' element={<UseCallBack />} />
      <Route path='performance' element={<Performance />} />

      {/* 404 Page */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
