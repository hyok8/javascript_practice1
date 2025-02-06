const mynavi = [
    {
        d1text : "예약하기",
        d1href : "reservation.html",
        d1cls : "reser",
        d2navi :[
            {
                d1text : "캠핑",
                d1href : "reservation.html",
                d1cls : "reser"               
                
            },
            {
                d1text : "글램핑",
                d1href : "promotion.html",
                d1cls : "only"
            },
            {
                d1text : "카라반",
                d1href : "project.html",
                d1cls : ""
            },
            {
                d1text : "펜션",
                d1href : "brand.html",
                d1cls : ""
            }
        
        ]
        
    },
    {
        d1text : "오직여기 뭐?",
        d1href : "promotion.html",
        d1cls : "only",
        d2navi :[
            {
                d1text : "소슬만의 스팟",
                d1href : "reservation.html",
                d1cls : "reser"               
                
            }
        
        ]
    },
    {
        d1text : "프로모션",
        d1href : "project.html",
        d1cls : "",
        d2navi :[
            {
                d1text : "이벤트",
                d1href : "reservation.html",
                d1cls : "reser"               
                
            },
            {
                d1text : "신규오픈",
                d1href : "promotion.html",
                d1cls : "only"
            },
            {
                d1text : "마감임박",
                d1href : "project.html",
                d1cls : ""
            }
        
        ]
    },
    {
        d1text : "브랜드",
        d1href : "brand.html",
        d1cls : "",
        d2navi :[{
            d1text : "",
            d1href : "reservation.html",
            d1cls : "reser"      
            
        }                  
        ]
    },
    {
        d1text : "고객센터",
        d1href : "brand.html",
        d1cls : "",
        d2navi :[          
            {
                d1text : "",
                d1href : "reservation.html",
                d1cls : "reser"               
            }
        ]
    }

]

// 객체를 저장한다.
const targetul = document.querySelector("#khj_gnb");
let   ullist = ""; //태그수집하기

for(x = 0; x < mynavi.length ; x++ ){
    ullist += `<li class="${mynavi[x].d1cls}">
                    <a href="${mynavi[x].d1href}">
                        ${mynavi[x].d1text}
                    </a>`;
            if(mynavi[x].d2navi.length > 0){                
                ullist +=`<ul class = "d2ul">
                                    <li><a href="${mynavi[x].d2navi[0].d1href}">
                                    ${mynavi[x].d2navi[0].d1text}</a></li>
                         </ul>`;
                }
    ullist +=` </li>`; 
}

targetul.innerHTML = ullist;

document.querySelector("#sec1").innerHTML = `<h2>${mynavi[0].d1text}</h2>`
document.querySelector("#sec2").innerHTML = `<h2>${mynavi[1].d1text}</h2>`
document.querySelector("#sec3").innerHTML = `<h2>${mynavi[2].d1text}</h2>`
document.querySelector("#sec4").innerHTML = `<h2>${mynavi[3].d1text}</h2>`
