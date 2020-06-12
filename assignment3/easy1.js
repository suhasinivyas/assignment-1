console.log("-----easy assignment 1-----");
const character = (letter, str) => 
{
 var count = 0;
 for (var pos = 0; pos < str.length; pos++) 
 {
    if (str.charAt(pos) == letter) 
      {
      count += 1;
      }
  }
    console.log(count);
}

character("a","edabit");
character("b", "big fat bubble");
character("c", "Chamber of secrets");
