module.exports = {
    client: 'mysql2',
    connection: {
        host : 'ass-db',
        port: '3306',
        user : 'root',
        password : process.env.ASS_DB_ROOT_PASSWORD,
        database: process.env.ASS_DB_DATABASE
    },
    migrations: {
        directory: 'migrations',
        tableName: 'migrations'
    }
};