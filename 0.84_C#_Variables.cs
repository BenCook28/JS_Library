// We set and get variables.

// We declare the datatype and name of variables.

// int is the datatype for integers.
// ints can be positive or negative.
// int.Parse converts strings to ints.
// int chosenNumber = int.Parse(Console.ReadLine);

static void Main(string[] args)
{
    Console.WriteLine("What is your name?");
    string name = Console.ReadLine();

    Console.WriteLine("Hi " + name);
}