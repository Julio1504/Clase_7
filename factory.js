class User {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}

//Creación de la clase UserFactory
class UserFactory {
    createUser(name, type) {
        return new User(name, type);
    }
}

//Creación de la instancia de UserFactory
const userFactory = new UserFactory();

//Creacion de los objetos de usuario
const user1 = userFactory.createUser('Julian', 'VIP');
const user2 = userFactory.createUser('Dylan', 'user');

console.log(user1);

console.log(user2);