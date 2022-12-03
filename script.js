function plus(operator){
    if(operator=='+'){
        
    let digit = document.getElementById('digit').innerHTML
    document.getElementById('plus').style.background='green'
    digit++;
    console.log(digit)
    document.getElementById('digit').innerHTML=digit;
    }else{
        let digit = document.getElementById('digit').innerHTML
        if(digit==0){
            Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'You Cannot Enter Below 0',
})
        }else{
            document.getElementById('minus').style.background='red'

            digit--;
    console.log(digit)
    document.getElementById('digit').innerHTML=digit;
        }

    }
   
}

function reset(){
    document.getElementById('digit').innerHTML=parseInt(0)
}