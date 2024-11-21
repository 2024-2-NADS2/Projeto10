// App.js 

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BannerInicial from './components/bannerinicial/BannerInicial';
import FeaturedPets from './components/featuredpets/FeaturedPets';
import LoginCadastro from './pages/logincadastro/LoginCadastro';
import SouOng from './pages/souong/SouOng';
import FormularioAdocao from './pages/formularioadocao/FormularioAdocao';
import SobreNos from './pages/sobrenos/SobreNos';
import ListaAnimais from './pages/listaanimais/ListaAnimais';
import CrieSuaConta from './pages/criesuaconta/CrieSuaConta';
import CrieSeuPet from './pages/cadastropet/CrieSeuPet';
import DuvidasSobreAdocao from './pages/duvidassobreadocao/DuvidasSobreAdocao';
import { UserProvider } from './services/UserContext'; // Importa o contexto
import './App.css';

function App() {
    return (
        <UserProvider> {/* Envolve o aplicativo no contexto do usuário */}
            <Router>
                <Header /> {/* O Header agora mudará dinamicamente com base no contexto */}
                <Routes>
                    {/* Página inicial com componentes específicos */}
                    <Route path="/" element={
                        <>
                            <BannerInicial />
                            <FeaturedPets />
                        </>
                    } />
                    <Route path="/login-cadastro" element={<LoginCadastro />} />
                    <Route path="/crie-sua-conta" element={<CrieSuaConta />} />
                    <Route path="/sou-ong" element={<SouOng />} />
                    <Route path="/crie-seu-pet" element={<CrieSeuPet />} />

                    <Route path="/formulario-adocao" element={<FormularioAdocao />} />
                    <Route path="/sobre-nos" element={<SobreNos />} />
                    <Route path="/lista-animais" element={<ListaAnimais />} />
                    <Route path="/duvidas-sobre-adocao" element={<DuvidasSobreAdocao />} />
                </Routes>
                <Footer />
            </Router>
        </UserProvider>
    );
}

export default App;