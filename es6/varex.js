let currentTempC2 =22; //let 으로 변수 선언섭씨 온도 
console.log(currentTempC2); //22도 출력 
currentTempC3 =22.5;  // 변수 선언
console.log(currentTempC3);

const ROOM_TEMP_C =21.5, MAX_TEMP_C =30; //상수선언
console.log(ROOM_TEMP_C);
console.log(MAX_TEMP_C);

/* 변수 let 선언: 재할당만 가능 
    ex) let a = 1;
        a = 2; 가능
        let a = 2; 불가능 
        const 선언 : 재할당 ,재선언 불가 
    ex) const b =1;
        cont b =2; 불가능
        b =3 ; 불가능 
        let과 const는 여러개 선언도 가능하다. 
        */
let count = 10; //숫자 리터널 count는 더블
const blue = 0x000ff;   //16진수 16진수 ff는 10진수의 255와 같다.
const umask = 0o0022;   //8진수 8진수 22는 십진수 18과 같다.
console.log(count);
console.log(blue);
console.log(umask);
const roomTemp=21.5;    //십진수
const c = 3.0e6;        //지수 (3.0 * 10^6 = 3,000,000)
const e = -1.6e-19;     //지수 (-1.6 *10^-19) = 0.0000000000016
const inf = Infinity;   //Infinity
const ninf = -Infinity; //-Infintty
const nan = NaN; //숫자가 아님 

console.log(roomTemp);
console.log(c);
console.log(e);
console.log(inf);
console.log(ninf);
console.log(nan);

const small = Number.EPSILON;  // 1에 더했을때 1과 구분되는 결과를 만들수 있는 가장 작은 값.
                               //  근사치는 2.2e-16
const bigInt = Number.MAX_SAFE_INTEGER; // 표현할 수 있는 가장 큰 정수
const max = Number.MAX_VALUE;           // 표현할 수 있는 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER; // 표현할 수 있는 가장 작은 정수
const min = Number.MIN_VALUE;           // 표현할 수 있는 가장 작은 숫자
const nInf = Number.NEGATIVE_INFINITY;  // -Infinity
const nan1 = Number.NaN;                // NaN
const Inf = Number.Infinity;            // Infinity

console.log(small);
console.log(bigInt);
console.log(max);
console.log(minInt);
console.log(min);
console.log(nInf);
console.log(nan1);
console.log(Inf);
//이스케이프 
const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and "don\'t do that!" to max.';

console.log(dialog1);
console.log(dialog2);

const test = 'line1\nLint2';  //줄바꿈 \n
const test1 = 'Window\r\nwindow2'; //캐리지 리턴 \r
const test2 = 'Speed:\t60kph'; //탭 \t

console.log(test);
console.log(test1);
console.log(test2);

let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}\u00b0c`; //문자열병합
                                                //${ }

console.log(message);

const multline1 = "line1\n" + "line2\n" + "line3";  //줄바꿈 

console.log(multline1);

const multline = `Current temperature:\n` +  
                `\t${currentTemp}\u00b0C\n` +
                "Don't worry...the heat is on!";
console.log(multline);

const result1 = 3+ '30';  //3이 문자열  결과는 문자열 330
const result2 = 3* '30' ; // 30이 숫자로 결과는 숫자 90
//숫자가 필요할떈 숫자 사용 따음표를 쓸경우 문자열
console.log(result1); 
console.log(result2);

let heating = true;
let cooling = false;
let cooling2 = "false";

console.log(heating); 
console.log(cooling);
console.log(cooling2);

//Symbol 심볼을 항상 유일 어떤 심볼과도 일치 안함.
const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
RED === ORANGE //false : 심볼은 서로 다름. 

let currentTemp4;  // 암시적으로 undefined
console.log(currentTemp4);
const targetTemp = null; //대상 온도는 null 즉 "아직 모르는" 값입니다.
currentTemp4 = 19.5; // currentTemp에는 이제 값이 있습니다.
console.log(currentTemp4);
currentTemp4 = undefined; //currentTemp는 초기화 되지 않은듯 합니다. 
console.log(currentTemp4);

const obj = {};
obj.color = "yellow";
obj["not an identifier"] =3;
obj["not an identifier"]; //3
obj["color"];  //yellow

console.log(obj);

const SIZE = Symbol();
obj[SIZE] =8;
obj[SIZE]; //8
obj.SIZE = 0;

console.log(obj);
// (console.log(obj)).obj[SIZE];

const sam1 = {
    name: 'Sam',
    age: 4,
}

const sam2 = { name: 'Sam' , age: 4}; //한줄로 서넌
const sam3 = { 
    name: 'Sam', 
    classification: {
        kingdom: 'Anamalia',
        phylum : 'Chordata',
        class : 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus'
    },
};
console.log(sam1);
console.log(sam2);
console.log(sam3);

sam3.speak = function() { return "Meow!"; };
console.log(sam3.speak);
sam3.speak(); //"Meow!"
delete sam3.classification; //classification 트리 전체가 삭제됐습니다. 
delete sam3.speak; //speak 함수가 삭제됐습니다. 
console.log(sam3.speak);

const s = "hello";
s.toUpperCase(); //"HELLO"

const a1 = [1,2,3,4]; //숫자로 구성된 배열
const a2 = [1, 'two', 3, null]; //여러 가지 타입으로 구성된 배열
const a3 = [                    //여러 줄로 정의한 배열
    "What the hammer? What the chain?",
    "In what furnace was thy brain?",
    "what the anvil? what Dread grasp",
    "Dare its deadly terrors clasp?",
];
const a4 = [                        //객체가 들어있는 배열
        {name: "Ruby", hardness: 9},
        {name: "Diamond", hardness: 10},
        {name: "Topaz", hardness: 8},
];
const a5 = [        //배열이 들어있는 배열 
    [1,3,5],
    [2,4,6],
];
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

const arr= ['a','b','c'];
console.log(arr.length);
arr.length; //3

const arr1 = ['a','b','c'];
//첫번째 요소를 가져옵니다.
arr[0];     //'a'
// arr의 마지막 요소의 인덱스는 arr.length-1입니다.
arr[arr.length-1]; //'c'

const arr2 = [1,2,'c',4,5];
arr2[2] = 3; //arr2 [1,2,3,4,5]

const arr3 = {
    one: 1,
    two: 2,
    three: 3,
};
const arr4 = [
    "One",
    "Two",
    "Three",
];

console.log(arr3);
console.log(arr4);

const now = new Date();
now;
console.log(now);

const halloween = new Date(2016,9,31);
console.log(halloween);
const halloweenParty = new Date(2016,9,31,4,0); 
console.log(halloweenParty);

halloweenParty.getFullYear(); //2016
halloweenParty.getMonth(); // 9
halloweenParty.getDate(); //31
halloweenParty.getDay(); //1 (월요일 0은 일요일)
halloweenParty.getHours(); //19
halloweenParty.getMinutes(); //0
halloweenParty.getSeconds(); //0
halloweenParty.getMilliseconds(); //0

const numStr = "33.3";
const num = Number(numStr);

console.log(num);
const qa = parseInt("16 volts", 10); // volts는 무시됩니다 10진수 16입니다.
const qb = parseInt("3a", 16);  // 16진수 3a를 10진수로 바꿉니다 결과는 58입니다.
const qc = parseFloat("15.5 kph");    //"kph"는 무시됩니다 parseFloat는 항상 기수가 10이라고 가정. 
const qd = new Date(); 
const qe = qd.valueOf();

console.log(qa);
console.log(qb);
console.log(qc);
console.log(qd);
console.log(qe);

const numN = 33.5;
numN; //숫자 33.5
const stringN = numN.toString();
stringN; //문자 "33.5"

const arr5 = [1, true , "hello"];
arr5.toString(); // "1,true,hello"
console.log(arr5);

const boolean= 0; //거짓 같은 값.
const b1 = !!boolean; //false
const b2 = Boolean(boolean); //false

console.log(boolean);
console.log(b1);
console.log(b2);



