var faker = require('faker');

exports.createautores = function () {
    

    var autores = [];
    for (var i = 0; i <= 10; i++) {
        autores.push({id:i,name:faker.name.firstName() + " " + faker.name.lastName()});
    }
    return autores;


}
exports.createbooks = function () {
    var books = [];
    for (var i = 1; i <= 1000; i++) {
        var book = {
            id: i,
            title: faker.lorem.words(5),
            authorid: faker.random.number(10)
        }
        /*var randomCard = faker.helpers.userCard(); // userCard con muchas propiedades
        randomCard.id = i;
        data.usuarios.push(randomCard)*/
        books.push(book);
    }
    return books;
}
module.exports
