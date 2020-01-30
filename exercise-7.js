//1. Menyusun Barisan Bintang

var rows = 5;

for(var i =0; i<rows; i++)
{
    console.log("*");
}

-------------------------------------------------------

//2. Menyusun Barisan Bintang Dengan Nested Looping
emp);

var rows = 5;
for(var i =0; i<rows; i++)
{
    var temp = "";
    for(j=0; j<rows; j++)
        {
            temp += "*";         
        }  
        console.log(temp);
}

-------------------------------------------------------

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows = 5;
for(var i =0; i<rows; i++)
{     
  var temp = "";  
    for(var j =0; j<=i; j++)
    {
      temp += "*";
    }
  console.log(temp);      
}
