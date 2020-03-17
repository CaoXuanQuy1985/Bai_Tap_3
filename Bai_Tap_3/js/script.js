let locInputElem, locAdd, locArray, locConcat, locResult;
let arrayResult;

window.onload = init();

function init(){
    locInputElem = document.getElementById("input-Elem");
    locCheck = document.getElementById("checkFib");
    locResult = document.getElementById("result");
    arrayResult = [];
}




let isFibonacci = function(n){
    if(arrayResult.includes(n)){
       locResult.innerHTML = n + " là số nằm trong dãy Fibonacci";
    }else{
       locResult.innerHTML = n + " là số KHÔNG nằm trong dãy Fibonacci";
    }
}

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    arrayResult = fibonacci_series(n - 1);
    arrayResult.push(arrayResult[arrayResult.length - 1] + arrayResult[arrayResult.length - 2]);

    isFibonacci(n);
    return arrayResult;
  }
};

console.log(fibonacci_series(100));
console.log(arrayResult.includes(34));


 locCheck.addEventListener("click", function(){
    fibonacci_series(parseInt(locInputElem.value))
 }, );