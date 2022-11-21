function calc()
{
   var r = parseFloat(prompt("Enter the radius"));
   var p = 3.1415926535898
   var d = 2*r
   var ss = 4*p*r*r;
   var vs = (4/3)*p*r*r*r;
   var th = 3*p*r*r;
   var ch = 2*p*r*r;
   var vh = (2/3)*p*r*r*r;


   var dpara = document.getElementById("d");
   var sspara = document.getElementById("ss");
   var vspara = document.getElementById("vs");
   var thpara = document.getElementById("th");
   var chpara = document.getElementById("ch");
   var vhpara = document.getElementById("vh");

   dpara.textContent = "Diameter: " + d;
   sspara.textContent = "Surface Area of Sphere: " + ss;
   vspara.textContent = "Volume of Sphere: " + vs;
   thpara.textContent = "Total Surface Area of Hemisphere: " + th;
   chpara.textContent = "Curved Surface Area of Hemisphere: " + ch;
   vhpara.textContent = "Volume of Hemisphere: " + vh;

   
}

   document.getElementById("calc").addEventListener("click",calc);