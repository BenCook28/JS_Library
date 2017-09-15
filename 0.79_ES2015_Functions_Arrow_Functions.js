// Anonymous functions passed as callbacks 
// to other functions create their own
// scope.  We do so below:

// Instead of function(data) {},
// we do (data) => {};

// Arrow functions bind to the scope of 
// where they're defined, not where they're
// used.  This is called lexical binding.

TagComponent.prototype.render = function(){
    getRequest(this.urlPath, (data) => {
        let tags = data.tags;
        displayTags(this.targetElement, ...tags); // this now refers to the TagComponent object
    });
}
