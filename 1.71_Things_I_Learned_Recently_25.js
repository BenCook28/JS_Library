// To got back to a previous 
// version of a view,
// we can use React Navigation's
// Reset:

// The Reset action wipes the whole navigation state and replaces it with the result of several actions.

// index - number - required - Index of the active route on routes array in navigation state.
// actions - array - required - Array of Navigation Actions that will replace the navigation state.
// key - string or null - optional - If set, the navigator with the given key will reset. If null, the root navigator will reset.
// import { NavigationActions } from 'react-navigation'

// const resetAction = NavigationActions.reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({ routeName: 'Profile'})
//   ]
// })
// this.props.navigation.dispatch(resetAction)

// Source: React Navigation documentation