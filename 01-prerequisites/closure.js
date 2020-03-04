

let counter = 0;


setTimeout(() => {
    console.log(counter); // eliran said 0 or 1, tomer said 1
}, 2000);

setTimeout(() => {
    counter++;
}, 1000)