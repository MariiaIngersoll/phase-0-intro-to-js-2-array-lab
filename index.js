const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph");
}
cats;
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
cats;

function destructivelyRemoveLastCat() {
    cats.pop();
}
cats;

function destructivelyRemoveFirstCat() {
    cats.shift()
}
cats;
function appendCat() {
    const copyOfCats = [...cats, ("Broom")];
    return copyOfCats;
}
cats;
copyOfCats;

function  prependCat() {
    const copyOfCats = ["Arnold", ...cats]
    return copyOfCats;
}
copyOfCats;
function  removeLastCat(){
    const copyOfCats = cats.slice(0, cats.length-1);
    return copyOfCats;
}
function removeFirstCat() {
    const copyOfCats = cats.slice(1)
    return copyOfCats;
}