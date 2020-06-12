console.log("-----medium assignment 1-----");
function reverseString(value, letter) {
    let x= value.split(' '); 
    for(let i=0; i<x.length; i++)
    {
   if (x[i][0] == letter)
   {    x[i] = x[i].split('').reverse('').join('');
   }
}
   return x.join(' ');
}
console.log(reverseString("word searches are super fun", "s"));
console.log(reverseString("first man to walk on the moon", "m"));
console.log(reverseString("peter piper picked pickled peppers", "p"));