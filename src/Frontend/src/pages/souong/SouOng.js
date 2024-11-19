import React, { useState } from "react";
import api from "../../services/api.js"; // Importa a configuração do Axios
import "./SouOng.css";

function SouOng() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        endereco: "",
        descricao: "",
    });

    const [showPetForm, setShowPetForm] = useState(false);
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    // Atualiza os valores do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Função para enviar os dados ao backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { nome, email, telefone, endereco, descricao } = formData;

            // Envia os dados para o backend com o link correto
            const response = await api.post("https://fgc5kq-3001.csb.app/api/ongs", {
                nome,
                email,
                telefone,
                endereco,  // Endereço da ONG
                descricao,  // Descrição da ONG
            });

            // Se a requisição for bem-sucedida
            console.log("ONG cadastrada com sucesso:", response.data);
            alert("Cadastro realizado com sucesso!");

        } catch (error) {
            // Exibindo o erro detalhado
            if (error.response) {
                console.error("Erro ao cadastrar ONG:", error.response);
                alert("Erro ao realizar o cadastro: " + error.response.data.message);
            } else if (error.request) {
                console.error("Erro na requisição:", error.request);
                alert("Erro de comunicação com o servidor. Tente novamente.");
            } else {
                console.error("Erro desconhecido:", error.message);
                alert("Erro desconhecido. Tente novamente.");
            }
        }
    };

    const handlePetFormToggle = (response) => {
        if (response === "yes") {
            setShowPetForm(true);
            setShowSubmitButton(false);
        } else {
            setShowPetForm(false);
            setShowSubmitButton(true);
        }
    };

    return (
        <div className="sou-ong-container">
            <h1 className="form-title">Crie sua conta</h1>
            <div className="form-card">
                <h2 className="section-title">Crie seu login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome da instituição"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite um e-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="telefone"
                        placeholder="Digite o telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="endereco"
                        placeholder="Digite o endereço"
                        value={formData.endereco}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="descricao"
                        placeholder="Digite a descrição"
                        value={formData.descricao}
                        onChange={handleChange}
                        required
                    />

                    <div className="question">
                        <label>Gostaria de cadastrar um pet agora?</label>
                        <div className="buttons">
                            <button
                                type="button"
                                onClick={() => handlePetFormToggle("yes")}
                                className="yes-button"
                            >
                                Sim
                            </button>
                            <button
                                type="button"
                                onClick={() => handlePetFormToggle("no")}
                                className="no-button"
                            >
                                Não
                            </button>
                        </div>
                    </div>

                    {showSubmitButton && (
                        <button type="submit" className="submit-button">
                            Finalizar cadastro
                        </button>
                    )}
                </form>
            </div>

            {showPetForm && (
                <div className="form-card">
                    <h2 className="section-title">Cadastre seu pet</h2>
                    {/* Implemente o formulário de pet aqui */}
                </div>
            )}
        </div>
    );
}

export default SouOng;
