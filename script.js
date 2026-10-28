console.log("콘솔창에 나와야 하는 내용");

var num = 10 + 20;

console.log(num);

let sum = 80 + 1234;

console.log(sum);

let string1 = "Hello, world";
let string2 = '시네마 웹사이트 "cinema website"에 오신걸 환영합니다';
console.log(string1, string2);

let dan = 3;
let gugu = 8;
let string = `${dan} 곱하기 ${gugu} 은/는 ${dan * gugu} 입니다`;
console.log(string);

let studentScore = [80, 70, 90, 60];
console.log(studentScore);
console.log(studentScore[2]);

let stdScore = {
    koreanScore: 80,
    englishScore: 70,
    matheScore: 90,
    scieneScore: 60
};

console.log(stdScore);
console.log(stdScore.koreanScore);

for (dan = 2; dan <= 9; dan++) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} X ${i} = ${dan * i}`);

    }
    console.log(` `);
};