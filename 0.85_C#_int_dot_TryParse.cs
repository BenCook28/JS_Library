// int.TryParse() returns true or false 
// defiending on if it could parse the string.

// Output parameters allus us to set variables

static void Main(string[] args)
{
    Console.WriteLine("What's your favorite number?");
    int favNum = 0;
    int.TryParse(Console.ReadLine(), out favNum);
    // This sets favNum if the parse is successful.

    Console.WriteLine(favNum + " is a good number.");
}