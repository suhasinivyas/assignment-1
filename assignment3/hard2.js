console.log("-----hard assignment 2-----");
function numInStr(data)
{
    let x= data.filter(function(x){
        if(x.includes("0")|| x.includes("1")|| x.includes("2")|| x.includes("3")|| x.includes("4")|| x.includes("5")|| x.includes("6")|| x.includes("7")|| x.includes("8")|| x.includes("9") )
        {
            return "null"
        }
    }
    );
   return x
}

console.log(numInStr (["1a", "a", "2b", "b"]));
console.log(numInStr (["abc", "abc10"]));
console.log(numInStr (["abc", "ab10c", "a10bc", "bcd"]))
console.log(numInStr (["this is a test", "test1"]))