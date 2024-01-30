// import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer, Header, Login, Register, useLogin, useRegister } from './shared'
import Home from './pages/home/HomePage'
import ProdottiPage from './pages/prodotto/ProdottiPage'
import MarchePage from './pages/marca/MarchePage'
import PromozioniPage from './pages/promozione/PromozioniPage'
import RequireAuth from './shared/components/RequireAuth'
import Unauthorized from './shared/components/Unauthorized'

const ROLES = {
  'User': 3,
  'Editor': 2,
  'Admin': 1
}

function App() {
  const { isOpenRegister } = useRegister()
  const { isOpenLogin } = useLogin()

  return (
    <>

      <Header />

      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
            <Route path="/prodotti" element={<ProdottiPage />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
            <Route path="/marche" element={<MarchePage />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
            <Route path="/promozioni" element={<PromozioniPage />} />
          </Route>

          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      
      { isOpenRegister && <Register /> }

      { isOpenLogin && <Login /> }

      <Footer />
    
    </>
  )

}

export default App
