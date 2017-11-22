// We don't have to deploy a 
// React Native app to Heroku,
// (or AWS or Firebase, etc.)
// be we do have to deploy
// the server / database to 
// Heroku.

// With ES6, we can shorten this
// functional component:

const ListItem = (props) => {
  return (
    <a onClick={this.props.onSelect}>{this.props.name}</a>
  )
}

// to this:
const ListItem = ({ name, onSelect }) =>
  <a onClick={onSelect}>{name}</a>