# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# Projeto PET HERO

## Nome do Grupo - PET HERO

## Integrantes: <a href="https://www.linkedin.com/in/andreia-alaini-854a88208/">Andreia Alaini Silva</a>, <a href="https://www.linkedin.com/in/bruna-farias-727a27277/">Bruna Farias Pires</a>, <a href="https://www.linkedin.com/in/guilherme-mendes-albuquerque-6a50b330a/">Guilherme Mendes Albuquerque</a>, <a href="https://www.linkedin.com/in/luan-m-132452142/">Luan Meireles Franchini</a>

## Professores Orientadores: <a href="https://www.linkedin.com/in/victorbarq/">Victor Rosetti</a>, <a href="https://www.linkedin.com/in/aimarlopes/">Aimar Lopes</a>, <a href="https://www.linkedin.com/in/eduardo-savino-gomes-77833a10/">Eduardo Savino</a>, <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar (Chico)</a>, <a href="https://www.linkedin.com/in/jbuesso/">José Buesso</a>

## Descrição

<p align="center">
<img src="https://github.com/2024-2-NADS2/Projeto10/blob/main/Imagens/Pagina%20inicial%202.jpg" alt="NOME DO JOGO" border="0">
  
</p>
<p>
</p>

A adoção de animais é uma prática que tem ganhado cada vez mais destaque na sociedade contemporânea, especialmente em um cenário onde a população de animais abandonados cresce de forma alarmante. Nesse contexto, surge o projeto "Pet Hero", uma plataforma digital desenvolvida para facilitar a conexão entre Organizações Não Governamentais (ONGs) e potenciais adotantes, promovendo a adoção responsável e consciente de pets. O "Pet Hero" visa criar um ambiente virtual que simplifique a busca pelo animal de estimação ideal, levando em consideração as necessidades e preferências das famílias e as características dos animais disponíveis para adoção.

Além da promoção da adoção, o site também terá um espaço dedicado à doação de itens essenciais, como ração e brinquedos, que contribuirão para o bem-estar dos animais em abrigos e em lares temporários. Através de uma interface intuitiva e amigável, o projeto busca não apenas aumentar o número de adoções, mas também conscientizar a população sobre a importância do cuidado e do amor pelos animais, ressaltando a necessidade de um lar adequado e responsável.

A proposta do "Pet Hero" se alinha a uma crescente demanda social por soluções que integrem tecnologia e solidariedade, oferecendo um modelo que pode ser replicado por diferentes ONGs, ampliando assim o alcance e a efetividade das ações voltadas para a proteção e adoção de animais. Este trabalho apresenta uma análise detalhada das funcionalidades do site, bem como as metodologias adotadas para garantir a sua eficácia e relevância no contexto atual.

## 🛠 Estrutura de pastas

-Raiz<br>
|<br>
|-->documentos<br>
  &emsp;|-->Requisitos_Funcionais-NaoFuncionais.pdf<br>
|-->imagens<br>
&emsp;|-->Pagina_Home.png<br>
|-->src<br>
       
|readme.md<br>

A pasta raiz contem dois arquivos que devem ser alterados:

<b>README.MD</b>: Arquivo que serve como guia e explicação geral sobre seu projeto. O mesmo que você está lendo agora.

Há também 4 pastas que seguem da seguinte forma:

<b>documentos</b>: Toda a documentação estará nesta pasta.

<b>imagens</b>: Imagens do sistema

<b>src</b>: Pasta que contém o código fonte.

## 🛠 Instalação
Não é necessário para o momento. Encontre o index.html na pasta executáveis e execute-o como uma página WEB (através de algum browser).
O site está hospedado no NETLIFY. Para visualizar, clique aqui https://petheropi.netlify.app/

## 🎨 Figma
Clique no link para ter acesso ao Figma da Pet Hero: <a href="https://www.figma.com/design/LOzkfRIS5qGdcnKGuShdS6/GUIA-DE-ESTILO?node-id=0-1&node-type=canvas&t=niS7wcun9wPuSQAZ-0">Figma</a>

## 💻 Configuração para Desenvolvimento
Descreva como instalar todas as dependências para desenvolvimento e como rodar um test-suite automatizado de algum tipo. Se necessário, faça isso para múltiplas plataformas.
Para abrir este projeto você necessita das seguintes ferramentas:
|--> Node.js
|-->React
|-->Express
|-->Nodemon
|-->Axios
|-->Bscripty
|-->Sqlite3

##🚀 Processo de instalação
1. Instale o Node.js
Acesse nodejs.org e baixe a versão recomendada para seu sistema operacional. A instalação do Node inclui o npm, o gerenciador de pacotes que você usará para instalar o React.

2.Crie seu Projeto em React
Abra o terminal e navegue até a pasta onde deseja criar o projeto. Execute o comando:
npx create-react-app nome-do-projeto
Esse comando irá configurar uma estrutura inicial para o seu projeto em React.

3.Inicie o Servidor de Desenvolvimento
Depois que o projeto for criado, entre na pasta do projeto:
cd nome-do-projeto
Inicie o servidor de desenvolvimento com:
npm start
O React abrirá automaticamente o projeto no navegador em http://localhost:3000, onde você poderá ver a aplicação funcionando.

O Express é um framework para o Node.js que facilita a criação de aplicações web e APIs.
1. Instalar o Express
Use o npm para instalar o Express:


npm install express

2. Criar o servidor Express
Crie um arquivo, por exemplo, index.js, e adicione o seguinte código:

javascript

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

3. Rodar o servidor
No terminal, execute o comando:



node index.js
Agora, seu servidor Express está rodando na porta 3000. 

O Nodemon é uma ferramenta que facilita o desenvolvimento de aplicações Node.js, monitorando automaticamente as mudanças nos arquivos do seu projeto e reiniciando o servidor sempre que uma modificação é detectada.

Instalar o Nodemon: Você pode instalar o Nodemon globalmente ou localmente no seu projeto.

1.Para instalação global (disponível em qualquer lugar):



npm install -g nodemon

2.globalmente basta rodar seu aplicativo com o comando:


nodemon index.js

3.E então rodar com:



npm run dev

O Axios é uma biblioteca JavaScript que permite fazer requisições HTTP (como GET, POST, PUT, DELETE, etc.) de forma simples e eficiente.

1.Como instalar o Axios
Para usá-lo em um projeto Node.js, você precisa primeiro instalá-lo:



npm install axios
Como usar o Axios

O SQLite3 é uma biblioteca de banco de dados relacional leve, que implementa um banco de dados SQL totalmente autossuficiente, sem necessidade de um servidor separado.
1.Instalar o pacote SQLite3:


npm install sqlite3



## 📋 Licença/License
<p xmlns:cc="http://creativecommons.org/ns#" >Feito por Andreia Alaini Silva, Bruna Farias Pires, Guilherme Mendes Albuquerque e Luan Meireles Franchini - FECAP <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>

## 🎓 Referências

Aqui estão as referências usadas no projeto.

1. <https://github.com/iuricode/readme-template>
2. <https://github.com/gabrieldejesus/readme-model>
3. <https://creativecommons.org/share-your-work/>
