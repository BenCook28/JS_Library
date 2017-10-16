// In flash-message.js we could create the
// function below:
export default function(message){
    alert(message);
}

// The entry point where we import
// other modules will be app.js.

import flashMessage from './flash-message';
// We could name flashMessage anything because
// we exported with the default.

// We still need to import modules with script tags
// in the body of index.html as shown below:

//<script src="./flash-message.js"></script>
//<script src="./app.js"></script>