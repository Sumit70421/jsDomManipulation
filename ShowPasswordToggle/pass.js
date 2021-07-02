let click= document.getElementById("show");
let x=document.getElementById("pass");
click.addEventListener("click", ()=>{
    if(x.type==='password'){
        x.type='text';
    }
    else{
        x.type='password';
    }
    
})
