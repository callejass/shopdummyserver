var faker = require('faker');
exports.create = function () {
    var c = [];
    for (var i = 1; i <= 20; i++) {
        var categoria = {
            id: i,
            descripcion:faker.commerce.department()                        
        }
        /*var randomCard = faker.helpers.userCard(); // userCard con muchas propiedades
        randomCard.id = i;
        data.usuarios.push(randomCard)*/
        c.push(categoria);
    }
    return c;
}
module.exports
