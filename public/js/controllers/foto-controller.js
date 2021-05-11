angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    if ($routeParams.fotoId) {
        $http.get('/v1/fotos/' + $routeParams.fotoId)
            .success(function(foto) {
                $scope.foto = foto;
            })
            .error(function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possivel obter a foto';
            })
    }

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            if ($routeParams.fotoId) {
                $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                    .success(function() {
                        $scope.mensagem = 'Foto editada com sucesso!';
                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possivel editar a foto!'
                    });
            } else {
                $http.post('/v1/fotos', $scope.foto)
                    .success(function() {
                        $scope.mensagem = 'Foto incluida com sucesso!';
                        $scope.foto = {};
                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possivel incluir a foto!'
                    });
            }
        }
    };
});