function getPollResultsFromServer(pollName){
    return new Promise(function(resolve, reject){
        let url = `/results/${pollName}`;
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                resolve(JSON.parse(request.response));
            }
        };
        //...
        request.send();
    });
}