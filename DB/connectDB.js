// Connecting to Database
import { Sequelize } from "sequelize"
import path from "path"


   // Using sqlite in memory DB
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: path.resolve('DB/database.sqlite')
    })

    // Using MYSQL DB
    // const sequelize = new Sequelize(process.env.DATABSE_NAME, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    //     host: process.env.MYSQL_HOST,
    //     port: process.env.MYSQL_PORT,
    //     dialect: 'mysql'
    // })

    // Using PostgresDB
    // const sequelize = new Sequelize(process.env.DATABSE_NAME, process.env.PG_USERNAME, process.env.PG_PASSWORD, {
    //     host: process.env.PG_HOST,
    //     port: process.env.PG_PORT,
    //     dialect: 'postgres'
    // })


    try {

        await sequelize.authenticate()
        console.log('Connection to DB has been established 🙂');

    } catch (error) {
        console.error(error)
    }

    export default sequelize;


