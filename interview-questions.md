# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:

   Html and JSX have many similarities with a few main differences. One of the main difference is JSX stands Javascript Syntax Extension or  in developer slang Javascript Xml . If you know about Javascript it is its own language . JSX coincides with html and that’s where us developers get nick name javascript XML  from. Another difference is that html is supported by all browsers. JSX on the other hand had a different focus and JSX main focus is to incorporate  javascript so the browser can understand Javascript in html language . This process is as easy as coding javascript in curly braces{}. When coding javascript in to the curly braces {} this will take all of the Javascript text and turn it into html reading on the back end so it will be able to display in the browser for human read ability. This process only happens under one condition,  which is JSX must be written inside of fragments and fragments allows you to take all of your components and return multiple elements. Fragments also allows us to group a list of children without adding a million lines of code.





Researched answer:

HTML is a Hypertext Markup Language, the standard language for documents designed to display and view on the web in a web browser. JSX (JavaScript + XML) is an extension of JavaScript that permits you to write down HTML directly within JavaScript, which features a few benefits of creating your code more readable and exercising the complete power of JavaScript within HTML. JSX is in some ways almost like HTML, but it does accompany certain differences. Since JSX isn’t a legitimate JAvascript code, it must be compiled into JS with a tool like Babel or similar. JSX is basically a fundamental way of how you define React components.JSX stands for JavaScript XML. It is a syntax extension for JavaScript that lets you use HTML tags right inside your JavaScript file. Instead of creating, configuring, and appending your HTML tags through JavaScript objects, you can create the elements using an XML-like syntax that will generate the DOM elements for you behind the scenes. Below is an example of JSX

const App = <h1>Welcome to GeeksforGeeks</h1>;



2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer:

A package manager is a tool that automatically handles a project’s dependencies in a variety of ways. For example, with the help of a package manager we can install, uninstall, update, and upgrade packages, arrange project settings, run scripts, and much more. All the hard and tedious work is done by the package manager, leaving to us only the fun part — the coding itself.Yarn stands for Yet Another Resource Negotiator. The original goal of Yarn was to deal with npm drawbacks, such as nph performance and security issues. Yarn was quickly positioned as a safe, fast, and reliable JavaScript dependency management tool. It also generate a yarn.lock file that makes sharing and exact replication of repos much easier and predictable.


Researched answer:
Yarn package manager is an alternative to npm, and was released by Facebook in October 2016. A package manager is a tool that automatically handles a project’s dependencies in a variety of ways. Yarn stands for Yet Another Resource Negotiator. It is a a javascript software packaging systmwm developed for node. js. Facebook created yarn to allow you to use and share code with other developers around the worlds. Yarn can do this process quickly. Yarn allows you to use other developers' solutions to different problems, making it easier for you to develop your software. Yarn writes its dependencies to a file named package. json , which sits in the root folder of your project, and stores the dependencies files into the node_modules folder.In 2021 Yarn 3 was released with various improvements.

3. What is an anonymous function in JavaScript?

Your answer:

Anonymous functions are functions that have not been declared yet, They are just a function.  Anonymous functions is an arguments passed to other functions, A function that can be passed as a parameter, and a function that can be passed as a variable.  The main advantage of an anonymous function is that they help the with smaller files and shorter memory. Since a  computer has to do things lofically it will take more resources for the computer to reference a function at the top of your code or even a function by name, Rather than explaining instruction to the computer in the very next steps. meaning it will allow the function to run immediately.  Anonymous functions  is a way to pass the computer instructions one by one instead of having it analyze through every file or every function name just to get instructions. Anonymous functions is also good for reducing run time which helps applications and websites run after and longer.



Researched answer:

An anonymous function is a function that doesn’t have a name. Anonymous functions are created using the function operator. Anonymous functions are used heavily in JavaScript for many things, most notably the many callbacks used by the language's of many frameworks. An anonymous function allows a programmer to create a function that has no name . In other words anonymous functions can be used to store a bit of functionality in a variable and pass that piece of functionality around it and created at runtime. Anonymous functions are declared using the function operator instead of the function declaration. Anonymous functions are not hoisted which means they will neber be loaded to computers memory. The computer will acknowledge the function but will not do anything with it because you can only call a function after the declaration line.



4. What is the difference between a class and an object?

Your answer:

Most people believe it is hard to tell the difference between object and classes but some how its super easy for me to tell the diffrence.  My teacher once told me that classes are the blueprint of objects, meaning classes are the structure , the building block for objects.  For example when we attend  school  some times  there are several classes , but in that class you learned different things based on the class that you’re in.  So say for instance , if you were in a math class, well math class would be the Class and Object would be what you learned in that math class for example, mulitplication , Division, Addition, Subtractions, Algebra, etc. The things you will learn in that math class is consider objects.  Objects are stand alone enities with properties and type’s. 


Researched answer:
The major diffrences between Class and Object are two most important concepts of an Object oriented programming language. The main difference between the two is that class is a blueprint which is used to create different objects of the same type. An object is defined as any entity that can be utilized by using commands in a programming language. An object can be a variable, value, data structure or a function. an object is referred to as an instance of a class. An object has state (data) and behavior (code). In programming, the key is that each object itself is responsible for carrying out tasks. An object contains properties and methods which are needed to make a certain type of data useful. Object properties are what it known as methods based on what it can do. The methods provide functionality to applications and ensure that an object’s data is being used properly. Methods also allow the actual execution of tasks to be hidden and to be standardized for particular operations for different types of objects. Methods are used to access the objects of a class. The objects are also used for data or code hiding. A class is a concept used in object oriented programming languages. It provides values for state (member variables) and implements the behavior (member functions, methods) in programs. A class is also said to be a blueprint of an object. It is an extensible guide used for creating objects; it is a subroutine that creates an object. A class does not represent the object; it represents all the information and methods an object should have. One class can be used to instantiate multiple objects. It is considered to be an extended TYPE declaration. Classes allow variables and methods to be isolated in specific objects instead of being accessible by all the parts of a program. This encapsulation of data protects each class from changes in other parts of the program. By using classes, developers can create structured programs with source code that can easily modify the programs.  



5. What is the difference between state and props in React?

Your answer:

The difference between state and props in React is that when you say State I think of the computers state of mind. We use state to update the data that changes in our components and can be visible in the UI. For example if we decide to update our event handler , our server response or any of our prop changes, you would have to update the computers state of mind by using setState(). Using setState() will automatically transfer the entire component and all of its child components and update your computers UI. State is basically a built-in React entity that holds all the data information about your components to me this sounds like the  brain. We use Props in React to pass data from one component to the next component. Props will always be padded  from a parent component to a child component.   A easy way for me to remember this is there is this old saying “Listen to your elders”. It was never the other way around.  I use this analogy because as a Software developer I strive to learn something new everyday, so my state a mind changes often. I update my state of mind with  new  ways code, learning ideas from vetran developers that have been in my shoes ,  and my new experiences. This is the data I take in which is similar to my properties. So to sum this all up state is a way you update the data in your components and Props is the data that’s passed through your components.


Researched answer:

React.js is one of the most widely used JavaScript libraries that every front-end developer should know. Understanding what props and state are and the differences between them is a big step towards learning React. Props is short for properties. They can be used in React components to give them a new shape, or rather, customize the component or else to give different parameters to the component. The speciality about props is that props can be passed from parents to children they are also read-only in the child component. On another hand, call back functions can be passed to run inside the child component and initialize an update. Which brings us to our next topic sate. The state can be initialized by props. State acts as a data storage in React. The state is within a single react component and is mutable. State It is most often used to update a component when an action such as pressing a key is performed. 


6. STRETCH: Which is the difference between a div and a span?

Your answer:

The difference between a div and a span tag is that when using a span tag it's usually code that is in a line meaning code such as a paragraph or a small part of a document. Mainly some code that can be written in one line. You would use this span element when your current line does not create a break. A span tag will give a computer this one set of instructions. A div is used for blocks of code which is basically equivalent to having a line-break before and after the some code, and used to group larger chunks of code.


Researched answer:

Both span and div are both generic HTML elements. A div element is used for block-level organization and styling of page elements, whereas a span element is used for inline organization and styling. When an element is in-line are usually used for a small chunk of in-line HTML like a paragraph. Since a paragraph can be long text with out and breaks or any other computer instructions. We can use the span tag.Span is mostly used to style specific text. For example if you want to stle each paragraph a diffrent color, or when you have text inside other txt that you worl like to be a diffrent font/color/size. Other than that I dont really see any other usage for span tags. A div can be used in may ways. A div is a block element. A div element has width meaning it has new lines that appear before and after the element with it consuming the full width available. A div element can also contain other elments and other div tags. With a div tag you can utlize borders with width and height and some color pixwls. The div tag can also be called the division tag because it divides the content of a web page.



## Looking Ahead: Terms for Next Week

1. Object-oriented programming:

 A program characterized by identifying classes and objects that are linked to methods and  functions. Object-oriented programming helps developrs break the program into bit size problems that can be solves easily.


2. Ruby:

Ruby is another scripting language for front end and back end development. Ruby was made for developer fun. It’s built to focus on humans first an computers second.

3. Implicit return:

Null, An Implicit return  will return the last expression in a path of execution. Which pretty much mean return nothing . The default is to return a falsey value.

4. Ruby blocks:

Ruby blocks are anonymous functions that can be passed into methods. Ruby blocks are blocks of code that are useful because it allows you to save a bit of logic (code) and use it later

5. Ruby hashes:

A hash is the  data structure  that maintains data in a form of unique key value pairs. Similar to an array however the array index is always an integer.
