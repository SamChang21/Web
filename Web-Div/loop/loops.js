let score= 1
while(score<6){
    document.querySelector(".loop1").innerHTML+="<p> I love home work</p>"
    score++
}
for(i=0;i<5; i++){
    document.querySelector(".loop2").innerHTML+=i
}
for(i=15; i<=30; i+=3){
    document.querySelector(".loop3").innerHTML+=i
}

for(i=0; i<4; i++) {
    // open the div
    document.querySelector(".loop4").innerHTML+="<div>"
    // for loop boxes
    for(j=0; j<4; j++){
        document.querySelector(".loop4").innerHTML+="⬜"
    }
    // close the div
    document.querySelector(".loop4").innerHTML+="</div>"
}

for(i=0; i<7; i++) {
    // open the div
    document.querySelector(".loop5").innerHTML+="<div>"
    // for loop boxes
    for(j=0; j<i; j++){
        document.querySelector(".loop5").innerHTML+="🦴"
    }
    // close the div
    document.querySelector(".loop5").innerHTML+="</div>"
}

for(i=0; i<7; i++) {
    // open the div
    document.querySelector(".loop6").innerHTML+="<div>"
    // for loop boxes
    for(j=6; j>i; j--){
        document.querySelector(".loop6").innerHTML+="~"
    }
    for(k=0; k<=i; k++){
        document.querySelector(".loop6").innerHTML+="🦴"
    }
    // close the div
    document.querySelector(".loop6").innerHTML+="</div>"
}

// i = 2
// j = 2
// k = 0

for(i=0; i<5; i++){
    document.querySelector(".loop7").innerHTML+="<div>"
    for(j=0; j<=i; j++){

        for(k=0; k<=j; k++){
            document.querySelector(".loop7").innerHTML+="🦴"
        }
        document.querySelector(".loop7").innerHTML+="<br>"

    }
    document.querySelector(".loop7").innerHTML+="<br>"

}