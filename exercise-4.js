var tanggal = 31; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 7 ; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2000; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
    
var stringBulan = "";
switch(bulan) {
case 1:   
    { 
        stringBulan = 'Januari';
        // console.log(tanggal + " " + stringBulan + " " + tahun); 
        break; 
    }
case 2:   
    { 
        stringBulan = 'Februari';
        // console.log(tanggal + " " + stringBulan + " " + tahun);  
        break; 
    }
case 3:   
    { 
        stringBulan = 'Maret';
        // console.log(tanggal + " " + stringBulan + " " + tahun);  
        break; 
    }
case 4:   
    { 
        stringBulan = 'April';
        // console.log(tanggal + " " + stringBulan + " " + tahun);  
        break; 
    }
case 5:   
    { 
        stringBulan = 'Mei';
        // console.log(tanggal + " " + stringBulan + " " + tahun);  
        break; 
    }
case 6:   
    { 
        stringBulan = 'Juni';
        console.log(tanggal + " " + stringBulan + " " + tahun);  
        break; 
    }
case 7:   
    { 
        stringBulan = 'Juli';
        // console.log(tanggal + " " + stringBulan + " " + tahun);  
        break; 
    }
case 8:   
    { 
        stringBulan = 'Agustus';
        // console.log(tanggal + " " + stringBulan + " " + tahun);  
        break; 
    }
case 9:   
    { 
        stringBulan = 'September';
        // console.log(tanggal + " " + stringBulan + " " + tahun);  
        break; 
    }
case 10:   
    { 
        stringBulan = 'Oktober';
        // console.log(tanggal + " " + stringBulan + " " + tahun); 
        break; 
    }
case 11:   
    { 
        stringBulan = 'November';
        // console.log(tanggal + " " + stringBulan + " " + tahun);   
        break; 
    }
case 12:   
    { 
        stringBulan = 'Desember';
        // console.log(tanggal + " " + stringBulan + " " + tahun); 
        break; 
    }
default:  
    { 
      console.log('Salah Bulan!!');
    }
}

if (tahun < 1900 || tahun > 2200)
    {
        console.log("Salah Tahun!!"); 
    }
else if(bulan ==1 || bulan == 3 || bulan == 5 || bulan == 7 || bulan == 8 || bulan == 10 || bulan == 12)
{
    if(tanggal < 1 || tanggal > 31)
    {
        console.log("Salah tanggal!!");
    }
    else console.log(tanggal + " " + stringBulan + " " + tahun);
}
else if(bulan == 2)
{
    if(tanggal < 1 || tanggal > 29)
    {
        console.log("Salah tanggal!!");
    }
    else console.log(tanggal + " " + stringBulan + " " + tahun);
}
else if(bulan == 4 || bulan == 6 || bulan == 9 || bulan == 11)
{
    if(tanggal < 1 || tanggal > 30)
    {
        console.log("Salah tanggal!!");
    }
    else console.log(tanggal + " " + stringBulan + " " + tahun);
}
