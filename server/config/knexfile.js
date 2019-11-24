module.exports = {
    client: 'mysql2',
    connection: {
        host : process.env.ASS_DB_URL,
        port: 3308,
        user : process.env.ASS_DB_USERNAME,
        password : process.env.ASS_DB_PASSWORD,
        database: process.env.ASS_DB_DATABASE
    },
    migrations: {
        directory: 'migrations',
        tableName: 'migrations'
    }
};