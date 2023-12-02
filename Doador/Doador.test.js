const Doador = require('./Doador');
const Livro = require('../Livro/Livro');

describe('Testes para a classe Doador', () => {
  let doador;
  let livro;

  beforeEach(() => {
    doador = new Doador('Ellen', 'Praça da Sé, 10', 'ellen@email.com');
    livro = new Livro('Estruturas de dados e algoritmos com JavaScript', 'Loiane Groner', 'Tecnologia');
  });

  test('Não deve doar um livro que não seja uma instância de Livro', () => {
    const livroInvalido = { titulo: 'Livro Inválido' };

    expect(() => doador.doarLivro(livroInvalido)).toThrowError('O livro a ser doado deve ser uma instância de Livro.');
  });

  test('Não deve doar um livro já doado', () => {
    doador.doarLivro(livro);

    expect(() => doador.doarLivro(livro)).toThrowError(`O livro "${livro.titulo}" já foi doado.`);
    expect(doador.livrosDoados).toContain(livro);
  });

  test('Deve verificar se um livro já foi doado', () => {
    doador.doarLivro(livro);

    expect(doador.livroJaDoado(livro)).toBe(true);
  });

  test('Deve doar um livro com sucesso', () => {
    expect(doador.doarLivro(livro)).toBe(`Livro "${livro.titulo}" doado com sucesso.`);
    expect(doador.livrosDoados).toContain(livro);
  });
});
