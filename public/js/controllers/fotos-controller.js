angular.module('alurapic').controller('FotosController', function ($scope, recursoFoto) {

    $scope.fotos = [];
    $scope.mensagem = '';

    // Realiza um GET
    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro);
    });

    $scope.remover = function(foto) {
        // Realiza um DELETE, o primeiro parametro é um objeto contendo o ID da foto
        recursoFoto.delete({ fotoId: foto._id}, function() {
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possivel apagar a foto ' + foto.titulo;
        });
    };
        
});