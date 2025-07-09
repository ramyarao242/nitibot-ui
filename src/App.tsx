import './App.css'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Challenge from './pages/challenge'
import Ask from './pages/ask'
import Quiz from './pages/quiz'
import Chronicles from './pages/chronicles'
import Home from './pages/home'
import Library from './pages/library'

function App() {
  useEffect(()=>{
    // if(window.tailwind){
    //   window.tailwind.config={

    //   }
    // }
  },[])
  return(
    <>
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
    </>
  )
}

export default App
