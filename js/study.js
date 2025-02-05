const mynm = "김효정"
console.log(mynm);

const myfun = {
    mynm:"나는 상수변수",
    log : function(){
        alert("나는 브라우저에 이미 정의되어있는 내장객체함수에요");
    }
}
//myfun.log()

const mynavi = [
    {
        d1text : "예약하기",
        d1href : "reservation.html"
    },
    {
        d1text : "오직여기",
        d1href : "promotion.html"
    },
    {
        d1text : "브랜드",
        d1href : "brand.html"
    },
    {
        d1text : "호텔",
        d1href : "hotel.html"
    }
]

const mytarget = document.querySelector("#gnb");

for(i = 0; i < mynavi.length; i++){
 mytarget.innerHTML += `<li><a href="${mynavi[i].d1href}">${mynavi[i].d1text}</a></li>`
 }



// mytarget.innerHTML ="<li>"+mynavi[0].d1text+"</li>"  

// mytarget.innerHTML +=`<li>${mynavi[1].d1text}</li>` 
// mytarget.innerHTML +=`<li><a href="${mynavi[0].d1href}">${mynavi[0].d1text}</a></li>`     
// mytarget.innerHTML +=`<li>
//                         <a href="${mynavi[1].d1href}">
//                         ${mynavi[1].d1text}
//                         </a>
//                         </li>`






// const myfun = {
//     1차변수
//     ,
//     2차변수
// }

const 고양이 ={
    종류 : ['샴','코숏','먼치킨','노르웨이숲'],
    성별 : ['암컷','수컷']
}
const tripter ={
    팀이름 :"",
    팀원명수 : 4,
    team : [
        {
            name:"신은경",
            hobby : "태민",
            work: "기획팀장"},
        {
            name:"박다혜",
            hobby :"svt",
            work :"메인퍼블리셔"},
        {
            name:"정유진",
            hobby :"배드바츠마루",
            work :"메인디자이너"},
        {
            name:"김효정",
            hobby:"DKZ",
            work:"서브퍼블리셔"}    
    ]
}

const myteam = document.querySelector("#team");


for(i = 0; i < tripter.team.length; i++){
    myteam.innerHTML += `<li>${tripter.team[i].name} - ${tripter.team[i].hobby}</li>`;
}




