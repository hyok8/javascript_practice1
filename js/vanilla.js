// 변수선언
let number = 0;

//아이디 /패스워드(변경가능하게하기 위해 let)
const id = "hyok824";   
 

let pw = "123456"
pw += "012345"
console.log(`아이디:${id}이고 비밀번호는 ${pw}입니다.`)

//var는 같은 변수를 사용 가능함 -> 메모리 낭비될 수 있음 
var mynm = "김효정";
var mynm = "취준생"

//배열 array
const navi = ["네이버","다음","구글"] //인덱스화

console.log(`제주도에 있는 유명대기업 ${navi[1]}, 가고싶다`)

const 유치원 = {
    해바라기 :["최상엽","신예찬","조원상","신광일"],
    백합 : ["김세현","전민규","박재찬","김종형","류기석"],
    무궁화 : ["성호","리우","명재현","태산","이한","운학"]
}
//2가지 방법
console.log(유치원.백합[3], 유치원["무궁화"][2])

//in은 숫자값 ex)층수 
//for(x of 유치원["해바라기"]){
//    console.log(`forin문은 index에 접근한다.. ${x} 출력`)}
for(x in 유치원["무궁화"]){
    console.log(x)
}

//of는 값 ex)입주자
// for(x of 유치원["해바라기"]){
//     console.log(`forof문은 value에 접근한다.. ${x} 출력`)
// }
for(x of 유치원["해바라기"]){
    console.log(x)
}

// 
let count = 2;

setInterval(function(){
    count++;
    console.log(count);
},1000)


// window.addEventListener("DOMContentLoaded",function(){

//    // alert((count + 8) / 2 * 3 % 2 ); //팝업창 윈도우 소속
//     document.body.innerHTML = 
//     `<h2>1초마다 숫자가 바뀌어요</h2>`;
//     document.body.innerHTML += 
//     `<div>${count}</div>`;

//     document.body.classList += "dim${count}"
// })

function 동사이름(){}//선언적 함수

동사이름();//실행
동사이름();
동사이름();
동사이름();