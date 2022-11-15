function calc()
{
   var r = parseFloat(prompt("Enter the radius"));
   var sl = parseFloat(prompt("Enter the slant height"));
   var p = 3.1415926535898
   var h = Math.sqrt(sl*sl - r*r);
   var csa = (p)*r*sl;
   var tsa = (p)*r*(sl+r);
   var v = (1/3)*(p)*r*r*h;   

if(h==0)
document.write("Invalid data. Slant Height > Radius. Refresh to start over.")

   var csapara = document.getElementById("csa");
   var tsapara = document.getElementById("tsa");
   var hpara = document.getElementById("h");
   var vpara = document.getElementById("v");

   csapara.textContent = "Curved Surface Area: " + csa;
   tsapara.textContent = "Total Surface Area: " + tsa;
   hpara.textContent = "Height: " + h;
   vpara.textContent = "Volume: " + v;
   
}

   document.getElementById("calc").addEventListener("click",calc);
