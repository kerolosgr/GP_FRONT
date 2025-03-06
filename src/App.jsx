
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './pages/homepage/Home'
import Upload from './pages/Upload/Upload'
import Navbar from './components/navbar/Navbar'
import Discover from './pages/discover/Discover'
import About from './pages/about/About'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const client = new QueryClient();
  return (
    <>
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
    </>
  )
}

export default App
