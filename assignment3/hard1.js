console.log("-----hard assignment 1-----");
 function realType(value)
 {
     if(value== null)
     {
         return "null";
     }
     else{
     if(typeof(value)==="number")
     {
         return "number";
     }
     else if(typeof(value)==="string")
     {
         return "string";
     }
     else if(typeof(value)==="boolean")
     {
         return "boolean";
     }
     else if(typeof(value)==="object")
     {
         return "array";
     }
    }
     
 }
 console.log(realType (1))
 console.log(realType("a"));
 console.log(realType(true));
 console.log(realType([]));
 console.log(realType(null))
