// JSX stands for JavaScript XML.
class StoryBox extends React.Component {
	render() {

        const now = new Date();

        const topicsList = ['HTML', 'CSS', 'JavaScript'];

		return( <div>StoryBox</div> 
		<div>
			<h3>Stories App</h3>
			<p className="lead">Sample paragraph</p>
			<p> Current time: {now.toTimeString()}</p>
			<ul>
				{topicsList.map( topic => <li>{topic}</li>)} 
			</ul> 
		</div>
		); // We write html elements in lower case. We use className instead of class in JSX. JSX interprets
		// code in {}s as literal JavaScript.
		// Line 15 iterates the topic list on line 7.
	}
}

ReactDOM.render(
	<StoryBox />, document.getElementById('story-app'); // We write React elements in UpperCamelCase (PascalCase).
	)

// Map: The map() method creates a new array with the results of calling a provided function on every element in the calling array.