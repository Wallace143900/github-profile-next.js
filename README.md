# GitHub Profile Viewer

Este projeto é um visualizador de perfis do GitHub construído com Next.js, React, TypeScript e Sass. Ele permite que os usuários busquem perfis do GitHub e visualizem informações detalhadas do perfil, bem como os repositórios associados.

## Funcionalidades

- **Busca de Perfil**: Pesquise perfis de usuários do GitHub usando o nome de usuário.
- **Exibição de Perfil**: Veja detalhes do perfil, como nome, login, bio, localização, e-mail e blog.
- **Exibição de Repositórios**: Veja os repositórios do usuário, com uma visualização dos principais repositórios.
- **Mensagens de Erro**: Mostre uma mensagem quando nenhum perfil for encontrado.
- **Responsividade**: A interface é adaptativa e funciona bem em dispositivos móveis e desktops.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Sass**: Pré-processador CSS para estilização.
- **Next/Image**: Componente otimizado de imagem do Next.js para desempenho melhorado.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- **`app/`**
  - **`components/`**
    - `Header.tsx` - Componente do cabeçalho da aplicação.
    - `Footer.tsx` - Componente do rodapé da aplicação.
    - `LoadingComponent.tsx` - Componente exibido durante o carregamento.
    - `RepositoryCard.tsx` - Componente para exibir informações dos repositórios.
    - `UserProfile.tsx` - Componente para exibir detalhes do perfil do GitHub.
   - **`search-users/`**
        - `page.tsx` - Página para busca de usuários do GitHub.

  **`types/`**
    - `GithubProfileType.ts` - Tipos TypeScript para o perfil do GitHub.
    - `GithubReposType.ts` - Tipos TypeScript para os repositórios do GitHub.
  - `page.tsx` - Página principal do projeto.
  - `layout.tsx` - Layout geral da aplicação.

- **`assets/`**
  - `not-found.svg` - Imagem exibida quando um perfil não é encontrado.

- **`public/`**
  - `favicon.ico` - Favicon da aplicação.

- **`styles/`**
  - `globals.scss` - Estilos globais da aplicação.

