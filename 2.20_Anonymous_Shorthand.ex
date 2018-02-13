#We can write this function:
deposit = fn(balance, amount) -> balance + amount end

# like this:
deposit = &(&1 + &2)