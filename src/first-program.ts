// Task 1: Basic Data Types and First Program
// Objective: Write a TypeScript program that outputs a welcome message.
// Instructions:
// Create a TypeScript program.
// Print something to the console:
const message :string = "Hello, TypeScript!";
console.log(message);


// Task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.
// Instructions:
// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.
const getUserInfo = (name: string, age: number, role?: "admin" | "user" | "guest"): string => {
   return `User ${name}, age ${age} ${typeof role === "undefined" ? "" : `Role: ${role}`}`;
}
console.log(getUserInfo("Mahfuz", 102, "admin"));
console.log(getUserInfo("GuestMKan", 14));


// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.
// Instructions:
// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

type Person = {
   name: string,
   address: string,
   hairAndEyeColor: string,
   incomeAndExpense: number,
   hobbies:Array<string>,
   familyMembers: number,
   job: string,
   skills: string[],
   isMarried: boolean,
   friends: number,
}
const person: Person = {
   name: "Mahfuz",
   address: "Dhaka",
   hairAndEyeColor: "White",
   incomeAndExpense: 0,
   hobbies: ["coding", "listening music"],
   familyMembers: 5,
   job: "N/A",
   skills: ["HTML", "CSS"],
   isMarried: false,
   friends: 0,
}
console.log(person);


// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.
// Instructions:
// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.
interface Book {
   title: string;
   author: string;
   pages: number;
   genre?: 'fiction' | 'non-fiction' | 'fantasy' | 'science';
   publishedYear?: number; 
 }
 interface Magazine {
   title: string;
   issueNumber: number;
   month: 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' |
          'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';
   articles: string[];
   editor?: string;
 }
 type Intersection = Book & Magazine;
 type Union = Book | Magazine;


//  Task 5: Function Type
//  Objective: Write a function that reverses a string.
//  Instructions:
//  Write a function reverseString that:
//  Takes a single string argument.
//  Returns the string in reverse order.
//  Example:
//  Input: "hello"
//  Output: "olleh"
const reverseString = (str: string): string => {
   return str.split("").reverse().join("");
}
console.log(reverseString("hello"));


// Task 6: Spread and Rest Operators, Destructuring
// Objective: Write a function that uses the rest operator for variable-length arguments.
// Instructions:
// Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.