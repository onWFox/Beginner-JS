function factorial(n){
   if(n === 1){
    return 1;
   }else{
    return n = n*factorial(n-1)
   }

}
alert(factorial(4))