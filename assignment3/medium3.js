console.log("-----medium assignment 3-----");
 function removal(data)
 {
     return [...new Set(data)]
 }
 console.log(removal([1, 0, 1, 0]));
 console.log(removal(["The", "big", "cat"]));
 console.log(removal(["John", "Taylor", "John"]));

