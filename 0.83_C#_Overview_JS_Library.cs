// C# is compiled, meaning it translates 
// source code into machine code
// C# is strongly typed, variables 
// will always have the type you assign them
// C# is a .NET langauge.  This means there's a
// common intermediate langauge like VB.NET between
// source code and machine code.

// The dotnet new console command creates a C# application
// with a Program.cs file.

// Program.cs looks like this:
using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
    }
}

// Classes let us separate code into objects.
// Methods contain executable code.

// We run dotnet restore when we run the application
// for the first time or change a dependency.

//dotnet run runs an application.

// The Console.ReadLine method reads user input from the 
// console line and returns it as a string.

