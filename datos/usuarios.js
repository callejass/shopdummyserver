var faker = require('faker');
exports.create = function () {
    var u = [];
    for (var i = 1; i <= 10; i++) {
        var usuario = {
            id: faker.internet.userName(),
            nombre: faker.name.findName(),
            telefono:faker.phone.phoneNumber(),
            mail:faker.internet.email(),
            idperfil: "" + faker.random.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9]),
            avatar: faker.image.avatar(),
            imagen: faker.image.sports(100, 100) + "/" + faker.random.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9])

        }
        /*var randomCard = faker.helpers.userCard(); // userCard con muchas propiedades
        randomCard.id = i;
        data.usuarios.push(randomCard)*/
        u.push(usuario);
    }
    return u;
}
module.exports
