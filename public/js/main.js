angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider) { // Configurando as rotas da app

    // Utlizando o History API, para não precisar usar o '#' no endereço das rotas
    $locationProvider.html5Mode(true);

    // Quando a rota '/fotos' for acessada, será carregado a view parcial, que está em
    // no endereço passado a templateUrl, e essa view terá o controller 'FotosController'
    // associado a ela.
    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.when('/fotos/edit/:fotoId', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    // Caso o endereço na URL não exista, acontece o redirecionamento
    $routeProvider.otherwise({ redirectTo: '/fotos'});

});