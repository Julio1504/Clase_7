/* class dataBase {
    constructor(data) {
        if (dataBase.exists) {
            return dataBase.instance;
        }
        this._data = data;
        dataBase.instance = this;
        dataBase.exists = true;
        return this;
    }

    getData(){
        return this._data;
    }

    setData(data){
        this._data = data;
    }
}

const mongo = new dataBase('MongoDB');
console.log(mongo.getData()); //Mongo

const mysql = new dataBase('MySQL');
console.log(mysql.getData()); //MySQL

console.log(mongo === mysql);

mysql.setData("MySQL");

console.log(mongo.getData()); //MONGO
console.log(mysql.getData()); //MySQL */

//EJEMPLO 2

class dataBase {
    constructor() {
        if (!dataBase.instance) {
            this.connection = this.createConnection();
            dataBase.instance = this;
        }
        return dataBase.instance;
    }

    createConnection() {
        console.log("Nueva conexión a la vase de datos creada");
        //Aquí se puede implementar la lógica real para conectarse a la base de datosm como MySQL o MongoDB
        return {/* Conexion a la base de datos */};
    }

    getConnection() {
        return this.connection;
    }
}

const db1 = new dataBase();
const db2 = new dataBase();

console.log(db1 === db2);
console.log(`conexion 1 ${db1.getConnection()}`);
console.log(`${db2.getConnection()}, conexion 2`);