console.log("-----medium assignment 2-----");
function jackpot(value)
{
    for( let i=0;i<value.length;i++)
    {
        for(let j=1; j<i; j++)
             if(value[i] !==value[j])
            {
              return false;
            }
        }
        return true;
    }

console.log(jackpot(["@", "@", "@", "@"]));
console.log(jackpot(["abc", "abc", "abc", "abc"]));
console.log(jackpot(["SS", "SS", "SS", "SS"]));
console.log(jackpot(["&&", "&", "&&&", "&&&&"]));
console.log(jackpot(["SS", "SS", "SS", "Ss"]))

