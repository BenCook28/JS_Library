// We define classes like so:
class SponsorWidget {
    // The constructor funciton runs 
    // whenever a new instatnce is created
    // with the new operator.
    constructor(name, url){
        // Assigning to instance variables makes them accessable
        // to other instance methods.
        this.name = name;
        this.url = url;
    }
        render(){
            // profixing a method with _ means it should not be invoked from the public API.
            let link = this._buildLink(this.url); // has access to url in the constructor
        }
}