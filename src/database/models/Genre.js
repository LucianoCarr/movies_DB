module.exports = (sequelize, datatype) => {

    const alias = "Genre";

    const cols = {
        id: {
            type : datatype.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name: {
            type : datatype.STRING(100),
            allowNull : false
        },
        ranking: {
            type : datatype.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true
        },
        active: {
            type : datatype.BOOLEAN,
            allowNull : false,
            defaultValue : 1
        }
    }

    const config = {
        tableName : "genres",
        timestamps : true,
        underscored : true
    }

    const Genre = sequelize.define(alias,cols,config);

    return Genre
}