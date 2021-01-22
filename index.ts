let message: string = 'Hold the door'
console.log(message)

interface Person {
    name: string;
    lastName: string;
    id: number;
}

const person: Person = {
    name: 'Ned',
    lastName: 'Stark',
    id: 1,
};

console.log('person', person);


function greeter(person: string) {
    return 'Hello ' + person;
}

console.log(greeter('Tyrion'))

class LoggerClass {
    name: string 
    constructor(name: string) { 
        this.name = name 
    } 

    greet(): void { 
        console.log('Hi ', this.name) 
    } 
} 

let myLogger = new LoggerClass('Hodor'); 
myLogger.greet();


let myNumber: number = 666
console.log('myNumber', myNumber)


//type assertion
var str = '1' 
var str2: number = <number> <any> str   //str is now of type number 
console.log(typeof(str2))


//typescript object, adding function after object declaration
var character = {
    firstName: 'Jon', 
    lastName: 'Snow', 
    logName: function() {  }  //Type template 
}

character.logName = function() {  
    console.log(character.firstName)
}  
character.logName()


var personObj = { 
    firstname: 'Jaime', 
    lastname: 'Lannister' 
}; 

var invokeperson = function(obj: { firstname: string, lastname : string }) { 
    console.log('firstName', obj.firstname) 
    console.log('lastName', obj.lastname) 
} 

invokeperson(personObj)

/*

-install typeScript:
node install typescript

-compile index.ts:
tsc index.ts

-run index.js with node

-start up watcher (Watch for file changes and recompile them on the fly):
Ctrl + Shift + B (in VS code), and select tsc: watch -tsconfig.json

-compile multiple files:
tsc file1.ts, file2.ts, file3.ts

*/