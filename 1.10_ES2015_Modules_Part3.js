// We can import entire modules as objects
// and call functions as properties of the object.

// in app.js:
import * as flash from './flash-message';
// then we call the functions as
flash.alertMessage('Hi');

// We can export multiple functions in one statement:
export { alertMessage, logMessage}