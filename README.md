# Circula Livros

Sistema que facilita a doação e acesso a livros físicos, promovendo o compartilhamento de conhecimento e incentivando a leitura.

## Motivação
Vivemos em um mundo onde a informação é valiosa e a leitura desempenha um papel crucial no desenvolvimento pessoal e educacional. No entanto, nem todos têm acesso fácil a livros ou recursos para adquiri-los.

Segundo a pesquisa [Retratos da Leitura no Brasil](https://www.prolivro.org.br/5a-edicao-de-retratos-da-leitura-no-brasil-2/a-pesquisa-5a-edicao/), realizada pelo Instituto Pró-Livro, a média de livros lidos pelos brasileiros é de 4,96 por ano. É importante notar que o alto preço dos livros no Brasil e a falta de livrarias nas cidades são fatores que podem dificultar o acesso à leitura para muitas pessoas.


## Problema, Público-alvo e Soluções Atuais
1. **Qual problema quero resolver?**
   - Dificuldade de acesso a livros físicos, seja devido a restrições financeiras, falta de acesso a bibliotecas ou de uma plataforma específica para isso.
2. **Quem sofre desse problema?**
   - Indivíduos de diferentes faixas etárias que desejam ler, mas que enfrentam barreiras financeiras ou geográficas.
3. **Como estão resolvendo esse problema atualmente?**
   - As pessoas podem depender de bibliotecas públicas, livros emprestados por amigos, aquisição de livros usados em sebos e doações através de redes sociais que também podem ser usadas informalmente.

## Funcionalidades do Circula Livros
- O sistema permite a criação de doadores, receptores e livros;
- Os doadores podem doar e os receptores podem receber livros, com verificações para evitar doações e recebimentos duplicados;
- É possível encontrar um doador para um livro específico;
- O gerenciador facilita a interação entre doadores e receptores, realizando e registrando as doações.

## Diagrama UML
![Diagrama UML](https://github.com/ellendutra/circula-livros/assets/36541266/865bc2fd-454d-473c-9540-76cd7e795f12)


## Implementações Futuras
- Geolocalização para encontrar doadores próximos com base na localização
- Chat para permitir a comunicação direta entre os usuários
- Login para autenticação segura
- Perfil de usuário com informações sobre preferências e histórico de livros
- Cálculo de frete para o custo logístico associado à entrega dos livros

## Stack do Projeto
- JavaScript
- Programação Orientada a Objetos
- Testes com Jest

## Cobertura de Testes
![Testes](https://github.com/ellendutra/circula-livros/assets/36541266/623b13cd-d318-473e-b1a1-362f180becab)

## Rodando o projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/ellendutra/circula-livros.git
    cd circula-livros
    ```

2. Instale as dependências:
    ```bash
    npm install 
    ```

3. Execute o código:
    ```bash
    node index.js 
    ```

4. Utilize um dos comandos para executar os testes:

    ```bash
    npm run test
    npm run test:cov
    ```
