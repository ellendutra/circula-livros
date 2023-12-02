const GerenciadorDoacaoLivros = require('./GerenciadorDoacaoLivros');
const Doador = require('../Doador/Doador');
const Receptor = require('../Receptor/Receptor');
const Livro = require('../Livro/Livro');

describe('Testes para a classe GerenciadorDoacaoLivros', () => {
  let sistema;
  let doador;
  let receptor;
  let livro;

  beforeEach(() => {
    sistema = new GerenciadorDoacaoLivros();
    doador = new Doador('Ellen', 'Praça da Sé, 10', 'ellen@email.com');
    receptor = new Receptor('Leo', 'Rua Francisca', 'leo@email.com');
    livro = new Livro('Estrutura de dados e algoritmos com JavaScript', 'Loiane Grover', 'Tecnologia');
  });

  test('Deve lançar erro se doador não for válido', () => {
    const doadorInvalido = 'Doador inválido';

    expect(() => sistema.validarDoadorEReceptor(doadorInvalido, receptor)).toThrowError('O receptor deve ser uma instância de Receptor e o doador deve ser uma instância de Doador.');
  });

  test('Deve lançar erro se receptor não for válido', () => {
    const receptorInvalido = 'Receptor inválido';

    expect(() => sistema.validarDoadorEReceptor(doador, receptorInvalido)).toThrowError('O receptor deve ser uma instância de Receptor e o doador deve ser uma instância de Doador.');
  });

  test('Deve retornar null se não houver doadores', () => {
    const doadorEncontrado = sistema.encontrarDoadorParaLivro(livro);

    expect(doadorEncontrado).toBeNull();
  });

  test('Deve lançar erro se doador não for uma instância de Doador', () => {
    const doadorInvalido = 'Doador inválido';
    sistema.adicionarDoador(doadorInvalido);

    expect(() => sistema.encontrarDoadorParaLivro(livro)).toThrowError('O doador deve ser uma instância de Doador.');
  });

  test('Não deve realizar doação se doador não for válido', () => {
    const doadorInvalido = 'Doador inválido';

    expect(() => sistema.realizarDoacao(livro, receptor, doadorInvalido)).toThrowError('O receptor deve ser uma instância de Receptor e o doador deve ser uma instância de Doador.');
  });

  test('Deve encontrar um doador para o livro', () => {
    doador.doarLivro(livro);
    sistema.adicionarDoador(doador);
    sistema.adicionarReceptor(receptor);

    expect(sistema.encontrarDoadorParaLivro(livro)).toEqual(doador);
  });

  test('Não deve realizar doação se o livro já foi doado', () => {
    sistema.realizarDoacao(livro, receptor, doador);

    expect(() => sistema.realizarDoacao(livro, receptor, doador)).toThrowError(`O livro "${livro.titulo}" já foi doado por ${doador.nome}.`);
  });

  test('Deve lançar erro se o livro já foi recebido pelo receptor', () => {
    receptor.receberLivro(livro);

    expect(() => sistema.realizarDoacao(livro, receptor, doador)).toThrowError(`O livro "${livro.titulo}" já foi recebido por ${receptor.nome}.`);
  });

  test('Deve lançar erro se o livro não for uma instância de Livro ao doar', () => {
    const livroInvalido = { titulo: 'Livro Inválido' };

    expect(() => sistema.realizarDoacao(livroInvalido, receptor, doador)).toThrowError('O livro a ser doado deve ser uma instância de Livro.');
  });

  test('Deve encontrar um doador adequado para o livro', () => {
    const doador1 = new Doador('Ellen', 'Praça da Sé, 10', 'ellen@email.com');
    const doador2 = new Doador('Maria', 'Rua Escola, 7', 'maria@email.com');
    const livroDesejado = new Livro('Estrutura de dados e algoritmos com JavaScript', 'Loiane Groner', 'Tecnologia');

    doador1.doarLivro(new Livro('JavaScript Regular Expressions', 'Loiane Groner', 'Tecnologia'));
    doador2.doarLivro(livroDesejado);

    sistema.adicionarDoador(doador1);
    sistema.adicionarDoador(doador2);

    const doadorEncontrado = sistema.encontrarDoadorParaLivro(livroDesejado);

    expect(doadorEncontrado).toEqual(doador2);
  });

  test('Deve retornar true se o doador e o receptor forem válidos', () => {
    const resultado = sistema.validarDoadorEReceptor(doador, receptor);

    expect(resultado).toBe(true);
  });

  test('Deve permitir a doação se o livro for uma instância de Livro', () => {
    const livroValido = new Livro('Estruturas de dados e algoritmos com JavaScript', 'Loiane Groner', 'Tecnologia');

    expect(() => doador.doarLivro(livroValido)).not.toThrow();
  });

  test('Deve realizar doação com sucesso', () => {
    sistema.realizarDoacao(livro, receptor, doador);

    expect(receptor.livrosRecebidos).toContain(livro);
    expect(doador.livrosDoados).toContain(livro);
  });
});
