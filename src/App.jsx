
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './pages/homepage/Home'
import Upload from './pages/Upload/Upload'
import Navbar from './components/navbar/Navbar'
import Discover from './pages/discover/Discover'
import About from './pages/about/About'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Upload />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
