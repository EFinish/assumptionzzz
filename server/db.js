const config = require('./config/knexfile');
const knex = require('knex')(config);

console.log('beginning migrations!');

knex.migrate.latest()
.then(function() {
    console.log('migrations done! .....');
    // return knex.seed.run();
});

module.exports = knex;