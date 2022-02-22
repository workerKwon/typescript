// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let number: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3]
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10] 
let items: number[] = [1,2,3]

// TS 튜플 : 배열의 특정 순서에 타입까지 정의 하는 것이 튜플
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
let person: object = {
    name: 'capt',
    age: 100,
}

let person2: {name: string, age: number} = {
    name: 'thor',
    age: 100,
}

//TS 진위값
let show: boolean = true;