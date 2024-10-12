const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
const { INIT_ADMIN_PASSWORD, DATA_BASE_CONFIGS } = require("./settings");
DATA_BASE_CONFIGS



const sequelize = new Sequelize(DATA_BASE_CONFIGS.db, DATA_BASE_CONFIGS.user, DATA_BASE_CONFIGS.password, {
    dialect: DATA_BASE_CONFIGS.dialect,
    host: DATA_BASE_CONFIGS.host,
    logging: false
});
// const sequelize = new Sequelize({
//     dialect: "sqlite",
//     storage: "db.sqlite3",
//     logging: false
// });

// models
const User = sequelize.define("user", {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    canModifyUsers: { type: Sequelize.BOOLEAN }
})
const Contact = sequelize.define("contact", {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    company: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    message: {
        type: Sequelize.TEXT
    },
    isViewed: { type: Sequelize.BOOLEAN }

})
const createAdminUser = async() => {
    try {
        const createdUser = await User.create({
            email: "admin@mail.com",
            password: bcrypt.hashSync(INIT_ADMIN_PASSWORD),
            fullName: "administrator",
            canModifyUsers: true
        });
        console.log({ adminUser: createdUser });
    } catch (err) {

    }
};

const connectSequelize = () => {
    sequelize.sync({ force: false }).then(() => {
        console.log("Database connected");
        createAdminUser();
    });
}

module.exports = { connectSequelize, User, Contact };