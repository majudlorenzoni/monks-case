> Case .monks

## Acesse o projeto
Você pode acessar a aplicação no GitHub Pages através do seguinte link:

[Rankings de Artistas Pop e os 5 gêneros mais comuns os artistas pop mais seguidos](https://majudlorenzoni.github.io/monks-case/)

## Rodar o Projeto Localmente

## 💻 Pré-requisitos
Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente do **Node.js**.

## 🚀 Instalando Case .monks
- Clone o repositório.
- Abra um terminal e navegue até o diretório do projeto.

## Estrutura de Diretórios e Arquivos
- **public/**: Diretório que contém arquivos estáticos da aplicação.
  - **imgs/**: 
    - **img_logo.png**: Imagem do logotipo para ser exibida na aba do navegador
  - **index.html/**: Arquivo HTML principal da aplicação, onde o React será montado.
- **src/**: Diretório que contém o código fonte da aplicação.
  - **components/**:Contém componentes React usados na interface da aplicação.
  - **ArtistImage/**: Componente para exibir a imagem dos artistas.
      - **ArtistImage.jsx**: Componente React que exibe a imagem do artista com estilo circular.
    - **ArtistList/**: Componente para exibir a lista de artistas.
      - **ArtistList.jsx**: Componente React para renderizar a lista de artistas.
    - **Footer/**: Componente para o rodapé da aplicação
      - **Footer.jsx**: Componente React para o rodapé com uma mensagem de crédito.
      - **Footer.css**: Arquivo de estilos CSS para o rodapé.
    - **GenreList/**: Componente para exibir a lista de gêneros.
      - **GenreList.jsx**: Componente React para renderizar a lista de gêneros.
    - **Navbar/**: Componente para a barra de navegação da aplicação.
      - **Navbar.jsx**: Componente React para a barra de navegação com links e menu.
      - **Navbar.css**: Arquivo de estilos CSS para a barra de navegação.
  - **services/**: Contém scripts para interação com a API do Spotify
    - **authentication.js**: Contém a lógica para obter o token de autenticação da API do Spotify.
    - **fetchArtists.js**: Contém a lógica para buscar dados dos artistas na API do Spotify.
    - **generateRankings.js**: Contém a lógica para gerar rankings de artistas e gêneros com base nos dados obtidos.
    - **info.js**: Arquivo que guarda client-id e client_secret. *Não foi commitado*. 
- **App.css**: Arquivo de estilos CSS para o componente App.
- **App.jsx**: Componente principal da aplicação React.
- **index.css**: Arquivo de estilos CSS global da aplicação.
- **index.js**: Arquivo de entrada da aplicação React, onde o componente App é renderizado.
- **.gitignore**: Arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo Git.
- **package-lock.json**: Arquivo gerado automaticamente para garantir a consistência das versões das dependências instaladas.
- **package.json**: Arquivo de configuração do projeto que lista as dependências e scripts do projeto.
- **README.md**: Arquivo de documentação do projeto, contendo informações sobre a aplicação e instruções para uso.

## Figma
[Acesse o projeto no Figma](https://www.figma.com/design/40RNaW8QWNVJTaSEL9lQM1/case-.monks?node-id=0-1&t=0A5CB8Ct65SWRMKO-1) para visualizar o design inicial.

