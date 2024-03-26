function a(){
    console.log("Executa A()")
}

function b(){
    console.log("Executa B()")
}

function c(){
    console.log("Executa C()")
    a();
    b();
}

c();