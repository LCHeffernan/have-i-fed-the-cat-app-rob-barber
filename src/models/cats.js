module.exports = (Sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        breed: STRING,
        markings: STRING,
        lastFed: DATE
    }

    return sequelize.define('Cat', schema)
}