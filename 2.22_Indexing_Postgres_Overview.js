// If a query on a column is slow,
// adding an index speeds the query.
// In Postgres, we can also do 
// partial indexes.  For example,
// we could index only rows with 
// no soft delete flag.