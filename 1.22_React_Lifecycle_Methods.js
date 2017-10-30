class CommentBox extends React.Component{

	constructor(){
		super();

		this.state = {
			showComments: false,
			comments: []
		};
	}
	// componentWillMount happens before render().
	// Mounting means rendering for the first time.
	// Polling is periodically checking a server for updates.

	componentWillMount(){
		_fetchComments();
	}

    componentDidMount() {
    	this._timer =setInterval(
    		() => this._fetchComments(), 5000);
    }

    // The code in componentWillUnmount prevents memory leaks.
    componentWillUnmount(){
    	clearInterval(this._timer);
    }
		_fetchComments() {
			jQuery.ajax({
				method: 'GET',
				url: '/api/comments',
				success: (comments) => {
					this.setState({comments})
				}
			});//import jQuery into index.html
		}
}