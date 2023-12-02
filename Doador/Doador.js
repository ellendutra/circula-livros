const Usuario = require('../Usuario/Usuario');
const Livro = require('../Livro/Livro');

class Doador extends Usuario {
  constructor(nome, endereco, email) {
    super(nome, endereco, email);
    this.livrosDoados = [];
  }

  livroJaDoado(livro) {
    return this.livrosDoados.includes(livro);
  }

  doarLivro(livro) {
    if (!(livro instanceof Livro)) {
      throw new Error('O livro a ser doado deve ser uma instância de Livro.');
    }

    if (this.livroJaDoado(livro)) {
      throw new Error(`O livro "${livro.titulo}" já foi doado.`);
    } else {
      this.livrosDoados.push(livro);
      return `Livro "${livro.titulo}" doado com sucesso.`;
    }
  }
}

module.exports = Doador;
