import { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"
import { Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyle } from './utils/style'
import Navbar from './components/Navbar'
import Home from './pages/Chat/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import './App.css'
import ChatContextProvider from './context/ChatContext'
import { useAuthContext } from './context/AuthContext'
import { ToastContainer } from "react-toastify";


function App() {
  const { user } = useAuthContext() 
  const [mode, setMode] = useState('light')

  return (
    <ThemeProvider theme={{ mode, setMode }}>
      <ChatContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" replace={true} /> } />
          <Route path="/login" element={user ? <Navigate to="/" replace={true} /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" replace={true} /> : <SignUp />} />
        </Routes>
        <GlobalStyle />
        <ToastContainer />
      </ChatContextProvider>
    </ThemeProvider>
  )
}

export default App
