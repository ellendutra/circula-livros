const Receptor = require('./Receptor');
const Livro = require('../Livro/Livro');

describe('Testes para a classe Receptor', () => {
  let receptor;
  let livro;

  beforeEach(() => {
    receptor = new Receptor('Ellen', 'Praça da Sé, 10', 'ellen@email.com');
    livro = new Livro('Estruturas de dados e algoritmos com JavaScript', 'Loiane Groner', 'Tecnologia');
  });

  test('Não deve receber um livro que não é uma instância de Livro', () => {
    const livroInvalido = { titulo: 'Livro Inválido' };

    expect(() => receptor.receberLivro(livroInvalido)).toThrowError('O livro a ser recebido deve ser uma instância de Livro.');
    expect(receptor.livrosRecebidos).not.toContain(livroInvalido);
  });

  test('Não deve receber um livro já recebido', () => {
    receptor.receberLivro(livro);

    expect(() => receptor.receberLivro(livro)).toThrowError(`O livro "${livro.titulo}" já foi recebido.`);
  });

  test('Deve verificar se um livro foi recebido', () => {
    expect(receptor.livroJaRecebido(livro)).toBe(false);

    receptor.receberLivro(livro);

    expect(receptor.livroJaRecebido(livro)).toBe(true);
  });

  test('Deve receber um livro com sucesso', () => {
    const resultado = receptor.receberLivro(livro);

    expect(resultado).toBe(`Livro "${livro.titulo}" recebido com sucesso.`);
    expect(receptor.livrosRecebidos).toContain(livro);
  });
});
