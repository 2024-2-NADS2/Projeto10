import React, { useState } from "react";
import api from "../../services/api.js"; // importa a configuração do Axios
import "./SouOng.css";

function SouOng() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        endereco: "",
        descricao: "",
    });

    const [petData, setPetData] = useState({
        nomePet: "",
        idadePet: "",
        especie: "",
    });

    const [showPetForm, setShowPetForm] = useState(false);
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    // Atualiza os valores do formulário principal
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Atualiza os valores do formulário de pet
    const handlePetChange = (e) => {
        const { name, value } = e.target;
        setPetData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Função para enviar os dados ao backend (ONG)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { nome, email, telefone, endereco, descricao } = formData;

            const response = await api.post("/ongs", {
                nome,
                email,
                telefone,
                endereco,
                descricao,
            });

            console.log("ONG cadastrada com sucesso:", response.data);
            alert("Cadastro realizado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar ONG:", error);
            alert("Erro ao realizar o cadastro. Tente novamente.");
        }
    };

    // Função para enviar os dados do formulário de pet
    const handlePetSubmit = async (e) => {
        e.preventDefault();

        try {
            const { nomePet, idadePet, especie } = petData;

            const response = await api.post("/pets", {
                nome: nomePet,
                idade: idadePet,
                especie,
            });

            console.log("Pet cadastrado com sucesso:", response.data);
            alert("Pet cadastrado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar pet:", error);
            alert("Erro ao realizar o cadastro do pet. Tente novamente.");
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
                    <form onSubmit={handlePetSubmit}>
                        <input
                            type="text"
                            name="nomePet"
                            placeholder="Nome do pet"
                            value={petData.nomePet}
                            onChange={handlePetChange}
                            required
                        />
                        <input
                            type="text"
                            name="idadePet"
                            placeholder="Idade do pet"
                            value={petData.idadePet}
                            onChange={handlePetChange}
                            required
                        />
                        <input
                            type="text"
                            name="especie"
                            placeholder="Espécie do pet (Cachorro, Gato, etc.)"
                            value={petData.especie}
                            onChange={handlePetChange}
                            required
                        />
                        <button type="submit" className="submit-button">
                            Cadastrar Pet
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default SouOng;