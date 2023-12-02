const Doador = require('../Doador/Doador');
const Receptor = require('../Receptor/Receptor');
const Livro = require('../Livro/Livro');

class GerenciadorDoacaoLivros {
  constructor() {
    this.doadores = [];
    this.receptores = [];
  }

  adicionarDoador(doador) {
    this.doadores.push(doador);
  }

  adicionarReceptor(receptor) {
    this.receptores.push(receptor);
  }

  validarDoadorEReceptor(doador, receptor) {
    const doadorValido = doador instanceof Doador;
    const receptorValido = receptor instanceof Receptor;

    if (!doadorValido || !receptorValido) {
      throw new Error('O receptor deve ser uma instância de Receptor e o doador deve ser uma instância de Doador.');
    }

    return doadorValido && receptorValido;
  }

  realizarDoacao(livro, receptor, doador) {
    this.validarDoadorEReceptor(doador, receptor);

    if (!(livro instanceof Livro)) {
      throw new Error('O livro a ser doado deve ser uma instância de Livro.');
    }

    if (doador.livroJaDoado(livro)) {
      throw new Error(`O livro "${livro.titulo}" já foi doado por ${doador.nome}.`);
    }

    if (receptor.livroJaRecebido(livro)) {
      throw new Error(`O livro "${livro.titulo}" já foi recebido por ${receptor.nome}.`);
    }

    doador.doarLivro(livro);
    receptor.receberLivro(livro);
    return `Livro "${livro.titulo}" doado por ${doador.nome} e recebido por ${receptor.nome}.`;
  }

  encontrarDoadorParaLivro(livroDesejado) {
    const doadorAdequado = this.doadores.find((doador) => {
      if (!(doador instanceof Doador)) {
        throw new Error('O doador deve ser uma instância de Doador.');
      }

      const livroAtendeCriterios = !livroDesejado.titulo || doador.livrosDoados.some((livroDoado) => livroDoado.titulo === livroDesejado.titulo);
      return livroAtendeCriterios;
    });

    return doadorAdequado || null;
  }
}

module.exports = GerenciadorDoacaoLivros;
