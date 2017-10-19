// We can encapsulate constants in their own
// module.  We could create a file like constants.js.

export const MAX_USERS = 3;
// Then import like we did with functions in modules.

// We can export class modules with default export.
export default class FlashMessage{
    // ...
}
// In app.js:
import FlashMessage from './flash-message';

let flash = new FlashMessage("hi");
flash.renderAlert();

// We could also named export like:
export { FlashMessage }

// and in app.js we import like so:
import { FlashMessage } from './flash-message';