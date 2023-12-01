//1
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  
  add = addNumbers(5, 7);
  console.log(add); 
  
//2
function mintosec(num01, num02) {
    
    sec = num01 * 60;
    return sec
}
console.log(mintosec(5));

//3
function nextnum(number1){
    nextNum = number1 + 1;
    return nextNum;
}
console.log(nextnum(110));

//4
function areaoftriangle(base, height){
    area = 0.5 * base * height;
    return area;
}
console.log(areaoftriangle(5,7));

//5
ar = [1, 4, 2, 5, 10];
function getfirstelement(ar){
    if (Array.isArray(ar) && ar.length>0);
    return ar[0];
}
console.log(getfirstelement(ar));
//6
age = parseInt(prompt("Enter A Positive number"));
function calculate(age){
    if (age => 0){
        days = age * 365;
        return days ;
}
    else{
        return "invalid" 
}

}
console.log(calculate(age))
   
//7
function powercal(vol, cur){
    power = vol * cur;
    return power;
}
console.log(powercal(480, 20))
//8

function edge(firstedge, secondedge){
    if(firstedge > 0 && secondedge > 0){
        thirdedge =(firstedge + secondedge) -1;
        return thirdedge;
    }
    else{
        return "NotValid";
    }
}
console.log(edge(8,10));

//9
 function remainder(numm1,numm2){
    re = numm1 % numm2;
    return re;
 }
console.log(remainder(-9,45))
//10
function givesomething(a){
    return "Something" +a;

}
console.log(givesomething("is better than nothing"))
//11
function squared(s) {
    return s * s;
  }
 
console.log(squared(5));
//12
function lessthanequalzero(a){
    if (a <= 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(lessthanequalzero(3));
//13
function internalangle(n){
    if (n > 2){
        angle = (n-2) * 180;
        return angle
    }
    else{
        return "No Angle Exist"
    }
}
console.log(internalangle(2));

//14
  function code(q){
    return q + "Coder" ;

}
console.log(code("Abir"))

//15
function lessthan100(m,l){
    if(m+l<100){
        return "True";
    }
    else{
        return "False";
    }
}
console.log(lessthan100(50,10));