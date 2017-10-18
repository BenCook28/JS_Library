// We can export only one function from a module
// with default export.  But we can export more 
// with named exports.

export function alertMessage(message){
    alert(message);
}

export function logMessage(message){
    console.log(message);
}

// Functions from named exports must be
// assigned to variables with the same name
// enclosed in curly braces.

import {alertMessage, logMessage} from './flashmessage';