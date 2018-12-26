namespace Arith { 
   export class ArithClass{ 
      public add(a:number,b:number) { 
         console.log(a+" + "+b+" = "+(a+b)); 
      }
      public sub(a:number,b:number) { 
         console.log(a+" - "+b+" = "+(a-b)); 
      }
      public mul(a:number,b:number) { 
         console.log(a+" * "+b+" = "+(a*b)); 
      }
      public div(a:number,b:number) { 
         console.log(a+" / "+b+" = "+(a/b)); 
      }
    }
}
var obj = new Arith.ArithClass();
obj.add(7,7);
/*
/// <reference path="Validation.ts" />*/