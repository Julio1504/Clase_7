class User {
    constructor(name){
        this.name = name;
        this.type = "user";
    }
}

class Admin {
    constructor(name) {
        this.name = name;
        this.type = "admin";
    }
}

class UserFactory {
    static createUser(name, type) {
        switch (type) {
            case 'admin':
                return new Admin(name);
            case 'user':
                return new User(name);
            default:
                throw new Error("Tipo de usuario no reconocido");
        }
    }
}

const user1 = UserFactory.createUser("Julian", "user");
const user2 = UserFactory.createUser("Dylan", "admin");
const user3 = UserFactory.createUser("Sergio", "user");

console.log(user1);

console.log(user2);

console.log(user3);