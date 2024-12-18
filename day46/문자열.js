// [1] 문자열
console.log('트릭컬');
console.log("트릭컬");
console.log(`트릭컬`);
// [2] '작은따옴표와 "큰따옴표 출력하는 방법
console.log("유재석 '강호동'"); // 작은 따옴표 출력
console.log('유재석"강호동"'); // 큰 따옴표 출력
console.log(`'유재석'"강호동"`);
// [3] 문자열과 문자열 혹은 변수값 연결
let age = 40;
console.log(`나이 : ` + age); // 문자열과 변수값 연결
console.log(`나이 : ${age} `); // 문자열${변수호출} : 나이 : 40
// [4] JS의 문자열을 HTML에 출력하기
let body마크업객체 = document.querySelector('body');
console.log(body마크업객체); // null

body마크업객체.innerHTML = `<h3> 나이 : ${ age }  </h3>`;

// [5] 두 명의 직원명을 임의로 변수에 대입하고 html의 ol 마크업을 출력하시오.
let 직원명1 = '유재석';
let 직원명2 = '강호동';
let ol마크업객체 = document.querySelector('ol');
console.log(ol마크업객체);
ol마크업객체.innerHTML = `<li> ${직원명1} </li> <li> ${직원명2} </li>`

// 실습1 : 두개의 점수를 각 prompt로 입력받아서 합계를 HTML <div>에 출력하시오

let n1 = Number(prompt('첫번째 점수 입력'));
let n2 = Number(prompt('두번째 점수 입력'));

let result = n1 + n1;

let div마크업객체 = document.querySelector('div'); // div마크업을 js객체로 요청
div마크업객체.innerHTML = `총합계 : ${result}`;