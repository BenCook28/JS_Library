// Spectacle lets MacBook users
// open multiple screens at the 
// same time with shortcuts.

// To get a user into a database
// through React Native, first we declare
// the state right below the usual class
// based Component setup
constructor(props){
	super(props);
	this.state = { email: '', password: ''}
}

// The <TextInput /> in therender function
 contains an onChangeText
// function which sets the state:

<TextInput onChangeText{(email) => this.setState({ email })} />

// And the handleSubmit function posts to the server.
handleSubmit = () => {
	axios.post(`${API_HOST}/signup`, {
		email: this.state.email,
		password: this.state.password
	}).catch(err){
		console.log(err);
	}
}