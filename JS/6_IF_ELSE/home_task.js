// вар 1
if (1 === "1") {
    console.log("true!");
} else {
    console.log("false!"); // false
}

//вар 2
if (5 == "5") {
    console.log("true!"); //true
} else {
    console.log("false!");
}

//вар 3
let message = (92 > '11' && 58 < 100) ? 'true!' : 'false!';
console.log(message); //true!

//вар 4
if (0) {
    console.log("false!");
} else if (" ") {
    console.log("true!"); //true!
}