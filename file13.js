// if statement
var a=20;
if (a<15)
{
    console.log("The value is smaller");
}
console.log("The value is"+ " "+a);

//logical operators.
// logical and operator-- &&, where both condition joined by && should be true.
var b=10;
if(b<15 && b>5)
{
    console.log("Logical And is working");
}
//logical OR opeartor-- ||, where either of the condition or if both the condition should work for true.
var c=15;
if (c>10||c<20) //both conditio is working.
{
    console.log("Logical or is working");
}
if (c>10 || c<5)
{
    console.log("Logical or is working");
}
// logical Not operator-- ! , it works like complement which reverses the answer.
if((!(c>20))==1)
{
    console.log("The Logical Not is working");
}

//if else statement
var d=12;
if(d<11)
{
    console.log("The Value is true");
}
else{
    console.log("The value is False");
}
//if-else-if statement
var m=18;
if(m>=18)
{
    console.log("You are elligible for vote");
}
else if(m<18 && m>12)
{
    console.log("You are an teenager");
}
else
{
    console.log("You are under teenage");
}
// Ternary operator
if(((m==18)?1:0)==1)
{
    console.log("Condition is true");
}
