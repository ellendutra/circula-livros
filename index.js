const GerenciadorDoacaoLivros = require('./GerenciadorDoacaoLivros/GerenciadorDoacaoLivros');
const Doador = require('./Doador/Doador');
const Receptor = require('./Receptor/Receptor');
const Livro = require('./Livro/Livro');

const sistema = new GerenciadorDoacaoLivros();
const doador = new Doador('Ellen', 'Praça da Sé, 10', 'ellen@email.com');
const receptor = new Receptor('Leo', 'Rua Francisca, 7', 'leo@email.com');
const livro = new Livro('Estruturas de dados e algoritmos com JavaScript', 'Loiane Groner', 'Tecnologia');

sistema.adicionarDoador(doador);
sistema.adicionarReceptor(receptor);

console.log('Doadores e receptores cadastrados:');
console.log('Doadores:', sistema.doadores);
console.log('Receptores:', sistema.receptores);

doador.doarLivro(livro);
receptor.receberLivro(livro);

const doadorEncontrado = sistema.encontrarDoadorParaLivro(livro, { genero: 'Tecnologia' });
console.log(`${doadorEncontrado.nome} doou o livro "${livro.titulo}" para ${receptor.nome}.`);

console.log(`Livros doados por ${doador.nome}:`, doador.livrosDoados);
console.log(`Livros recebidos por ${receptor.nome}:`, receptor.livrosRecebidos);
