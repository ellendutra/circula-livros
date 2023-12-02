const Usuario = require('./Usuario');

describe('Testes para a classe Usuario', () => {
  let usuario;

  beforeEach(() => {
    usuario = new Usuario('Ellen', 'Praça da Sé, 10', 'ellen@email.com');
  });

  test('Deve criar uma instância de Usuario', () => {
    expect(usuario).toBeInstanceOf(Usuario);
  });

  test('Deve definir corretamente os atributos', () => {
    expect(usuario.nome).toBe('Ellen');
    expect(usuario.endereco).toBe('Praça da Sé, 10');
    expect(usuario.email).toBe('ellen@email.com');
  });
});
