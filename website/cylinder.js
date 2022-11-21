function calc()
{
   var r = parseFloat(prompt("Enter the radius"));
   var h = parseFloat(prompt("Enter the height"));
   var p = 3.1415926535898
   var csa = 2*p*r*h;
   var tsa = 2*p*r*(r+h);
   var v = p*r*r*h;   

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