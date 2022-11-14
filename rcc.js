function calc()
{
   var r = parseFloat(prompt("Enter the radius"));
   var h = parseFloat(prompt("Enter the height"));
   var p = parseFloat(prompt("Let pi"));
   var sl = Math.sqrt(h*h+r*r);
   var csa = p*r*sl;
   var tsa = p*r*(sl+r);
   var v = (1/3)*p*r*r*h;



   var csapara = document.getElementById("csa");
   var tsapara = document.getElementById("tsa");
   var slpara = document.getElementById("sl");
   var vpara = document.getElementById("v");

   csapara.textContent = "Curved Surface Area: " + csa;
   tsapara.textContent = "Total Surface Area: " + tsa;
   slpara.textContent = "Slant Height: " + sl;
   vpara.textContent = "Volume: " + v;
   
}

   document.getElementById("calc").addEventListener("click",calc);