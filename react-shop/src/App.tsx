// import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './shared'
import Home from './pages/home/HomePage'
import ProdottiPage from './pages/prodotto/ProdottiPage'
import MarchePage from './pages/marca/MarchePage'
import PromozioniPage from './pages/promozione/PromozioniPage'
import Register from './shared/components/Register'
import { useRegister } from './shared/components/useRegister'

function App() {
  const { isOpen } = useRegister()

  return (

    <BrowserRouter>

    <Header />

    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prodotti" element={<ProdottiPage />} />
        <Route path="/marche" element={<MarchePage />} />
        <Route path="/promozioni" element={<PromozioniPage />} />
        <Route path="/registrazione" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    
    { isOpen && <Register /> }

    <Footer />

    </BrowserRouter>

  )

}

export default App
