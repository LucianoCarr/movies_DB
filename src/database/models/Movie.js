module.exports = (sequelize, datatype) => {

    const alias = "Movie";

    const cols = {
        id: {
            type : datatype.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        title: {
            type : datatype.STRING(500),
            allowNull : false
        },
        rating: {
            type : datatype.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards: {
            type : datatype.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 0
        },
        release_date: {
            type : datatype.DATE,
            allowNull : false
        },
        length: {
            type : datatype.INTEGER.UNSIGNED,
            defaultValue : null
        },
        genre_id: {
            type : datatype.INTEGER.UNSIGNED,
            defaultValue : null
        }
    }

    const config = {
        tableName : "movies",
        timestamps : true,
        underscored : true
    }

    const Movie = sequelize.define(alias,cols,config);

    return Movie
}