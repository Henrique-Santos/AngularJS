angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {
    var ddo = {}; // DDO = Directive Definition Object

    ddo.restric = 'AE'; // Pode ser usada como atributo (A) e como elemento (E)

    // Cria um escopo isolado, permite que a manipulação dos dados pela diretiva, não afete o escopo pai na qual está inserida.
    ddo.scope = {
        titulo: '@' // Indica que o valor passado para o atributo 'titulo' dessa diretiva, será passado para essa propriedade. Esse valor é passado com string.
    };

    ddo.transclude = true; // Indica para o Angular manter os elementos filhos dessa diretiva, ou seja os elementos que essa diretiva irá englobar.

    // HTML que será renderizado no lugar onde foi adicionado essa diretiva.
    // O valor lido da AE, referencia a propriedade titulo, do scope da própria diretiva.
    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
});