function arithFunction():void{
    console.log("Arith operator");
    var num1:number = 20;
    var num2:number = 4;
    var result:number = 0;
    result = num1 + num2;
    console.log("Sum: "+result); 
    result = num1 - num2; 
    console.log("Difference: "+result);
    result = num1*num2;
    console.log("Product: "+result);
    result = num1/num2;
    console.log("Quotient: "+result);
    result = num1%num2;
    console.log("Remainder: "+result);
}

function assigmentFunction():void{
    console.log("Assigment operator");
    var a:number = 20 
    var b:number = 15  
    a = b 
    console.log("a = b: "+a);
    a += b
    console.log("a+=b: "+a);
    a -= b 
    console.log("a-=b: "+a);
    a *= b 
    console.log("a*=b: "+a);
    a /= b 
    console.log("a/=b: "+a);   
    a %= b 
    console.log("a%=b: "+a);
}

function bitwiseFunction():void{
    console.log("Bitwise operator");
    var a:number = 2;   
    var b:number = 3;
    var result;
    result = (a & b);     
    console.log("(a & b) => ",result);
    result = (a | b);          
    console.log("(a | b) => ",result);  
    result = (a ^ b);  
    console.log("(a ^ b) => ",result);
    result = (~b); 
    console.log("(~b) => ",result);
    result = (a << b); 
    console.log("(a << b) => ",result); 
    result = (a >> b); 
    console.log("(a >> b) => ",result);
}

function comparisonFunction():void{
    console.log("Comparison operator");
    var num1:number = 15;
    var num2:number = 17;
    console.log("Value of num1: "+num1); 
    console.log("Value of num2 :"+num2);
    var result = num1>num2; 
    console.log("num1 greater than num2: "+result);
    result = num1<num2; 
    console.log("num1 lesser than num2: "+result);  
    result = num1>=num2;
    console.log("num1 greater than or equal to  num2: "+result);
    result = num1<=num2;
    console.log("num1 lesser than or equal to num2: "+result);  
    result = num1==num2; 
    console.log("num1 is equal to num2: "+result);  
    result = num1!=num2;  
    console.log("num1 is not equal to num2: "+result);
}

function logicalFunction():void{
    console.log("Logical operator");
    var avg:number = 20; 
    var percentage:number = 90; 
    console.log("Value of avg: "+avg+" ,value of percentage: "+percentage);
    var result:boolean = ((avg>50)&&(percentage>80)); 
    console.log("(avg>50)&&(percentage>80): ",result);
    var result:boolean = ((avg>50)||(percentage>80)); 
    console.log("(avg>50)||(percentage>80): ",result);
    var result:boolean=!((avg>50)&&(percentage>80)); 
    console.log("!((avg>50)&&(percentage>80)): ",result);
}
function stringFunction():void{
    console.log("String operator");
    var msg:string = "Hello "+"jai" 
    console.log(msg);
}
function typeofFunction():void{
    console.log("TypeOf operator");
    var name = "Jai";
    console.log(typeof name);
}

arithFunction();
assigmentFunction();
bitwiseFunction();
comparisonFunction();
logicalFunction();
stringFunction();
typeofFunction();
