// The state is a JS object which lives inside each component.
// We access state with this.state.
class CommentBox extends React.Component {

    constructor(){
    	super() // first thing we call in constructor functions
    	this.state = {
    		showComments: false;
    	}
    }

	render() {
		const comments = this._getComments();
		let commentNodes;
		let buttonText = 'Show comments';

	    if (this.state.showComments){
	    	commentNodes = <div className="comment-list">{comments}</div>
	    	this.setState({showComments: true});
	    	buttonText = 'Hide Comments';
	    } else {
	    	//hide comments
	    }
	    return(
	    	<div className="comment-box">
	    		<h4 className="h4">{this._getCommentsTitle}</h4>
	    		<button onClick={this._handleClick.bind(this)}>{buttonText}</button>
	    		{commentNodes}
	    	</div>
	    );

	    _handleClick() {
	    	this.setState({
	    		showComments: !this.state.showComments
	    	});
	    }
	}
}