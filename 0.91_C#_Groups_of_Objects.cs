// We instantiate and set variables in one line
// as shown below:

Musician musician = new Musician{ Name = "Paul", Instrument = "Saxophone" };

// We create arrays of objects in C# as shown below:

Musician[] musicians = new Musician[2];
musicians[0] = new Musician{ Name = "Paul", Instrument = "Saxophone" }
musicians[1] = new Musician{ Name = "Kenn", Instrument = "Guitar"}

// We create Lists to handle groups of strongly-typed objects
// of unknown or varying number as shown below:

List<Musician> Musicians = new List<Musician>();
Musicians.Add(new Musician{Name = "Paul", Instrument = "Saxophone"});

// We first need to add:
using System.Collections.Generic;
// to use the List datatype.

// We set default values for lists with:
public List<Musician> Musicians = new List<Musician>();
// This provides an initial empty list.