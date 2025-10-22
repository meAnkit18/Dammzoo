import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Admin from './pages/Admin'
import AccoutDetails from './pages/AccoutDetails'
import ChatPage from './pages/ChatPage'
import ChatWindow from './pages/ChatWindow'
import PageNotFound from './pages/PageNotFound'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import DMCAPage from './pages/DMCAPage'
import ServicesPage from './pages/ServicesPage'
import DisclaimerPage from './pages/DisclaimerPage'
// Don't forget to import the new component you created
import GoogleAuthCallback from './pages/GoogleAuthCallback' 


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
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/dmca" element={<DMCAPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />

      {/* 👇 ADD THIS LINE FOR GOOGLE AUTH 👇 */}
      <Route path="/auth/success" element={<GoogleAuthCallback />} />
      
      {/* The wildcard route should always be last */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes> 
  )
}

export default App