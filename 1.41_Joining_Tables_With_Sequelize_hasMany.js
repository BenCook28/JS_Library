// Say we want to connect the
// Users table with the To Dos
// table on a To Do List app.

// One user could have many 
// To Dos.  We would add 
// a user_id column to
// the To Dos table and make
// it a foreign key.

// Then in the users model,
// we would add
// {
// 	classMethods: {
// 		associate(models){
// 			Users.hasMany(ToDos);
// 		}
// 	}
// }