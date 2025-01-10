import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Home from './components/Home'
import Admin from './components/Admin'
import Upload from './components/Upload'
import Signin from './components/Signin'
import Auth from './auth/Auth'
import Account from './components/Account'
import ProtectedRoute from './auth/ProtectedRoute'
import ConfidentialRoute from './auth/ConfidentialRoute'
import Signup from './components/Signup'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Auth>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<ConfidentialRoute><Admin /></ConfidentialRoute>} />
          <Route path="/upload" element={<ProtectedRoute><Upload /></ProtectedRoute>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} /> */}
        </Routes>
      </Auth>
    </>
  )
}

export default App
