require('core-js/fn/array/values');
const book = [
        "Twinkel, twinkle, little bat!",
        "How I wonder what you're at!",
        "Up above the world you fly",
        "Like a tea tray in the sky",
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
];

const it = book.values();
let current = it.next();
while(!current.done) {
    console.log(current.value);
    current = it.next();
   
}

const it1 = book.values();
const it2 = book.values();

it1.next(); //values : Twinkel, twinkle, little bat!
it1.next(); //values : How I wonder what you're at!
it2.next(); //vlaues : Twinkel, twinkle, little bat!
it1.next(); //values : Up above the world you fly


 class Log {
     constructor() {
         this.messages = [];
     }
    add(messages) {
        this.messages.push({ messages, timestamp: Date.now() });
    }
    [Symbol.iterator]() {
        let i = 0;
        const messages = this.messages;
        return {
            next() {
                if(i>= messages.length)
                    return { value: undefined, done : true};
                return { value: messages[i++], done: false };
            }
    }
 }
 }
//  const log =new Log();
//  log.add("first day at sea");
//  log.add("spotted whale");
//  log.add("spotted another vessel");

//  for(let entry of log) {
//      console.log(`${entry.messages} @ ${entry.timestamp}`);
//  }
class FibonacciSequence {
    [Symbol.iterator]() {
        let a = 0, b=1;
        return {
            next() {
                let rval = {value:b, done: false};
                b += a;
                a = rval.value;
                return rval;
            }
        };
    }
}

const fib = new FibonacciSequence();
let i =0;
for(let n of fib){
    console.log(n);
    if(++i > 9 ) break;
}

function* rainbow() {
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

const it3 = rainbow();
it3.next();
it3.next();
it3.next();
it3.next();
it3.next();
it3.next();
it3.next();

for(let color of rainbow()) {
    console.log(color);
}

function* interrogate() {
    const name = yield "What is your name?"
    const color = yield "What is your favorite color?"
    return `${name}\'s favorite color is ${color}.`;
}

const it4 = interrogate();
it4.next();
it4.next('Ethan');
it4.next('orange');

for(let it4 of interrogate()){
    console.log(it4);
}



