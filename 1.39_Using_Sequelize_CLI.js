// After installing the sequelize
// command line interface globally
// and running init per the docs,
// We create both a new model 
// and a new migration file at the
// same time by running the 
// following sort of command:

// sequelize model:create --name MyUser --attributes first_name:string,last_name:string,bio:text

// then we run sequelize db:migrate to create
// the tables in our SQL database.

// If we make mistakes, we can run
// db:migrate:undo, then redo the db:migrate command