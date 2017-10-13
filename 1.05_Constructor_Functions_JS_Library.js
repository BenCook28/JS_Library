// A constructor function looks like this:
function SponsorWidget(name, url){
    this.name = name;
    this.url = url;
}

// and we render it like so:
SponsorWidget.prototype.render = function(){
    // do something.
}

// We invoke as shown below:
let sponsorWidget = new SponsorWidget(name, url);
sponsorWidget.render;