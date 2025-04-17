function multiplicar(){
var n = window.document.getElementById('txtvel')
var seltab = window.document.getElementById('seltab')
var number = Number(n.value)
if (number == 0){
   window.alert('Por favor digite um numero!') 
} else{
    var numero = number 
    seltab.innerHTML =""
    for(var i = 1; i <=10;i++){
        let item = document.createElement('option')
        item.text = `${numero} X ${i} = ${numero*i}`
        seltab.appendChild(item)
        
       
}

}
}