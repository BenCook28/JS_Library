class CommentForm extends React.Component {
	render(){
		return (
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <label>Join the discussion</label>
                <div className="comment-form-fields">
                    <input placeholder="Name:" ref={(input) => this._author = input}/>
                    <textarea placeholder="Comment:" ref={(textarea) => this._body = textarea}></textarea>
                </div>
                <div className="comment-form-actions">
                    <button type="submit">
                        Post Comment
                    </button>
                </div>
            </form>
		);
	}

	_handleSubmit(event) {
		event.preventDefault();

		let author = this._author;
		let body = this._body;

		this.props.addComment(author.value, body.value);
	}
}
// refs assign form values to properties on the component object.

class CommentBox extends React.Component{

	constructor(){
		super();

		this.state = {
			showComments: false,
			comments: [
				{ id: 1, author: 'A', body: 'thanks'},
				{ id: 2, author: 'B', body: 'no problem'}
			]
		}
		render(){
			return(
				<div className="comment-box">
				    <CommentForm addComment={this._addComment.bind(this)} />
				</div>
			);
		}

		_addComment(author, body){
			const comment = {
				id: this.state.comments.length + 1,
				author,
				body
			};
			this.setState({ comments: this.state.comments.concat([comment]) });
		}

		_getComments() {
			return this.state.comments.map((comment) => {
				return (
					<Comment
						author={comment.author}
						body={comment.body}
						key={comment.id} />
				);
			});
				
			];
		}
	}
}
// concat returns a reference to the array, so it's faster than push.
// Synthetic events allow consistency across browsers.