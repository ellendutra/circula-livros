const Usuario = require('../Usuario/Usuario');
const Livro = require('../Livro/Livro');

class Receptor extends Usuario {
  constructor(nome, endereco, email) {
    super(nome, endereco, email);
    this.livrosRecebidos = [];
  }

  livroJaRecebido(livro) {
    return this.livrosRecebidos.some((livroRecebido) => livroRecebido.titulo === livro.titulo);
  }

  receberLivro(livro) {
    if (!(livro instanceof Livro)) {
      throw new Error('O livro a ser recebido deve ser uma instância de Livro.');
    }

    if (this.livroJaRecebido(livro)) {
      throw new Error(`O livro "${livro.titulo}" já foi recebido.`);
    } else {
      this.livrosRecebidos.push(livro);
      return `Livro "${livro.titulo}" recebido com sucesso.`;
    }
  }
}

module.exports = Receptor;
