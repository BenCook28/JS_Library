// The options object is a pattern which allows users-defined
// settings to be passed to a function as properties on an object.

// The object below is an options object:
setPageThread("New Version Out Soon!", {
    popular: true,
    expires: 10000,
    activeClass: "is-page-threaded"
});

// Named Parameters:
// For example: function setPageThreadNamed(name, {popular, expires, activeClass}){};

// We can assign the object argument a default value of an empty object.