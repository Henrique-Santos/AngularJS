angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource) {
    // Criando um servico por meio do factory, que poderá ser injetado, esse serviço 
    //retorna um objeto $resource já configurado.
    return $resource('/v1/fotos/:fotoId', null, { // null como segundo parâmetro indica que não utilizaremos query string '?parametro=valor'
        'update' : {
            method: 'PUT' // O $resource, não dá suporte ao verbo PUT, por isso tivemos que cria-lo manualmente
        }
    });
})
.factory('cadastroDeFotos', function(recursoFoto, $q) { // $q retorna uma Promisse

    var service = {}; // O factory deve retornar sempre um objeto

    service.cadastrar = function(foto) {
        return $q(function(resolve, reject) {
            if (foto._id) {
                // Realiza o PUT
                recursoFoto.update({ fotoId: foto._id }, foto, function() {
                    resolve({
                        mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso!',
                        inclusao: false
                    });
                }, function(erro) {
                    console.log(erro);
                    reject({
                        mensagem: 'Não foi possivel atualizar a foto ' + foto.titulo
                    });
                });
            } else {
                // Realiza o POST
                recursoFoto.save(foto, function() {
                    resolve({
                        mensagem: 'Foto ' + foto.titulo + ' incluida com sucesso!',
                        inclusao: true
                    });
                }, function(erro) {
                    console.log(erro);
                    reject({
                        mensagem: 'Não foi possivel incluir a foto ' + foto.titulo
                    });
                });
            }

        });
    };

    return service;
});