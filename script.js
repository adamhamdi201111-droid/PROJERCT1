let r =document.getElementById("button2")
r.addEventListener("click" , function(){
    setTimeout(function(){
        alert("click me")
    } ,3000)
})


let total
let s =document.getElementById("me2")
s.addEventListener("click" , function(){
    total =setInterval(function(){
        alert("click us")
    } ,5000)
})
let me =document.getElementById("us") 
me.addEventListener("click" , function(){
    clearInterval(total)
})
let y =document.getElementById("click2")
let q =document.getElementById("para")
let count = 0
y.addEventListener("click" , function(){
    setInterval(function(){
    count++
    q.innerHTML = count
    } ,4000)
})
