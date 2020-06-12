console.log("-----easy assignment 2-----");

function replacevowel(value)
{
    let str= value.split(""); 
    for(let x=0;x<str.length;x++)
    {
        if(str[x]=='a')
        {
            str[x]=1;
        }
        else if(str[x]=='e')
        {
            str[x]=2;
        }
        else if(str[x]=='i')
        {
            str[x]=3;
        }
        else if(str[x]=='o')
        {
            str[x]=4;
        }
        else if(str[x]=='u')
        {
            str[x]=5;
        }
    }
    console.log(str.join(""));
}
replacevowel("karachi");
replacevowel("chembur");
replacevowel("khandbari");
