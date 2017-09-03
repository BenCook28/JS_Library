// npm help /*the name of a module*/ 
// opens a browser window with info about the NPM
// feature you're researching.

// npm init creates a package.json file.  
// npm init -y accepts all defaults

// npm set init-author-name 'Ben Cook'
// sets the default author name to Ben Cook when
// creating package.json files

// NPM settings go into the rc file, which we find with ls

// npm install (or i) angular --save (or -S) saves Angular into dependencies
// npm i karma --save-dev (or -D) installs karma into dev dependencies

// NPM prune removes all packages not listed in the 
// package.json dependencies list and which we don't 
// install with npm install --save.

// To run this magical command, type npm prune
// when you've navigated to your project's folder
// in a terminal.  

// npm list --depth 0 shows only the packages you've installed
// --long true provides descriptions for packages
// --json true display modules in JSON
// we can also use --parsable true
// --dev true to only get dev dependencies, and --prod true for the others

// -g installs packages globally.  npm list -g --depth 0 shows globally installed packages

// npm uninstall underscore --save removes underscore from your dependencies.  We cannot use the 
// -S shortcut here, but we can do npm rm underscore, npm un underscore, or npm r underscore.
// adding the -g to the end of the removal methods above uninstalls a global variable.

// When selecting versions of packages, for example 1.8.3, 1 is the major version, 8 is the minor version,
// and 3 is the revision or patch number.  

// The patch number doesn't affect functionality, but might include
// bug fixes and performance improvements.  For example, 1.8.4.

// A new minor version means there are new features but no changes to functionality. For example, 1.9.0

// A major version is not backwards compatible because the creators broke functionality.  
// For example, Angular 2.0.0 is not compatable with AngularJS with versions that begin with 1.

// npm i underscore@1.8.2 installs version 1.8.2 of underscore.  We can change the 2 to an x to
// install the latest version of 1.8.  @1 installs the latest version of 1.

// npm i underscore@">1.1.0 <1.4.0" installs all versions greater than 1.1.0 and less than 1.4.0, 
// but we don't use this much.

// npm i underscore@1.8.2 --save --save-exact makes NPM keep the version constant.  --save-exact also works with .dev.

// the - in package.json means we only want the most current version of the minor release.  The ^ means
// we want the most current version of the major release.  An * or x only gets the latest version of the library.
// the version in "" gets us only the version we specify.

// npm update gets the latest compatible version from our dependencies.
// npm update underscore updates only one dependency.

// npm update -g gulp only updates the global version of gulp.
// To install from github, we past the url after install.
// We can do npm i ../JavaScriptSummerStuff/... to install from a specified path.