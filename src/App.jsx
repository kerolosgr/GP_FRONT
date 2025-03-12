
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './pages/homepage/Home'
import Upload from './pages/Upload/Upload'
import Navbar from './components/navbar/Navbar'
import Discover from './pages/discover/Discover'
import About from './pages/about/About'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from './components/ui/sonner'
import {UserIdContext} from './components/context/UserIdContext'
import { useState } from 'react'

function App() {
  const client = new QueryClient();
  const [userId,setuserId] = useState("");
  return (
    <>
    <UserIdContext.Provider value={{userId,setuserId}}>
    <Toaster />
    <QueryClientProvider client={client}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Upload />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </UserIdContext.Provider>
    </>
  )
}

export default App
