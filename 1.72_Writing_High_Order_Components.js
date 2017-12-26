// Props aren't passed down automatically
// to High Order Components (HOCs).
// So we should pass the props as shown
// in the example HOC below:

function exampleHOC(WrappedComponent) {
  return class HOC extends React.Component {
  	render() {
  		return <WrappedComponent { ...this.props } />
  	}
  }
}