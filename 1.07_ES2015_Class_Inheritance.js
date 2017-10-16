// The extends keyword creates child classes.

class Widget {
    constructor(){
        this.bassCSS = "site-widget";
    }

    parse(value){

    }
}

class SponsorWidget extends Widget{
    constructor(name, url){
        super(); // Children must call super first.
        // The super method runs the constructor function
        // from the parent class.
    }

    parse(){
        let parsedName = super.parse(this.name); // calls parse in the Widget class
        return `Sponsor: ${parsedName}`;
    }

    render(){
        let parsedName = this.parse(this.name); // parse is inherited
        let css = this._buildCSS(this.baseCSS); // baseCSS is inherited
    }
}
