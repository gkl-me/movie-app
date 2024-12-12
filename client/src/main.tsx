import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VideoPlayer from './components/VideoPlayer.tsx'


createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/movie/:id' element={<VideoPlayer />} />
  </Routes>
  </BrowserRouter>

)