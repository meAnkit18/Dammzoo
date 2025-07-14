import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Admin from './pages/Admin'
import AccoutDetails from './pages/AccoutDetails'
import ChatPage from './pages/ChatPage'
import ChatWindow from './pages/ChatWindow'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/account" element={<AccoutDetails />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/chat/:id" element={<ChatWindow />} />
    </Routes> 
  )
}

export default App
