namespace Drawing { 
   export interface IShape { 
      draw(); 
   }
   export class Circle implements IShape { 
      public draw() { 
         console.log("Circle is drawn"); 
      } 
    }
    export class Triangle implements IShape { 
        public draw() { 
           console.log("Triangle is drawn"); 
        }
    }
}
function drawAllShapes(shape:Drawing.IShape) { 
   shape.draw(); 
} 
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
