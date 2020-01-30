function xo(str) 
{
    var checkX = 0;
    var checkO = 0;

    // you can only write your code here!
    for(var i = 0; i < str.length; i++)
    {
        if(str[i] === 'x')
        {
            checkX = checkX +1;
        }
        else if(str[i] === 'o')
        {
            checkO = checkO +1;
        }
    }
    if(checkX == checkO) return true;
   
    else return false;
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
