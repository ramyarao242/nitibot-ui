import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/Footer'
import Challenge from './pages/challenge'
import Ask from './pages/ask'
import Quiz from './pages/quiz'
import Chronicles from './pages/chronicles'
import Home from './pages/home'
import Library from './pages/library'
import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return(
    <ChakraProvider theme={theme}>
    <Header />
    <div className='app-container'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ask" element={<Ask/>} />
        <Route path="/challenge" element={<Challenge/>} />
        <Route path="/library" element={<Library/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/chronicles" element={<Chronicles/>} />
        </Routes>
      </div>
    <Footer />
    </ChakraProvider>
  )
}

export default App
