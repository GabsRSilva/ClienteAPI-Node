import { sequelize, DataTypes } from "../../database.js";

const Cliente = sequelize.define('Cliente', {
    nome: DataTypes.STRING,
});

Cliente.sync().catch()

export default Cliente