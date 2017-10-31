class CommentBox extends React.Component{
	_deleteComment(comment){
		jQuery.ajax({
			method: 'DELETE',
			url: `/api/comments/${comment.id}`
		});

		const comments = [...this.state.comments];
		const commentIndex = comments.indexOf(comment);
		comments.splice(commentIndex, 1);

		this.setState({ comments });

		jQuery.post('/api/comments', )
	}
}

// With optimistic updates, we give users 
// immediate visual feedback before updating
// the component's state.