var faker = require('faker');
exports.create = function () {
    var productos = [];
    for (var i = 1; i <= 1000; i++) {
        var producto = {
            id: i,
            nombre: faker.commerce.productName(),
            descripcion:faker.lorem.paragraphs(2),
            idcategoria:faker.random.number(19)
        }
        /*var randomCard = faker.helpers.userCard(); // userCard con muchas propiedades
        randomCard.id = i;
        data.usuarios.push(randomCard)*/
        productos.push(producto);
    }
    return productos;
}
module.exports
