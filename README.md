> Case .monks

## 💻 Pré-requisitos
Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente do **Node.js**.

## 🚀 Instalando Case .monks
- Clone o repositório.
- Abra um terminal e navegue até o diretório do projeto.

## Estrutura de Diretórios e Arquivos
- **public/**: Diretório que contém arquivos estáticos da aplicação.
  - **index.html/**: Arquivo HTML principal da aplicação, onde o React será montado.
- **src/**: Diretório que contém o código fonte da aplicação.
  - **components/**:Contém componentes React usados na interface da aplicação.
    - **ArtistList/**: Componente para exibir a lista de artistas.
      - **ArtistList.jsx**: Componente React para renderizar a lista de artistas.
    - **GenreList/**: Componente para exibir a lista de gêneros.
      - **GenreList.jsx**: Componente React para renderizar a lista de gêneros.
  - **services/**: Contém scripts para interação com a API do Spotif
    - **authentication.js**: Contém a lógica para obter o token de autenticação da API do Spotify.
    - **fetchArtists.js**: Contém a lógica para buscar dados dos artistas na API do Spotify.
    - **generateRankings.js**: Contém a lógica para gerar rankings de artistas e gêneros com base nos dados obtidos.
    - **info.js**: Arquivo que guarda client-id e client_secret. *Não foi commitado*. 
- **App.css**: Arquivo de estilos CSS para o componente App.
- **App.jsx**: Componente principal da aplicação React.
- **index.css**: Arquivo de estilos CSS global da aplicação.
- **index.js**:  Arquivo de entrada da aplicação React, onde o componente App é renderizado.
- **.gitignore**: Arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo Git.



## Figma
[Acesse o projeto no Figma](https://www.figma.com/design/40RNaW8QWNVJTaSEL9lQM1/case-.monks?node-id=0-1&t=0A5CB8Ct65SWRMKO-1) para visualizar o design inicial.

