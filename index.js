// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
console.log(cats);

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
console.log(cats);

function destructivelyRemoveLastCat() {
    cats.pop();
}
console.log(cats);

function  destructivelyRemoveFirstCat() {
    cats.shift();
}
console.log(cats);

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function appendCat(name) {
    const newArray = [...cats, "Broom"];
    return newArray;
}
console.log(cats);
console.log(newArray);

function prependCat(name) {
    const newArray = ["Arnold", ...cats];
    return newArray;
}
console.log(cats);
console.log(newArray);

function removeLastCat() {
    const newArray = cats.slice(0, cats.length - 1);
    return newArray;

}
console.log(cats);
console.log(newArray);

function removeFirstCat() {
    const newArray = cats.slice(1);
    return newArray;
}
console.log(cats);
console.log(newArray);
