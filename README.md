# Projeto de Exercícios React

Bem-vindo ao repositório de exercícios práticos de React! Aqui você encontrará os exercícios que estou realizando para aprender os conceitos fundamentais do React, como JSX, manipulação de arrays e eventos. O objetivo deste repositório é criar pequenos projetos que ajudem na aplicação desses conceitos.

## Estrutura do Projeto

O repositório está organizado da seguinte forma:

```
src/
├── 001 - jsx-basico/
│   ├── aula1/
│   ├── meu-exercicio/
│   └── correcao/
├── 002 - arrays/
│   ├── aula1/
│   ├── meu-exercicio/
│   └── correcao/
├── 003 - eventos/
│   ├── aula1/
│   ├── meu-exercicio/
│   └── correcao/
├── 004 - componentes/
│   └── aula1/
├── 005 - propriedades/
│   └── aula1/
├── 006 - Desafio Componentes/
│   └── meu-desafio/
├── 007 - Desafio Componentes - Correcao/
│   └── desafio-corrigido/
├── 008 - useState/
│   ├── aula1/
│   ├── aula2/
│   └── aula3/
├── 009 - Desafio useState/
│   └── meu-desafio/
....

```

## Descrição das Pastas

- src/: Pasta raiz onde está o código do projeto.
- jsx-basico/: Exercícios relacionados ao JSX, que é o básico para escrever componentes no React.
- arrays/: Exercícios sobre manipulação de arrays no React, como map, filter e outros.
- eventos/: Exercícios sobre como lidar com eventos em React, como onClick, onChange, entre outros.

Cada pasta de conteúdo (jsx-basico, arrays e eventos) segue a mesma estrutura:

- aulaX/: Contém o material da aula ou desafio.
- meu-exercicio/: Aqui ficam os exercícios que eu implementei.
- correcao/: A solução corrigida ou ideal para o exercício.

## Conteúdos Aprendidos

JSX Básico
Iniciei com o básico do JSX, aprendendo como escrever componentes React e entender como o JSX se relaciona com o HTML tradicional. A pasta jsx-basico/ contém meus primeiros passos no React.

Manipulação de Arrays
Em seguida, explorei como manipular arrays em React, utilizando métodos como map(), filter() e outros, para manipular e renderizar listas de dados dinâmicas. Esses exercícios estão na pasta arrays/.

Eventos em React
Atualmente, estou aprendendo como lidar com eventos em React. Esse conceito é essencial para criar interfaces interativas, como botões clicáveis, campos de formulário, etc. Os exercícios estão na pasta eventos/ e têm me ajudado a entender como reagir a interações do usuário e atualizar o estado dos componentes.

Componentes
Aprendi como criar componentes funcionais reutilizáveis no React. Os componentes são a base da estrutura de uma aplicação React, permitindo dividir a interface em partes menores e independentes.

Propriedades (Props)
Estudei o uso de propriedades (props) para passar dados entre componentes. Isso é essencial para tornar os componentes reutilizáveis e dinâmicos, permitindo que cada instância de um componente se comporte de forma diferente de acordo com os dados recebidos.

Estado (useState) e Efeitos Colaterais (useEffect)
Comecei a trabalhar com o hook useState, que permite adicionar estado aos componentes funcionais. Com ele, aprendi a armazenar e atualizar dados dentro de um componente, como contadores, valores de inputs e outros. Isso me ajudou a entender como o React reage às mudanças de estado e re-renderiza a interface dinamicamente. Os exemplos estão na pasta useState/.

Além disso, aprendi a usar o hook useEffect, que permite lidar com efeitos colaterais no React, como requisições a APIs, manipulação de timers e interação com o localStorage. Com o useEffect, entendi como executar código em momentos específicos do ciclo de vida do componente, como no carregamento inicial ou sempre que certos estados mudam. Os exemplos estão organizados na pasta useEffect/.

Rotas com React Router DOM
Mais recentemente, estudei o React Router DOM, aprendendo a trabalhar com navegação entre páginas usando os componentes Routes, Route e Link, além dos hooks useParams e useLocation. Esses recursos me ajudaram a entender como estruturar aplicações com múltiplas páginas e como acessar informações da URL para renderizar conteúdos dinâmicos. Os exemplos práticos estão organizados em pastas específicas relacionadas a rotas.

## Como Rodar o Projeto

Para rodar o projeto localmente, siga as etapas abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/baestero/praticando-React.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd praticando-React
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

Agora, você pode acessar o projeto no navegador em [http://localhost:3000](http://localhost:3000).
