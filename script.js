//1
name = prompt("Your name?");
function Add(name) {
    this.name = name;
    console.log(this.name);
}
Add(name);
//2
var n = 10;
function sumTo(n) {
    var s = 0;
    for (i=1; i<=n; i++) {
        s = s + i;
    };
    console.log(s);
};
sumTo(n);
//3
var a = 7;
var b = 5;
function min(a,b) {
    if ((a-b) > 0) return b
    else return a
};
min(a,b);
//4
var n = 5;
var t = 6;
var obj = {
    number: 9,
    cantDelete: t,
    getDouble: function (n) {
        var command = prompt("Input 'set' or 'get'")
        if (command == "set") return n * 2
        else if (command == "get") return n * 3
        else return false
    }
};
//5
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var people = [ vasya , masha , vovochka ];
function sortAge(x,y) {
    return x.age - y.age
};
people.sort(sortAge)
console.log(people[0]);
console.log(people[1]);
console.log(people[2]);
//6
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];
function unique(strings) {
    var n = strings.length;
    var arr = [];
        for (i=0; i<=n; i++) {
            if (strings[i] !== strings[i+1]) {
                arr.push(strings[i+1])
            };
        };
return arr
};
console.log( unique(strings) );
