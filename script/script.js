function add( ) {
    let n1;
//    n1 = document.getElementById("number1").innerText;
    n1 = $("#number1").text();
    let n2;
    n2 = document.getElementById("number2").innerText;
    let res;
    res = parseInt ( n1 ) +  parseInt ( n2 );

    document.getElementById("result").innerText = " (제이쿼리 적용) " +res;
}
