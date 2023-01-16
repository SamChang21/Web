var mass1  = prompt("what is your mass")
var height1 = prompt("what is your height")
var mass2 = prompt ("what is your classmate's mass")
var height2 = prompt("what is your classmate's height")
var P1BMI = mass1/(height1*height1)
var P2BMI = mass2/(height2*height2)


console.log(`your BMI${P1BMI}, you classmate's BMI${P2BMI}`)


if(P1BMI>P2BMI){
    console.log("your BMI is higher")
}else{
    console.log("you classmate's BMI is higher")
}