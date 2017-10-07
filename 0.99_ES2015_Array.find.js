// Array.find returns the first element
// in an array which satisfies a 
// provided testing function.

// It looks like the below:
let users = [
    {username: "Kevin", admin: false},
    {username: "Ben", admin: true},
    {username: "Jenny", admin: true}
]

let admin = users.find( (user) => {
    return user.admin;
});