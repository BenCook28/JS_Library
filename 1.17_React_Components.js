class StoryBox extends React.Component {
	render() {
		return( <div>StoryBox</div> );
	}
}

ReactDOM.render(
	<StoryBox />, document.getElementById('story-app');
	)

// In the body of index.html, we have a div with an id of "story-app".
// We also include script tags for react, react-dom, babel, and components we write.