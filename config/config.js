const config = {
    port: process.env.PORT || 8000,
    database: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST
    }
}

module.exports = config;