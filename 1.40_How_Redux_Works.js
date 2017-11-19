// We can style in react with className 
//instead of class.

// With Flux, we don't have to pass actions 
// as props through components anymore.

// Redux and MobX are both Flux implementations.  
// Redux keeps data in a single store, while MobX 
// uses multiple stores.  

// With Redux reducers are functions that 
// take an action and the current state and 
// return a new state object.

//Reducers break up the big state object 
// and selectors access only the data we're interested in.

// To performa an action, we call the dispatch 
// method with the action, which passes the action to the 
// reducer which returns a new state.  Then we connect the
//  component and receive all or part of the state as a prop 
//  to our component.