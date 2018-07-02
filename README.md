# MyReads
## Projeto 01: Curso Desenvolvedor React Udacity
### Para download do projeto
```git
$ git clone https://github.com/wleandrooliveira/MyReads.git
```
### Para instalar dependências do projeto
```node
$ npm install ou yarn install
```
### Para Executar a aplicação
```node
$ npm start ou yarn start
```

### Estrutura do projeto
```
|-- MyReads
    |-- .gitignore
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- .idea
    |   |-- misc.xml
    |   |-- modules.xml
    |   |-- myreads.iml
    |   |-- vcs.xml
    |   |-- workspace.xml
    |   |-- inspectionProfiles
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
        |-- App.css
        |-- App.js
        |-- App.test.js
        |-- index.css
        |-- index.js
        |-- API_BOOK
        |   |-- BooksAPI.js
        |-- BOOK
        |   |-- Book.js
        |   |-- BookSearch.js
        |   |-- BookShelf.js
        |-- icons
            |-- add.svg
            |-- arrow-back.svg
            |-- arrow-drop-down.svg
```

### Aplicação React
O projeto apresenta um biblioteca pessoal onde aparece uma relação de livros com os
seguintes status: Lendo atualmente, Quero Ler e Leitura concluida.
O status pode ser alterado pelo botão na parte inferior da imagem de cada livro.

### Pesquisa de de livros
Na parte inferior direita da tela aparece um botão circular com o sinal de +,
ao clicar nesse botão o sistema apresenta uma tela de busca, para buscar por livros ou autores. 

