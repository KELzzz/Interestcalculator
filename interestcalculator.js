function condi()
{
var principal
principal=document.getElementById("principal").value

var rate = 8/100;
var time = 1;
var InterestAmount = principal * time * rate;
var simpleInterest = parseInt( InterestAmount) + parseInt( principal);
var message=("Your loan application of" )

document.getElementById("result").innerHTML=( message + " <br/>" + "" + principal  + " " + " " + "" +  "is"  + " " + ""   +  simpleInterest  + " " + "" + "using the rate of 8%" )



}
