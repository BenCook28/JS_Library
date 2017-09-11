// Default parameters move default values from the function 
// body to the function signature.  

// Signatures include parameters,
// and their types, return values and their types, exceptions that
// might be thrown, and info about the availability of the method 
// (like public, static, or prototype).

// for example, unserNames = [] in: 

function loadProfiles(userNames = []){
    let namesLength = userNames.length;
    console.log(namesLength);
};
