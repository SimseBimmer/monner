// Necesseties
import { useState } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
// Pages
import { ForsidePage } from './pages/ForsidePage/ForsidePage.jsx';
import { ProdukterPage } from './pages/ProdukterPage/ProdukterPage.jsx';
import { LoginPage } from './pages/LoginPage/LoginPage.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index element={<ForsidePage />} />
            <Route path="/Forside" element={<ForsidePage />} />
            <Route path="/Produkter" element={<ProdukterPage />} />
            <Route path="/Login" element={<LoginPage />} />
          </Routes>

        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
