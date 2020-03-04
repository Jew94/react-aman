/**
 * help us deal with async code
 * facade - constant api across different async code api
 * promise is a class to use is just create an instance
 * 
 */

 // promise has the following states:
// pending -> fulfilled
// pending -> rejected

// Promise<string>
const myTimerPromise = new Promise(function(resolve, reject) {

    // put your async code here please
    setTimeout(() => {
        resolve('https://www.google.com');
        // resolve('world');
        // reject(new Error('we got 401 cause you are unauthorized'));
    }, 1000);

});

// then returns a Promise as well
// Promise chaining
// Promise<number | boolean>
myTimerPromise.then(
    function fulfilled(msg) {
        console.log(msg);
        return msg.length;
    },
    function rejected(err) {
        return true;
    }
).then().then().then()

myTimerPromise.then(
    function fulfilled() {

    },
    function rejected() {
        
    }
)

myTimerPromise.then(
    function fulfilled() {

    },
    function rejected() {
        
    }
)

// async await

/**
 * @returns {Promise<number>}
 */
async function sayHello() {
    // hello
    try {
        const url = await myTimerPromise;
        const response = await fetch(url);
        const json = await response.json()
        return json.length;
    } catch(err) {
        return 0;
    }
}

// Promise<number>
const anotherPromise = sayHello();

anotherPromise.then((myNumber) => {

})