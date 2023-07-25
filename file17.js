// prompt box actually takes input from the user and we can store that input in a variable and use thst value in different way.
var a= prompt("Enter your marks");
alert("your given marks is:"+ a);
switch(true)
{
    case (a>=90 && a<=100): console.log("Out standing");
    break;
    
    case (a>=80 && a<=89):console.log("Excellent");
    break;

    case (a>=60 && a<=79): console.log("Average");
    break;

    case (a>=30 && a<=59):
        console.log("below Average");
        break;
    
    case (a>=0 && a<=29):
        console.log("You are failed");
        break;
}