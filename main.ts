//Variables

var myString = "Hola mundo"

myString = 22 + ""

var myNumber: number = 22
var myBool: boolean = false

var myVar : any = "Hello"
myVar = false

//document.write(myNumber.toString())

// Arrays

var StringArray: string[] = ['item1', 'item2', 'item3']
var NumberArray: number[] = [1, 2, 3]
var BoleanArray: boolean[] = [true, false, true]
var Anyrray: any[] = [true, false, "true"]

// tuple

var strNumTuple : [string, number]
strNumTuple = ["hello", 11]

//Void, undefined, null

const PI = 3.1415

let myVoid: void = undefined
let myNull: null = null
let myUndefined: undefined = undefined

//Fuctions

function getSuma(num1: number, num2 : number) :number {
    return num1 + num2
}

function myVoidFunction(): void {
    return;
}

//Interfaces

interface InterfaceTodo {
    title: string;
    text: string
}

function showTodo(todo : InterfaceTodo) {
    console.log(`${todo.title} - ${todo.text}`)
}

let myTodo : InterfaceTodo = {
    title: "hola",
    text : "mundo"
}

showTodo(myTodo)

//Clases
class User {
    private name: string
    public email: string
    protected age : number

    constructor(
        name : string,
        email: string,
        age: number) {
        this.name = name
        this.email = email
        this.age = age
    }

    register() {
        console.log(`${this.name} esta registrado`)
    }

    public AgeInYears(){
        return this.age + ' years'
    }

    payInvoice() {
        console.log(`${this.name} pago su factura`)
    }
}


var usuario = new User('Jhon', 'johnsmith@mail.com', 33)

console.log(usuario.AgeInYears())

class Member extends User {
    id: number

    constructor(id, name, email, age) {
        super(name, email, age)
        this.id = id
    }

    public payInvoice(){
        super.payInvoice()
    }
}

var usuario2 = new Member(1, 'Jhon', 'johnsmith@mail.com', 33)
usuario2.payInvoice()