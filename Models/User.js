import sequelize from 'sequelize'
import connectDB from '../DB/connectDB.js'

const { DataTypes, Model } = sequelize

const db_connection = connectDB;

class User extends Model {}

User.init(
    {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: db_connection,
        timestamps: true,
        modelName: 'User'
    }
)

// Check if DB table is created else create

await User.sync({ alter: true })

export default User