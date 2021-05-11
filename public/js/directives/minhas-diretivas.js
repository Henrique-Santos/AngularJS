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
})
.directive('minhaFoto', function() {

    var ddo = {};

    ddo.restric = 'AE';

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';

    return ddo;
})
.directive('meuBotaoPerigo', function() {

    var ddo = {};
    ddo.restric = 'E';

    ddo.scope = {
        nome: '@', // @ é apenas uma cópia de valor, e essa valor é sempre string
        acao: '&' // Indica que essa propriedade, ao em vez de receber uma string, receberá uma expressão, e passará ela para ser executada no scope.
    };
    
    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{ nome }}</button>';

    return ddo;
});