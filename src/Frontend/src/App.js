// App.js 

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
//import Hero from './components/hero/Hero';
//import Categories from './components/categories/Categories';
import BannerInicial from './components/bannerinicial/BannerInicial';
import FeaturedPets from './components/featuredpets/FeaturedPets';
import Footer from './components/footer/Footer';
import LoginCadastro from './pages/logincadastro/LoginCadastro';
import SouOng from './pages/souong/SouOng';
import FormularioAdocao from './pages/formularioadocao/FormularioAdocao'; // Importa o FormularioAdocao e os outros fazem a msm coisa
import SobreNos from './pages/sobrenos/SobreNos';
import ListaAnimais from './pages/listaanimais/ListaAnimais';
import HomePage from './pages/homepage/HomePage';
import CrieSuaConta from './pages/criesuaconta/CrieSuaConta';
import DuvidasSobreAdocao from './pages/duvidassobreadocao/DuvidasSobreAdocao'
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>  
                        <BannerInicial/>
                        <FeaturedPets />
                    </>
                } />
                <Route path="/login-cadastro" element={<LoginCadastro />} />
                <Route path="/crie-sua-conta" element={<CrieSuaConta />} />
                <Route path="/sou-ong" element={<SouOng />} />
                <Route path="/formulario-adocao" element={<FormularioAdocao />} /> {/* Rota para o formulário de adoção */}
                <Route path="/sobre-nos" element={<SobreNos />} /> {/* Adiciona a página "Sobre Nós" */}
                <Route path="/lista-animais" element={<ListaAnimais />} />
                <Route path="/duvidas-sobre-adocao" element={<DuvidasSobreAdocao />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
