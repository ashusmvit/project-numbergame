var z=1000;
function abc(){
var a = Math.floor(Math.random()*(9)+1);;
var b = Math.floor(Math.random()*(10));
var c = Math.floor(Math.random()*(10));
var d = a+""+b+""+c;
var q = [];
q.push(a);
q.push(b);
q.push(c);
q.sort(function(a,b){return a-b;});
var e = Number(d);
var w = q[1]-q[0];
var t = q[1]-q[2];
$(".ty").html("Your number is"+e);
if(a%2==0 && b%2==0 && c%2==0)
{
        $(".yt").html("Congrats you got <b>ALL DIGITS EVEN</b> and <b>300INR</b>");
          z=z+300;
        $(".rem").html("Remaining amount is"+z);

}
else if(a%2==1 && b%2==1 && c%2==1)
{
        $(".yt").html("Congrats you got <b>ALL DIGITS ODD</b> and <b>300INR</b>");
          z=z+300;
        $(".rem").html("Remaining amount is"+z);
}
else
{
        $(".yt").html("<b>Oops no bonus!!</b>");
}

if(a==b && b==c && a%2==0 && b%2==0 && c%2==0)
{
            $(".yt").html("Congrats all your numbers are <b>SAME</b> and <b>EVEN</b> so <b>BONUS</b> of <b>1000INR</b> is given with <b>300INR</b>");
              z=z+1000;
            $(".rem").html("Remaining amount is"+z);
}
else if(a==b && b==c && a%2==1 && b%2==1 && c%2==1)
{
            $(".yt").html("Congrats all your numbers are <b>SAME</b> and <b>ODD</b> so <b>BONUS</b> of <b>1000INR</b> is given with <b>300INR</b>");
                  z=z+1000;
            $(".rem").html("Remaining amount is"+z);
}
else if(w==1 && t==-1)
{
           $(".yt").html("Congrats your numbers are <b>CONSECUTIVE</b>");
           z=z+800;
           $(".rem").html("Remaining amount is"+z);
}
z=z-100;
$(".rem").html("Remaining amount is"+z);

if(z<100)
{
  $(".rem").html("GAME OVER!!");//this will override above function once it gets true
}
}
