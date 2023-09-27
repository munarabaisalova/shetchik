let currentYear =new Date().getFullYear()
console.log(currentYear);
let mus = new Audio("./mus.mp3")
let muz = new Audio("./true-96217.mp3")
const ResolveAge=()=>{
    let btn =document.getElementById('btn')
    let year =document.getElementById('year').value
    let result =document.getElementById('result')
    let incorrect =document.getElementById('incorrect')
    year = parseInt(year)
    if(Number.isNaN(year)){
incorrect.style.display='block'
incorrect.style.color='red'
result.style.display='none'
mus.play()

    }else{
        let res = currentYear-year
        result.style.display='block'
        incorrect.style.display='none'
        result.innerHTML = 'Сиздин жашыныз:'+res
     
        muz.play()
    }
}