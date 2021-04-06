//  배열의 생성 방법 1. Array 객체 이용
const v1 = new Array(10);   //  10개짜리 배열
const v2 = new Array();     //  빈 배열
const v3 = new Array(1, "JavaScript", true);    //  어떤 객체든 다 들어감

//  길이를 측정할 수 있다
console.log(v1.length, v2.length, v3.length);   //  .length 속성
