const Livro = require('./Livro');

describe('Testes para a classe Livro', () => {
  let livro;

  beforeEach(() => {
    livro = new Livro('Estruturas de dados e algoritmos com JavaScript', 'Loiane Groner', 'Tecnologia');
  });

  test('Deve criar uma instância de Livro', () => {
    expect(livro).toBeInstanceOf(Livro);
  });

  test('Deve definir corretamente os atributos', () => {
    expect(livro.titulo).toBe('Estruturas de dados e algoritmos com JavaScript');
    expect(livro.autor).toBe('Loiane Groner');
    expect(livro.genero).toBe('Tecnologia');
  });
});
