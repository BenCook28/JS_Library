// We can use components as self-closing JSX tags.
<Comment />
// Props are arguments passed to components.
// They look like html attributes.
<Comment
    author="Annonymous" body="hi" />

 // We can access props with the this.props object.
 <p className="comment-header">{this.props.author}</p>

 // An underscore distinguishes custom methods from React methods.
 _getTransactions(){
 	const bankTransactions = [
 	    { id: 1, location: 'Starbucks', cost: 4.99},
 	    { id: 2, location: 'Schwab', cost: 7.99}
 	];

 	return bankTransactions.map((transaction) => {
 		return (<Transaction
 		    location={transaction.location} cost={transaction.cost} key={transaction.id} />);
 		    // Specifying a unique key improves performance.
 	});
 }

// We use ``s in conditionals.
 // In the render function:
 const transactions = this._getTransactions();
 // and in the JSX:
 <p>{bankTransactions.length} transactions<p>
 {transactions}