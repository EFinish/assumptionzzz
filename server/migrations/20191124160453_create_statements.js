
exports.up = function(knex) {
    return Promise.all([
        knex.schema.createTable('statements', function(table) {
            table.increments('id').primary();
            table.boolean('truth_value');
            table.string('description');
            table.text('commentary');
            table.integer('parent_argument_id').defaultTo(null);
        }),
    ]);
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.dropTable('statements'),
    ]);
};
