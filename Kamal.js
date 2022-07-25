function ekseded(eded){
    if(0 < eded){
        return - eded
    }
    if(0 > eded){
        return - eded
    }
    if(0 == eded){
        return eded
    }
}
//console.log(ekseded("7"))


function century(year){
    return Math.trunc(year / 100 + 1 + " " + "esr") 
}
console.log(century(prompt("il daxil edin")))