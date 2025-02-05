const mynavi = [
    {
        d1text : "예약하기",
        d1href : "reservation.html"
    },
    {
        d1text : "오직여기 뭐?",
        d1href : "promotion.html"
    },
    {
        d1text : "프로모션",
        d1href : "project.html"
    },
    {
        d1text : "브랜드",
        d1href : "brand.html"
    },
    {
        d1text : "고객센터",
        d1href : "brand.html"
    }
]

const targetul = document.querySelector("#khj_gnb");//목적 태그 
let ullist = ""; //태그수집하기

// 변수 x를 사용해서 mynavi 출력
for(x=0; x < mynavi.length; x++){
    ullist += `<li><a href="${mynavi[x].d1href}">${mynavi[x].d1text}</a></li>`;
}
targetul.innerHTML = ullist;

document.querySelector("#sec1").innerHTML = `<h2>${mynavi[0].d1text}</h2>`
document.querySelector("#sec2").innerHTML = `<h2>${mynavi[1].d1text}</h2>`
document.querySelector("#sec3").innerHTML = `<h2>${mynavi[2].d1text}</h2>`
document.querySelector("#sec4").innerHTML = `<h2>${mynavi[3].d1text}</h2>`

//화면 초기화 하기 
// document.body.innerHTML =""

// document.querySelectorAll("a")[0]
// document.querySelectorAll("a").item(0)
