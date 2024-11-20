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
        senha: "",
        confirmarSenha: "",
    });

    const [petData, setPetData] = useState({
        nomePet: "",
        especie: "",
        raca: "",
        idadePet: "",
        generoPet: "",
        vacinado: "",
        castrado: "",
        descricaoPet: "",
    });

    const [showPetForm, setShowPetForm] = useState(false);
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    // atualiza os valores do formulário principal
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // atualiza os valores do formulário de pet
    const handlePetChange = (e) => {
        const { name, value } = e.target;
        setPetData((prevState) => ({ ...prevState, [name]: value }));
    };

    // função pra enviar os dados ao backend (ONG)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { nome, email, telefone, endereco, descricao, senha, confirmarSenha } = formData;

        // Valida se as senhas coincidem
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem. Tente novamente.");
            return;
        }

        try {
            const response = await api.post("/ongs", {
                nome,
                email,
                telefone,
                endereco,
                descricao,
                senha,
            });

            console.log("ONG cadastrada com sucesso:", response.data);
            alert("Cadastro realizado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar ONG:", error);
            alert("Erro ao realizar o cadastro. Tente novamente.");
        }
    };

    // função pra enviar os dados do formulário de pet
    const handlePetSubmit = async (e) => {
        e.preventDefault();

        try {
            const { nomePet, especie, raca, idadePet, generoPet, vacinado, castrado, descricaoPet } = petData;

            const response = await api.post("/pets", {
                nome: nomePet,
                idade: idadePet,
                especie,
                raca,
                generoPet,
                vacinado,
                castrado,
                descricaoPet,
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
            <h1 className="form-title">Preencha o formulário abaixo com os dados da sua ONG</h1>
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
                        placeholder="E-mail da ONG"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="telefone"
                        placeholder="Telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="endereco"
                        placeholder="Endereço da ONG"
                        value={formData.endereco}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="descricao"
                        placeholder="Escreva uma breve descrição sobre a ONG"
                        value={formData.descricao}
                        onChange={handleChange}
                        required
                    />
                    {/* esse eh o campo da senha */}
                    <input
                        type="password"
                        name="senha"
                        placeholder="Digite sua senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmarSenha"
                        placeholder="Confirme sua senha"
                        value={formData.confirmarSenha}
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
                    <h2 className="section-title">Informações sobre o PET</h2>
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
                            name="especie"
                            placeholder="Espécie (Cachorro, Gato, etc.)"
                            value={petData.especie}
                            onChange={handlePetChange}
                            required
                        />
                        
                        <input
                            type="text"
                            name="raca"
                            placeholder="Raça (Golden, Lhasa, etc.)"
                            value={petData.raca}
                            onChange={handlePetChange}
                            required
                        />

                        <input
                            type="text"
                            name="idadePet"
                            placeholder="Idade"
                            value={petData.idadePet}
                            onChange={handlePetChange}
                            required
                        />
                        <input
                            type="text"
                            name="generoPet"
                            placeholder="Gênero"
                            value={petData.generoPet}
                            onChange={handlePetChange}
                            required
                        />

                        <input
                            type="text"
                            name="vacinado"
                            placeholder="O pet é vacinado? responda com SIM ou NÃO"
                            value={petData.vacinado}
                            onChange={handlePetChange}
                            required
                        />

                        <input
                            type="text"
                            name="castrado"
                            placeholder="O pet é castrado? responda com SIM ou NÃO"
                            value={petData.castrado}
                            onChange={handlePetChange}
                            required
                        />

                        <input
                            type="text"
                            name="descricaoPet"
                            placeholder="Escreva uma breve descrição sobre o pet"
                            value={petData.descricaoPet}
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