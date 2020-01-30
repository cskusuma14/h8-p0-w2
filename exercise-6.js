1. Melakukan Looping Menggunakan While

var flag = 2;
console.log("Looping Pertama");

while(flag <= 20) ]
{ 
  console.log( flag + ' - I love coding'); 
  flag +=2; 
}

console.log("Looping Kedua");
//flag = flag-2 ;
while(flag > 2) 
{ 
    flag -=2;
    console.log( flag + ' - I will become fullstack developer');      
}

--------------------------------------------------------------------------

2. Melakukan Looping Menggunakan For

console.log("Looping Pertama");
for(var i=1; i<=20; i++)
{
    console.log( i + ' - I love coding');
}

console.log("Looping Kedua");
for(var i=20; i>=1; i--)
{
    console.log( i + ' - I will become fullstack developer');
}

--------------------------------------------------------------------------

3. Angka Ganjil dan Genap


//Looping Ganjil Genap
for(var i=1; i<=100; i++)
{
    if(i % 2 == 0)
    console.log("angka genap");

    else
    console.log("angka ganjil");    
}

//Looping Kelipatan 3 counter 2
for(var i=1; i<=100; i+=2)
{
    if(i % 3 == 0)
    console.log("3 KELIPATAN 3");

    else
    console.log("");       
}

//Looping kelipatan 6 counter 5
for(var i=1; i<=100; i+=5)
{
    if(i % 6 == 0)
    console.log("6 KELIPATAN 6");

    else
    console.log("");       
}

//Looping kelipatan 10 counter 9
for(var i=1; i<=100; i+=9)
{
    if(i % 10 == 0)
    console.log("10 KELIPATAN 10");

    else
    console.log("");       
}
