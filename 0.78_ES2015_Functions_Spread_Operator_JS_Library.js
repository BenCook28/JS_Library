// The spread operator lets us split an array argument
// into individual elements.

getRequest("/topics/17/tags", function(data){
    let tags = data.tags;
    displayTags(...tags); // shown here
})

// We use rest parameters in the funciton declaration,
// but spread operators in the function invocation.