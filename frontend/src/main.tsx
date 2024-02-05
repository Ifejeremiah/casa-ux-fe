import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
// import Homepage from './pages/Homepage/Homepage.tsx'
import Login from './pages/Login/Login.tsx'
import SignUp from './pages/Signup/SectionA/SectionA.tsx'
import SectionA from './pages/Signup/SectionA/SectionA.tsx'
import SectionB from './pages/Signup/SectionB/SectionB.tsx'
import Welcome from './pages/Welcomepage/Welcome.tsx'
import Homepage from './pages/Homepage/Homepage.tsx'
import DashBoardSectionA from './pages/DashboardPages/SectionA/DashBoardSectionA.tsx'
import DashBoardSectionB from './pages/DashboardPages/SectionB/DashBoardSectionB.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route element={<Homepage />} index={true} /> */}
      <Route element={<Homepage />} index={true} />
      <Route element={<Login />} path="/login" />
      <Route element={<SignUp />} path="/signup" />
      <Route element={<SectionA />} path="/signup:sectiona" />
      <Route element={<SectionB />} path="/signup:sectionb" />
      <Route element={<Welcome />} path="/welcome-dashboard" />
      <Route path="/dashboard">
        <Route element={<DashBoardSectionA />} path="/dashboard/SectionA" />
        <Route element={<DashBoardSectionB />} path="SectionB" />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
