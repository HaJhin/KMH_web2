// [1] 객체를 선언하기
{ }
// [2] 객체 생성 시 속성 정의
// {속성명1 : 10 , 속성명2 : 'HELLO'};
// [3] 생성한 객체를 변수에 대입하기
let 객체변수1 = {속성명1 : 10 , 속성명2 : 'JAVA'};
// [4] 객체를 호출하기
객체변수1;
console.log(객체변수1);
// [5] 객체의 특정 속성 값 호출하기
객체변수1.속성명1;
console.log(객체변수1.속성명1);
// [6] 객체의 특정 속성 값 수정하기
객체변수1.속성명1 = 20;
// [7] 객체의 특정 속성 삭제하기
delete 객체변수1.속성명1;
console.log(객체변수1.속성명1);
// [8] 객체 내 다양한 속성값들
let 객체변수2 = {
    속성명1 : 10 , 
    속성명2 : 'HI' ,
    속성명3 : false , 
    속성명4 : null , 
    속성명5 : [1,2,3,4] ,
    속성명6 : function add(){} ,
    속성명7 : {서브속성1 : 10}
}

// [실습1] : 게시판을 구현하기 위한 게시물 객체를 설계하시오
// 제목 : '안녕하세요'
// 내용 : 'JS 처음입니다.'
// 작성자 : '유재석'
// 조회수 : 3
// 작성일 : 2024-12-23

let 게시물1 = {
    제목 : '안녕하세요' ,
    내용 : 'JS 처음입니다.' , 
    작성자 : '유재석' ,
    조회수 : 3 , 
    작성일 : '2024-12-23'
}

console.log(게시물1);

// 실습2 : 회원을 구현하기 위한 아래와 같은 정보를 회원객체로 표현하시고 출력하시오.
    // 객체의 닉네임과 나이를 출력하는 코드를 작성하시오.
// 아이디 : qwe
// 비밀번호 : 1234
// 닉네임 : '유재석'
// 나이 : 40

let user1 = {
    id : 'qwe' ,
    pwd : 1234 ,
    name : '유재석' ,
    age : 40 
}

console.log(user1.name,user1.age);

// 실습3 : prompt로부터 국어 , 영어 , 수학 점수를 입력받아 점수를 출력하는 함수

let kor = Number(prompt('국어점수 입력'));
let math = Number(prompt('수학점수 입력'));
let eng = Number(prompt('영어점수 입력'));

let score = {
    kors : kor ,
    maths : math , 
    engs : eng
}

console.log(score);

let sum = score.kors + score.engs + score.maths;

console.log(Object.keys(score));
