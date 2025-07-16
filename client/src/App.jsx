import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Admin from './pages/Admin'
import AccoutDetails from './pages/AccoutDetails'
import ChatPage from './pages/ChatPage'
import ChatWindow from './pages/ChatWindow'
import PageNotFound from './pages/PageNotFound'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Optional cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Routes>
      
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/account" element={<AccoutDetails />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/chat/:id" element={<ChatWindow />} />
      <Route path="/*" element={<PageNotFound />} />

    </Routes> 
  )
}

export default App
