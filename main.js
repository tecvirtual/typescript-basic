//Variables
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myString = "Hola mundo";
myString = 22 + "";
var myNumber = 22;
var myBool = false;
var myVar = "Hello";
myVar = false;
//document.write(myNumber.toString())
// Arrays
var StringArray = ['item1', 'item2', 'item3'];
var NumberArray = [1, 2, 3];
var BoleanArray = [true, false, true];
var Anyrray = [true, false, "true"];
// tuple
var strNumTuple;
strNumTuple = ["hello", 11];
//Void, undefined, null
var PI = 3.1415;
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//Fuctions
function getSuma(num1, num2) {
    return num1 + num2;
}
function myVoidFunction() {
    return;
}
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
var myTodo = {
    title: "hola",
    text: "mundo"
};
showTodo(myTodo);
//Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " esta registrado");
    };
    User.prototype.AgeInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " pago su factura");
    };
    return User;
}());
var usuario = new User('Jhon', 'johnsmith@mail.com', 33);
console.log(usuario.AgeInYears());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var usuario2 = new Member(1, 'Jhon', 'johnsmith@mail.com', 33);
usuario2.payInvoice();
