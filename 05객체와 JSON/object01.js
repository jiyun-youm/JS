//객체-{키:값} 형태로 여러 값을 저장해놓은 구조

let person={
    name:"순자",
    age:20
}

console.log(typeof person);

//객체의 값을 확인하기
let n=person.name;    // . 으로 접근  //객체의 값을 n이라는 변수에 저장 가능
console.log(person["name"]);  //["키"] 접근

//객체의 값 수정하기-동일한 키값 변경 가능
person.age=30;
person['age']=31;
console.log(person);

//객체의 값 추가하기-새로운 키를 추가
person.hobby=["잠자기","음악듣기","카페가기","쇼핑하기","산책하기"]
console.log(person);

//객체의 값 삭제하기-delete 키워드를 이용
delete person.hobby;
console.log(person);


//객체에는 함수도 저장될 수 있음
let people={
    name:'길동',
    sayHello: function (){           //메소드 넣을때는 이름없는 익명함수로
        console.log(`저의 이름은 ${this.name}입니다`);      //this 키워드는 자기자신을 의미함
        
    }
}

console.log(people.name);
console.log(people.sayHello());


console.log('===================================================================');
let jiyun={
    name: "염지윤",
    age: 24,
    cm: 160,
    hello: function(){
        console.log(`안녕하세요. 제 이름은 ${this.name}입니다.`);
        
    },
    hobby: ['음악듣기','카페가기','쇼핑하기','산책하기']
}
console.log(jiyun.hello());
                                       