getPollResultsFromServer("Sass vs. Less")
    .then(function(results){ // Results comes from the resolve function.
    return results.filter((result) => result.city === "Orlando");      
    })
    .then(function(resultsFromOrlando){
        ui.renderSidebar(resultsFromOrlando)
    })
    .catch(function(error){
        console.log("Error: ", error);
});

// We can also pass functions as arguments to then as shown below:
// .then(filterResults)
// .then (ui.renderSidebar)
// .catch(...);